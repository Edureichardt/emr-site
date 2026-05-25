"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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
} from "lucide-react";

export default function Home() {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // CURSOR GLOW
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--x",
        `${e.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // REMOVE DEDINHO DOS LINKS/BOTÕES
  useEffect(() => {
    const elements = document.querySelectorAll("a, button");

    elements.forEach((el) => {
      (el as HTMLElement).style.cursor = "none";
    });
  }, []);

  // FECHAR MENU
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // BLOQUEAR SCROLL MOBILE
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const services = [
    {
      title: "Sites Profissionais",
      icon: Globe,
      description:
        "Sites modernos, rápidos e responsivos para fortalecer sua marca e aumentar conversões.",
    },

    {
      title: "Social Media",
      icon: Megaphone,
      description:
        "Gestão estratégica de redes sociais focada em crescimento e autoridade digital.",
    },

    {
      title: "Tráfego Pago",
      icon: TrendingUp,
      description:
        "Campanhas inteligentes para gerar leads, vendas e crescimento rápido.",
    },

    {
      title: "Conteúdo Estratégico",
      icon: PenTool,
      description:
        "Conteúdos planejados para atrair, engajar e converter clientes.",
    },

    {
      title: "Identidade Visual",
      icon: Palette,
      description:
        "Design moderno e profissional para fortalecer sua marca.",
    },

    {
      title: "Suporte Premium",
      icon: Headphones,
      description:
        "Acompanhamento contínuo para garantir performance e crescimento.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden cursor-none">

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

          {/* GLOW */}
          <div className="absolute w-20 h-20 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />

          {/* FOGO */}
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

          {/* FOGUETE */}
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

            {/* MOBILE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden z-50 relative"
            >
              {menuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>

            {/* NAV DESKTOP */}
            <nav className="hidden lg:flex items-center gap-10">
              <a href="#sobre" className="hover:text-purple-400 transition">
                Sobre
              </a>

              <a href="#catalogo" className="hover:text-purple-400 transition">
                Serviços
              </a>

              <a href="#processo" className="hover:text-purple-400 transition">
                Processo
              </a>

              <a href="#instagram" className="hover:text-purple-400 transition">
                Instagram
              </a>
            </nav>

            {/* LOGO */}
            <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center">

              <div className="relative w-24 h-24 sm:w-28 sm:h-28">

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-purple-600 blur-[80px] opacity-50 rounded-full"
                />

                <Image
                  src="/logo99.png"
                  alt="EMR"
                  fill
                  sizes="(max-width: 768px) 96px, 112px"
                  className="object-contain relative z-10"
                />

              </div>

            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5547991666865"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex bg-gradient-to-r from-purple-700 to-fuchsia-600 hover:scale-105 transition px-6 py-3 rounded-2xl font-semibold shadow-2xl shadow-purple-900/40"
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

                <a
                  href="#sobre"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-purple-400 transition"
                >
                  Sobre
                </a>

                <a
                  href="#catalogo"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-purple-400 transition"
                >
                  Serviços
                </a>

                <a
                  href="#processo"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-purple-400 transition"
                >
                  Processo
                </a>

                <a
                  href="#instagram"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-purple-400 transition"
                >
                  Instagram
                </a>

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
            Sites modernos, sistemas inteligentes e estratégias digitais
            criadas para gerar autoridade e conversão.
          </p>

          {/* BOTÕES HERO */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">

            <a
              href="https://wa.me/5547991666865"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-700 to-fuchsia-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-purple-900/40"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar orçamento

              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
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
      <section
        id="sobre"
        className="max-w-7xl mx-auto px-6 py-24"
      >

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
              Desenvolvemos soluções digitais premium para empresas
              que querem autoridade, presença online e crescimento real.
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
      <section
        id="catalogo"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <h2 className="text-5xl font-black text-center mb-16">
          Serviços
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                onClick={() =>
                  setOpenCard(openCard === index ? null : index)
                }
                className="group cursor-pointer relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-transparent" />

                <div className="relative z-10">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="flex items-center justify-between">

                    <h3 className="text-2xl font-bold">
                      {service.title}
                    </h3>

                    <ChevronDown
                      className={`transition ${
                        openCard === index ? "rotate-180" : ""
                      }`}
                    />

                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openCard === index
                        ? "max-h-96 opacity-100 mt-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >

                    <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-6" />

                    <p className="text-gray-400 leading-7">
                      {service.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* INSTAGRAM */}
      <section
        id="instagram"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-pink-500/30 bg-white/5 mb-8">
            <Camera className="w-5 h-5 text-pink-400" />
            Instagram EMR
          </div>

          <h2 className="text-5xl font-black">
            Acompanhe nosso Instagram
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Conteúdos, estratégias e bastidores da EMR.
          </p>

        </div>

        {/* CARD INSTAGRAM */}
        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">

          <div className="flex justify-center mb-6">
            <Camera className="w-16 h-16 text-pink-500" />
          </div>

          <h3 className="text-3xl font-bold mb-4">
            Veja nossas publicações
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8">
            Acesse o Instagram oficial da EMR para acompanhar conteúdos,
            projetos, marketing digital e novidades.
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
      <section
        id="processo"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <h2 className="text-5xl font-black text-center mb-20">
          Como funciona
        </h2>

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

              <div className="text-5xl font-black text-purple-500 mb-6">
                0{index + 1}
              </div>

              <h3 className="text-xl font-bold">
                {item}
              </h3>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <div className="rounded-[40px] p-12 bg-gradient-to-r from-purple-950 via-purple-800 to-fuchsia-700 relative overflow-hidden">

          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 text-center">

            <h2 className="text-5xl font-black mb-6">
              Vamos criar algo incrível?
            </h2>

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

      {/* BOTÃO WHATS */}
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