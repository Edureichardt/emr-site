"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  MessageCircle,
  Mail,
  ChevronDown,
  Menu,
  X,
  Globe,
  Megaphone,
  TrendingUp,
  PenTool,
  Palette,
  Headphones,
  Camera,
  ArrowRight,
  Rocket,
  Trophy,
} from "lucide-react";

// Interfaces para o Mini-game
interface Obstacle {
  x: number;
  y: number;
  passed: boolean;
}

export default function Home() {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // ESTADOS DO MINI-GAME (EASTER EGG)
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [rocketY, setRocketY] = useState(250);
  const [velocity, setVelocity] = useState(0);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  
  // Estado para gerenciar a cor atual do foguete, alertas de prêmios e fundo do jogo
  const [rocketColor, setRocketColor] = useState("text-purple-400");
  const [glowColor, setGlowColor] = useState("rgba(168,85,247,1)");
  const [gameBgColor, setGameBgColor] = useState("from-neutral-950 to-purple-950/20");
  const [unlockedAlert, setUnlockedAlert] = useState<string | null>(null);

  const gameLoopRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const beatIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioBgRef = useRef<HTMLAudioElement | null>(null);

  const gravity = 0.4;
  const jump = -7;

  // Prêmios / Marcos de pontuação
  const prizeMilestones = [
    { score: 15, name: "Ciano Aurora", color: "text-cyan-400" },
    { score: 25, name: "Esmeralda Quantum", color: "text-emerald-400" },
    { score: 35, name: "Azul Elétrico", color: "text-blue-500" },
    { score: 45, name: "Rosa Choque", color: "text-fuchsia-500" },
    { score: 55, name: "Amarelo Neon", color: "text-yellow-300" },
    { score: 65, name: "Laranja Plasma", color: "text-orange-500" },
    { score: 75, name: "Branco Estelar", color: "text-slate-100" },
    { score: 85, name: "Ouro Real", color: "text-amber-400" },
    { score: 95, name: "Vermelho Big Bang", color: "text-red-500" },
  ];

  // Lógica para determinar as cores do prêmio e o background com base no score
  useEffect(() => {
    if (score >= 95) {
      setRocketColor("text-red-500");
      setGlowColor("rgba(239,68,68,1)");
      setGameBgColor("from-neutral-950 to-red-950/40");
    } else if (score >= 85) {
      setRocketColor("text-amber-400");
      setGlowColor("rgba(251,191,36,1)");
      setGameBgColor("from-neutral-950 to-amber-950/30");
    } else if (score >= 75) {
      setRocketColor("text-slate-100");
      setGlowColor("rgba(241,245,249,1)");
      setGameBgColor("from-neutral-950 to-slate-900/40");
    } else if (score >= 65) {
      setRocketColor("text-orange-500");
      setGlowColor("rgba(249,115,22,1)");
      setGameBgColor("from-neutral-950 to-orange-950/30");
    } else if (score >= 55) {
      setRocketColor("text-yellow-300");
      setGlowColor("rgba(253,224,71,1)");
      setGameBgColor("from-neutral-950 to-yellow-950/20");
    } else if (score >= 45) {
      setRocketColor("text-fuchsia-500");
      setGlowColor("rgba(217,70,239,1)");
      setGameBgColor("from-neutral-950 to-fuchsia-950/30");
    } else if (score >= 35) {
      setRocketColor("text-blue-500");
      setGlowColor("rgba(59,130,246,1)");
      setGameBgColor("from-neutral-950 to-blue-950/30");
    } else if (score >= 25) {
      setRocketColor("text-emerald-400");
      setGlowColor("rgba(52,211,153,1)");
      setGameBgColor("from-neutral-950 to-emerald-950/30");
    } else if (score >= 15) {
      setRocketColor("text-cyan-400");
      setGlowColor("rgba(34,211,238,1)");
      setGameBgColor("from-neutral-950 to-cyan-950/30");
    } else {
      setRocketColor("text-purple-400");
      setGlowColor("rgba(168,85,247,1)");
      setGameBgColor("from-neutral-950 to-purple-950/20");
    }

    const currentMilestone = prizeMilestones.find(m => m.score === score);
    if (currentMilestone) {
      setUnlockedAlert(`Desbloqueado: ${currentMilestone.name}!`);
      const timer = setTimeout(() => setUnlockedAlert(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [score]);

  // GERAÇÃO DA BATIDA ELETRÔNICA PROCEDURAL E MÚSICA DE FUNDO
  const startAudio = () => {
    try {
      if (!audioBgRef.current) {
        audioBgRef.current = new Audio("/space-music.mp3");
        audioBgRef.current.loop = true;
        audioBgRef.current.volume = 0.4;
      }
      audioBgRef.current.currentTime = 0;
      audioBgRef.current.play().catch((e) => console.log("Erro ao tocar música de fundo:", e));

      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      beatIntervalRef.current = setInterval(() => {
        if (!audioCtxRef.current) return;

        const now = audioCtxRef.current.currentTime;
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();

        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(130, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start(now);
        osc.stop(now + 0.2);
      }, 200);

    } catch (e) {
      console.log("AudioContext não suportado ou bloqueado.");
    }
  };

  const playPassSound = () => {
    try {
      if (!audioCtxRef.current) return;

      const now = audioCtxRef.current.currentTime;
      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.15);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch (e) {}
  };

  const stopAudio = () => {
    if (beatIntervalRef.current) {
      clearInterval(beatIntervalRef.current);
      beatIntervalRef.current = null;
    }
    if (audioBgRef.current) {
      audioBgRef.current.pause();
    }
  };

  // CURSOR GLOW
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // REMOVE DEDINHO DOS LINKS/BOTÕES
  useEffect(() => {
    const elements = document.querySelectorAll("a, button");
    elements.forEach((el) => {
      (el as HTMLElement).style.cursor = "none";
    });
  }, [gameActive]);

  // FECHAR MENU
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // BLOQUEAR SCROLL MOBILE & GAME MODE
  useEffect(() => {
    if (menuOpen || gameActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen, gameActive]);

  // LÓGICA DO GAME LOOP (FLAPPY ROCKET)
  const startGame = () => {
    setRocketY(250);
    setVelocity(0);
    setScore(0);
    setObstacles([
      { x: 600, y: 150 + Math.random() * 200, passed: false },
      { x: 900, y: 150 + Math.random() * 200, passed: false },
    ]);
    setGameOver(false);
    setGameActive(true);
    stopAudio();
    startAudio();
  };

  const handleJump = () => {
    if (gameOver) {
      startGame();
    } else {
      setVelocity(jump);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameActive && e.code === "Space") {
        e.preventDefault();
        handleJump();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameActive, gameOver]);

  useEffect(() => {
    if (!gameActive || gameOver) return;

    const updateGame = () => {
      setRocketY((prevY) => {
        const nextY = prevY + velocity;
        if (nextY > 465 || nextY < 5) {
          setGameOver(true);
          stopAudio();
          return prevY;
        }
        return nextY;
      });

      setVelocity((prevVel) => prevVel + gravity);

      setObstacles((prevObstacles) => {
        return prevObstacles.map((obs) => {
          let nextX = obs.x - 3.5;

          if (nextX < -60) {
            nextX = 600;
            return { x: nextX, y: 100 + Math.random() * 250, passed: false };
          }

          if (!obs.passed && obs.x < 100) {
            obs.passed = true;
            playPassSound();
            setScore((prevScore) => {
              const newScore = prevScore + 1;
              if (newScore > highScore) setHighScore(newScore);
              return newScore;
            });
          }

          return { ...obs, x: nextX };
        });
      });

      obstacles.forEach((obs) => {
        if (obs.x > 65 && obs.x < 135) {
          if (rocketY < obs.y - 70 || rocketY > obs.y + 70) {
            setGameOver(true);
            stopAudio();
          }
        }
      });

      gameLoopRef.current = requestAnimationFrame(updateGame);
    };

    gameLoopRef.current = requestAnimationFrame(updateGame);
    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, [gameActive, gameOver, velocity, obstacles, rocketY, score, highScore]);

  useEffect(() => {
    return () => stopAudio();
  }, []);

  const services = [
    {
      title: "Sites Profissionais",
      icon: Globe,
      description: "Sites modernos, rápidos e responsivos para fortalecer sua marca e aumentar conversões.",
    },
    {
      title: "Social Media",
      icon: Megaphone,
      description: "Gestão estratégica de redes sociais focada em crescimento e autoridade digital.",
    },
    {
      title: "Tráfego Pago",
      icon: TrendingUp,
      description: "Campanhas inteligentes para gerar leads, vendas e crescimento rápido.",
    },
    {
      title: "Conteúdo Estratégico",
      icon: PenTool,
      description: "Conteúdos planejados para atrair, engajar e converter clientes.",
    },
    {
      title: "Identidade Visual",
      icon: Palette,
      description: "Design moderno e profissional para fortalecer sua marca.",
    },
    {
      title: "Suporte Premium",
      icon: Headphones,
      description: "Acompanhamento contínuo para garantir performance e crescimento.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden cursor-none">
      
      {/* TELA DA INTERFACE DO EASTER EGG (MINI-GAME FLAPPY ROCKET) */}
      <AnimatePresence>
        {gameActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/95 flex flex-col lg:flex-row items-center justify-center gap-6 p-0 sm:p-4 cursor-default"
          >
            {/* CONTAINER PRINCIPAL DO JOGO */}
            <div 
              className={`relative w-full sm:max-w-[500px] h-full sm:h-[500px] bg-gradient-to-b ${gameBgColor} border-0 sm:border border-purple-500/30 sm:rounded-3xl overflow-hidden shadow-2xl select-none transition-all duration-1000`} 
              onClick={handleJump}
              onTouchStart={(e) => {
                e.preventDefault();
                handleJump();
              }}
            >
              {/* Estrelas cadentes em movimento contínuo */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    style={{
                      width: "80px",
                      height: "1px",
                      top: `${20 + i * 18}%`,
                      left: "-10%",
                    }}
                    animate={{ x: ["0vw", "150vw"] }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.7,
                    }}
                  />
                ))}
              </div>

              {/* Grid Interno do Game */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
              
              {/* Botão para Sair do Jogo */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  stopAudio();
                  setGameActive(false);
                }} 
                className="absolute top-4 right-4 z-50 p-2 bg-white/10 text-white rounded-full hover:bg-red-500/20 hover:text-red-400 transition duration-300 cursor-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Placar Real-Time */}
              <div className="absolute top-4 left-6 z-40 flex gap-6 text-sm font-semibold tracking-wide bg-neutral-950/80 px-3 py-1 rounded-full backdrop-blur-sm">
                <div>SCORE: <span className="text-purple-400 text-lg font-black ml-1">{score}</span></div>
                <div className="text-gray-500">MAX: <span className="ml-1">{highScore}</span></div>
              </div>

              {/* Toast de Prêmio Desbloqueado */}
              <AnimatePresence>
                {unlockedAlert && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute top-16 inset-x-0 mx-auto w-fit z-50 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-black text-xs px-5 py-2.5 rounded-full shadow-lg shadow-purple-500/40 border border-purple-400/40 text-center"
                  >
                    {unlockedAlert}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* O JOGADOR: Foguete EMR */}
              <div 
                className="absolute left-[60px] sm:left-[100px] transition-transform duration-75"
                style={{ 
                  top: `${rocketY}px`,
                  transform: `translateY(-50%) rotate(${velocity * 4 - 20}deg)` 
                }}
              >
                <div className="relative">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-fuchsia-500 blur-sm rounded-full animate-pulse" />
                  <Rocket 
                    className={`w-9 h-9 ${rocketColor} transition-colors duration-300`} 
                    style={{ filter: `drop-shadow(0 0 8px ${glowColor})` }}
                  />
                </div>
              </div>

              {/* OBSTÁCULOS */}
              {obstacles.map((obs, index) => (
                <div key={index} className="absolute inset-y-0" style={{ left: `${obs.x}px` }}>
                  {/* Obstáculo Superior */}
                  <div 
                    className="absolute top-0 w-12 border-x border-b rounded-b-xl flex flex-col justify-end items-center pb-2 transition-colors duration-500"
                    style={{ 
                      height: `${obs.y - 70}px`,
                      borderColor: glowColor,
                      background: `linear-gradient(to bottom, rgba(0,0,0,0.9), ${glowColor}22)`
                    }}
                  >
                    <Rocket className="w-6 h-6 rotate-180 opacity-40" style={{ color: glowColor }} />
                  </div>
                  {/* Obstáculo Inferior */}
                  <div 
                    className="absolute bottom-0 w-12 border-x border-t rounded-t-xl flex flex-col justify-start items-center pt-2 transition-colors duration-500"
                    style={{ 
                      top: `${obs.y + 70}px`,
                      borderColor: glowColor,
                      background: `linear-gradient(to top, rgba(0,0,0,0.9), ${glowColor}22)`
                    }}
                  >
                    <Rocket className="w-6 h-6 opacity-40" style={{ color: glowColor }} />
                  </div>
                </div>
              ))}

              {/* Interface de Game Over */}
              {gameOver && (
                <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 z-50">
                  <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500 mb-2">GAME OVER</h3>
                  <p className="text-gray-400 text-sm mb-6">Seu foguete caiu no espaço profundo.</p>
                  
                  <div className="flex flex-col gap-3 w-full max-w-[200px]">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        startGame();
                      }}
                      className="w-full bg-gradient-to-r from-purple-700 to-fuchsia-600 px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-purple-950 hover:scale-105 transition duration-300 cursor-none"
                    >
                      Tentar Novamente
                    </button>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        stopAudio();
                        setGameActive(false);
                      }}
                      className="w-full bg-neutral-900 border border-white/10 text-gray-300 px-6 py-3 rounded-xl text-sm font-bold hover:bg-neutral-800 transition duration-300 cursor-none"
                    >
                      Sair do Jogo
                    </button>
                  </div>
                  
                  <span className="text-[11px] text-gray-600 mt-4">Dica: Toque na tela ou pressione Espaço</span>
                </div>
              )}

              {/* Mensagem Inicial de Instruções */}
              {!gameOver && score === 0 && obstacles[0]?.x > 500 && (
                <div className="absolute bottom-8 inset-x-0 text-center animate-bounce pointer-events-none text-xs text-gray-400 tracking-wider px-4">
                  TOQUE OU PRESSIONE ESPAÇO PARA SUBIR
                </div>
              )}
            </div>

            {/* PAINEL LATERAL DE PRÊMIOS */}
            <div className="w-full lg:w-[260px] bg-neutral-950/80 border border-purple-500/20 rounded-3xl p-5 backdrop-blur-md max-h-[500px] overflow-y-auto hidden sm:block">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <h4 className="font-black text-sm tracking-wide">RECOMPENSAS DE SCORE</h4>
              </div>
              <div className="flex flex-col gap-2">
                {prizeMilestones.map((m, idx) => {
                  const isUnlocked = score >= m.score;
                  return (
                    <div 
                      key={idx} 
                      className={`flex items-center justify-between p-2 rounded-xl text-xs transition-all duration-300 ${
                        isUnlocked ? "bg-purple-950/40 border border-purple-500/30" : "bg-neutral-900/40 opacity-40"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${m.color}`}>•</span>
                        <span className={isUnlocked ? "font-semibold text-white" : "text-gray-400"}>{m.name}</span>
                      </div>
                      <span className="font-black text-purple-400">{m.score} pts</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* CURSOR FOGUETE */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:flex"
        animate={{
          x: "var(--x)",
          y: "var(--y)",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-20 h-20 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />

          <motion.div
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
            }}
            className="absolute top-7 w-3 h-8 bg-gradient-to-b from-fuchsia-400 via-purple-500 to-transparent blur-[2px] rounded-full"
          />

          <motion.div
            whileHover={{
              rotate: -45,
              scale: 1.2,
            }}
            className="relative"
          >
            <Rocket
              className="w-9 h-9 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,1)]"
              style={{
                transform: "rotate(-45deg)",
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* CURSOR GLOW */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background:
            "radial-gradient(600px at var(--x) var(--y), rgba(168,85,247,0.18), transparent 80%)",
        }}
      />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between py-4">
            
            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden z-50 relative cursor-none"
            >
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>

            {/* NAV DESKTOP */}
            <nav className="hidden lg:flex items-center gap-10">
              <a href="#sobre" className="hover:text-purple-400 transition duration-300">Sobre</a>
              <a href="#catalogo" className="hover:text-purple-400 transition duration-300">Serviços</a>
              <a href="#processo" className="hover:text-purple-400 transition duration-300">Processo</a>
              <a href="#instagram" className="hover:text-purple-400 transition duration-300">Instagram</a>
            </nav>

            {/* LOGO (GATILHO DO EASTER EGG / JOGO) */}
            <div 
              onClick={startGame}
              className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center cursor-pointer group active:scale-95 transition duration-300"
              title="Clique para jogar!"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-purple-600 blur-[80px] opacity-50 rounded-full group-hover:bg-fuchsia-500 group-hover:opacity-75 transition duration-500"
                />

                <Image
                  src="/logo99.png"
                  alt="EMR"
                  fill
                  sizes="(max-width: 768px) 96px, 112px"
                  className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5547991666865"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex bg-gradient-to-r from-purple-700 to-fuchsia-600 hover:scale-105 transition duration-300 px-6 py-3 rounded-2xl font-semibold shadow-2xl shadow-purple-900/40"
            >
              Orçamento
            </a>

            <div className="lg:hidden w-7" />
          </div>
        </div>

        {/* MENU MOBILE */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-t border-white/10 z-40"
            >
              <nav className="flex flex-col items-center gap-6 py-10 text-lg font-semibold">
                <a href="#sobre" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition duration-300">Sobre</a>
                <a href="#catalogo" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition duration-300">Serviços</a>
                <a href="#processo" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition duration-300">Processo</a>
                <a href="#instagram" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition duration-300">Instagram</a>

                <a
                  href="https://wa.me/5547991666865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-gradient-to-r from-purple-700 to-fuchsia-600 px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-purple-900/40"
                >
                  Solicitar orçamento
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 sm:py-28 lg:py-36 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute w-[700px] h-[700px] bg-purple-700/20 blur-[180px] rounded-full"
        />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-white/5 backdrop-blur mb-8">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Soluções Digitais Premium
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-tight">
            Criamos experiências digitais que fazem sua empresa{" "}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              crescer online
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-8 mt-8">
            Sites modernos, sistemas inteligentes e estratégias digitais criadas para gerar autoridade e conversão.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
            <a
              href="https://wa.me/5547991666865"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-700 to-fuchsia-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-purple-900/40"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
            </a>

            <a
              href="#catalogo"
              className="inline-flex items-center gap-3 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold backdrop-blur-xl"
            >
              Ver catálogo
            </a>
          </div>
        </motion.div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex px-4 py-2 rounded-full border border-purple-500/30 bg-white/5 mb-8">
              Sobre a EMR
            </div>

            <h2 className="text-5xl font-black leading-tight">
              Estratégia digital em{" "}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                outro nível
              </span>
            </h2>

            <p className="text-gray-400 leading-8 mt-8 text-lg">
              Desenvolvemos soluções digitais premium para empresas e pessoas que querem autoridade, presença online e crescimento real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-600/20 blur-[100px]" />
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/socios.jpeg"
                  alt="Sócios"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="catalogo" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-black text-center mb-16">Serviços</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                onClick={() => setOpenCard(openCard === index ? null : index)}
                className="group cursor-pointer relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-transparent" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <ChevronDown className={`transition ${openCard === index ? "rotate-180" : ""}`} />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openCard === index ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-6" />
                    <p className="text-gray-400 leading-7">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section id="instagram" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-pink-500/30 bg-white/5 mb-8">
            <Camera className="w-5 h-5 text-pink-400" />
            Instagram EMR
          </div>
          <h2 className="text-5xl font-black">Acompanhe nosso Instagram</h2>
          <p className="text-gray-400 mt-6 text-lg">Conteúdos, estratégias e bastidores da EMR.</p>
        </div>

        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
          <div className="flex justify-center mb-6">
            <Camera className="w-16 h-16 text-pink-500" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Veja nossas publicações</h3>
          <p className="text-gray-400 max-w-2xl mx-auto leading-8">
            Acesse o Instagram oficial da EMR para acompanhar conteúdos, projetos, marketing digital e novidades.
          </p>
          <a
            href="https://www.instagram.com/emr_solucoesdigitais/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 bg-gradient-to-r from-pink-600 to-purple-600 hover:scale-105 transition px-8 py-4 rounded-2xl font-bold shadow-2xl"
          >
            <Camera className="w-5 h-5" />
            Ver Instagram
          </a>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-black text-center mb-20">Como funciona</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Reunião estratégica",
            "Planejamento",
            "Desenvolvimento",
            "Entrega e suporte",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-[30px] p-8 text-center"
            >
              <div className="text-5xl font-black text-purple-500 mb-6">0{index + 1}</div>
              <h3 className="text-xl font-bold">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-6xl mx-auto px-6 py-24">
        <div className="rounded-[40px] p-12 bg-gradient-to-r from-purple-950 via-purple-800 to-fuchsia-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center">
            <h2 className="text-5xl font-black mb-6">Vamos criar algo incrível?</h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Entre em contato e transforme sua presença digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <a
                href="https://wa.me/5547991666865"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/40 hover:bg-black/60 transition px-8 py-5 rounded-2xl flex items-center justify-center gap-3"
              >
                <MessageCircle />
                WhatsApp
              </a>
              <a
                href="mailto:contatoemrdigital@gmail.com"
                className="bg-black/40 hover:bg-black/60 transition px-8 py-5 rounded-2xl flex items-center justify-center gap-3"
              >
                <Mail />
                Gmail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href="https://wa.me/5547991666865"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.7)] animate-pulse"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        Desenvolvido por EMR Soluções Digitais
      </footer>

    </main>
  );
}