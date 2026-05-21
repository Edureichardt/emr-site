"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  MessageCircle,
  Mail,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // FECHAR MENU AO REDIMENSIONAR
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

  // BLOQUEAR SCROLL MENU MOBILE
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const services = [
    {
      title: "Sites Profissionais",
      description:
        "Sites profissionais são páginas desenvolvidas para apresentar uma empresa, produto ou serviço de forma moderna, funcional e confiável. Eles ajudam a fortalecer a presença online, transmitir credibilidade e facilitar o contato e as vendas com clientes.",
    },
    {
      title: "Social Media",
      description:
        "Social Media é a gestão estratégica das redes sociais de uma marca, envolvendo criação de conteúdo, planejamento e interação com o público. O objetivo é aumentar o engajamento, fortalecer a presença digital e atrair mais clientes.",
    },
    {
      title: "Tráfego pago e orgânico",
      description:
        "O tráfego orgânico e o tráfego pago são estratégias usadas para atrair pessoas para um site ou rede social. O orgânico conquista audiência de forma natural, através de conteúdos e SEO, enquanto o pago utiliza anúncios para gerar resultados rápidos e alcançar públicos específicos.",
    },
    {
      title: "Produção de conteúdo estratégico",
      description:
        "A produção de conteúdo estratégico consiste em criar conteúdos planejados para atrair, engajar e converter o público-alvo. Ela utiliza temas relevantes, linguagem adequada e objetivos definidos para fortalecer a marca.",
    },
    {
      title: "Design e identidade visual",
      description:
        "Design e identidade visual são os elementos visuais que representam uma marca, como cores, logotipo, tipografia e estilo gráfico. Eles ajudam a transmitir profissionalismo e criar reconhecimento.",
    },
    {
      title: "Suporte e Acompanhamento",
      description:
        "O suporte e acompanhamento consistem em monitorar resultados, oferecer atendimento contínuo e ajustar estratégias conforme necessário para garantir crescimento constante.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HEADER */}
      <header className="relative w-full bg-gradient-to-b from-purple-950 via-black to-black border-b border-purple-500/20 overflow-hidden z-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.30),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 lg:py-6">
            {/* BOTÃO MENU MOBILE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-2xl border border-purple-500/30 bg-zinc-900/70 backdrop-blur z-[100]"
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>

            {/* MENU ESQUERDA DESKTOP */}
            <nav className="hidden lg:flex items-center gap-10 text-base font-medium">
              <a
                href="#sobre"
                className="hover:text-purple-300 transition duration-300 relative after:absolute after:w-0 after:h-[2px] after:bg-purple-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                Sobre
              </a>

              <a
                href="#catalogo"
                className="hover:text-purple-300 transition duration-300 relative after:absolute after:w-0 after:h-[2px] after:bg-purple-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                Catálogo
              </a>
            </nav>

            {/* LOGO */}
            <div className="relative flex justify-center mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-purple-500 blur-[80px] opacity-40 scale-125 rounded-full" />

              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 transition duration-500">
                <Image
                  src="/logo99.png"
                  alt="Logo EMR"
                  fill
                  priority
                  sizes="(max-width: 768px) 160px, 220px"
                  className="object-contain drop-shadow-[0_0_45px_rgba(168,85,247,0.9)]"
                />
              </div>
            </div>

            {/* MENU DIREITA DESKTOP */}
            <nav className="hidden lg:flex items-center gap-6 text-base font-medium">
              <a
                href="#contato"
                className="hover:text-purple-300 transition duration-300 relative after:absolute after:w-0 after:h-[2px] after:bg-purple-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                Contato
              </a>

              <a
                href="https://wa.me/5547991666865"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-105 transition duration-300 px-5 py-3 rounded-2xl font-semibold shadow-xl shadow-purple-900/40"
              >
                Orçamento
              </a>
            </nav>

            {/* ESPAÇAMENTO MOBILE */}
            <div className="w-12 lg:hidden" />
          </div>
        </div>

        {/* MENU MOBILE */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-2xl z-[90] transition-all duration-300 lg:hidden ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <a
              href="#sobre"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold hover:text-purple-400 transition"
            >
              Sobre
            </a>

            <a
              href="#catalogo"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold hover:text-purple-400 transition"
            >
              Catálogo
            </a>

            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold hover:text-purple-400 transition"
            >
              Contato
            </a>

            <a
              href="https://wa.me/5547991666865"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-gradient-to-r from-purple-700 to-purple-500 px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-purple-900/40"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] bg-purple-700/20 blur-[160px] rounded-full top-0" />

        <div className="relative z-10 max-w-6xl">
          <div className="bg-purple-900/30 border border-purple-700 px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-sm text-purple-300 mb-6 sm:mb-8 inline-block backdrop-blur">
            Desenvolvimento Web • Sistemas • Soluções Digitais
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black max-w-5xl leading-tight mx-auto">
            Transformando ideias em{" "}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              soluções digitais modernas
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mt-6 sm:mt-8 text-sm sm:text-lg mx-auto leading-7 sm:leading-8 px-2">
            Criamos sites profissionais, aplicações web e sistemas
            personalizados para empresas que querem crescer no digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 sm:mt-12 justify-center items-center">
            <a
              href="https://wa.me/5547991666865"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-105 transition duration-300 px-6 sm:px-8 py-4 rounded-2xl font-semibold shadow-2xl shadow-purple-900/50"
            >
              Solicitar orçamento
            </a>

            <a
              href="#catalogo"
              className="w-full sm:w-auto text-center border border-purple-700 hover:bg-purple-900/20 transition px-6 sm:px-8 py-4 rounded-2xl font-semibold backdrop-blur"
            >
              Ver catálogo
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 relative overflow-hidden"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-purple-700/10 blur-[180px] rounded-full" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 bg-purple-900/20 border border-purple-700/30 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm text-purple-300 mb-8 backdrop-blur">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              Sobre a EMR
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-8">
              Estratégia, inovação e presença digital{" "}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                em alto nível
              </span>
            </h2>

            <p className="text-gray-400 leading-7 sm:leading-9 text-sm sm:text-lg mb-12">
              A EMR Soluções Digitais nasceu com o propósito de transformar
              marcas em referências no ambiente digital.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[520px]">
              <div className="relative bg-zinc-900/80 border border-purple-500/20 backdrop-blur rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-2xl shadow-purple-950/40">
                <div className="relative h-[380px] sm:h-[520px] lg:h-[620px] w-full">
                  <Image
                    src="/socios.jpeg"
                    alt="Sócios da EMR"
                    fill
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOGO */}
      <section
        id="catalogo"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24"
      >
        <h2 className="text-3xl sm:text-4xl font-black text-purple-400 mb-12 sm:mb-14 text-center">
          Catálogo de Serviços
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() =>
                setOpenCard(openCard === index ? null : index)
              }
              className={`group cursor-pointer backdrop-blur border p-5 sm:p-8 rounded-3xl transition-all duration-300 shadow-lg
              ${
                openCard === index
                  ? "bg-zinc-900 border-purple-500 shadow-purple-700/30 scale-[1.02]"
                  : "bg-zinc-900/80 border-purple-900/40 hover:border-purple-500 hover:-translate-y-2 shadow-purple-950/20"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg sm:text-2xl font-bold leading-tight">
                  {service.title}
                </h3>

                <ChevronDown
                  className={`min-w-[22px] w-5 h-5 sm:w-6 sm:h-6 text-purple-400 transition-transform duration-300 ${
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
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6" />

                <p className="text-gray-400 leading-7 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24"
      >
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-950 via-purple-800 to-purple-600 rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 text-center shadow-2xl shadow-purple-950/50">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black mb-6">
              Entre em contato
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mt-12">
              <a
                href="https://www.instagram.com/emr_solucoesdigitais/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/40 hover:bg-black transition duration-300 border border-purple-500/20 hover:border-purple-400 p-5 sm:p-6 rounded-3xl flex items-center gap-4"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  >
                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4z" />
                  </svg>
                </div>

                <div className="text-left overflow-hidden">
                  <p className="text-xs sm:text-sm text-gray-400">
                    Instagram
                  </p>

                  <h3 className="font-bold text-sm sm:text-lg break-words">
                    @emr_solucoesdigitais
                  </h3>
                </div>
              </a>

              <a
                href="https://wa.me/5547991666865"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/40 hover:bg-black transition duration-300 border border-purple-500/20 hover:border-purple-400 p-5 sm:p-6 rounded-3xl flex items-center gap-4"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                <div className="text-left">
                  <p className="text-xs sm:text-sm text-gray-400">
                    WhatsApp
                  </p>

                  <h3 className="font-bold text-sm sm:text-lg">
                    (47) 99166-6865
                  </h3>
                </div>
              </a>

              <a
                href="mailto:contatoemrdigital@gmail.com"
                className="group bg-black/40 hover:bg-black transition duration-300 border border-purple-500/20 hover:border-purple-400 p-5 sm:p-6 rounded-3xl flex items-center gap-4"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                <div className="text-left overflow-hidden">
                  <p className="text-xs sm:text-sm text-gray-400">
                    Gmail
                  </p>

                  <h3 className="font-bold text-sm sm:text-lg break-all">
                    contatoemrdigital@gmail.com
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-purple-900/40 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center text-gray-500 text-xs sm:text-sm md:text-base">
          © 2026 EMR Soluções Digitais — Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}