"use client";

import Image from "next/image";
import { useState } from "react";
import { MessageCircle, Mail, ChevronDown } from "lucide-react";

export default function Home() {
  const [openCard, setOpenCard] = useState<number | null>(null);

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
      <header className="relative w-full bg-gradient-to-b from-purple-950 via-black to-black border-b border-purple-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.30),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-5 lg:py-6">
            {/* MENU ESQUERDA */}
            <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-sm md:text-base font-medium order-2 lg:order-1">
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
            <div className="relative flex justify-center order-1 lg:order-2">
              <div className="absolute inset-0 bg-purple-500 blur-[80px] opacity-40 scale-125 rounded-full" />

              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 transition duration-500">
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

            {/* MENU DIREITA */}
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base font-medium order-3">
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
                className="bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-105 transition duration-300 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-semibold shadow-xl shadow-purple-900/40 text-sm"
              >
                Orçamento
              </a>
            </nav>
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
          {/* TEXTO */}
          <div>
            <div className="inline-flex items-center gap-3 bg-purple-900/20 border border-purple-700/30 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm text-purple-300 mb-8 backdrop-blur">
              <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)]" />

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
              marcas em referências no ambiente digital. Unimos estratégia,
              criatividade e tecnologia para desenvolver experiências modernas,
              posicionamentos fortes e resultados reais.
            </p>

            <div className="grid gap-5 sm:gap-6">
              <div className="bg-zinc-900/70 border border-purple-900/40 rounded-3xl p-5 sm:p-6 backdrop-blur hover:border-purple-500 transition duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-purple-300 mb-3">
                  Missão
                </h3>

                <p className="text-gray-400 leading-7 text-sm sm:text-base">
                  Construir presença, gerar autoridade e transformar estratégias
                  em crescimento.
                </p>
              </div>

              <div className="bg-zinc-900/70 border border-purple-900/40 rounded-3xl p-5 sm:p-6 backdrop-blur hover:border-purple-500 transition duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-purple-300 mb-3">
                  Visão
                </h3>

                <p className="text-gray-400 leading-7 text-sm sm:text-base">
                  Tornar-se referência em soluções digitais e posicionamento
                  estratégico de marcas.
                </p>
              </div>

              <div className="bg-zinc-900/70 border border-purple-900/40 rounded-3xl p-5 sm:p-6 backdrop-blur hover:border-purple-500 transition duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-purple-300 mb-4">
                  Valores
                </h3>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    "Exclusividade",
                    "Estratégia",
                    "Criatividade",
                    "Transparência",
                    "Compromisso",
                    "Inovação",
                    "Resultados",
                    "Evolução contínua",
                  ].map((value, index) => (
                    <span
                      key={index}
                      className="bg-purple-900/30 border border-purple-700/30 px-3 sm:px-4 py-2 rounded-2xl text-xs sm:text-sm text-purple-200"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-purple-500/20 blur-[120px] rounded-full scale-125" />

            <div className="relative w-full max-w-[520px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 rounded-[40px] blur-2xl" />

              <div className="relative bg-zinc-900/80 border border-purple-500/20 backdrop-blur rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-2xl shadow-purple-950/40">
                <div className="relative h-[380px] sm:h-[520px] lg:h-[620px] w-full">
                  <Image
                    src="/socios.jpeg"
                    alt="Sócios da EMR"
                    fill
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8">
                    <div className="bg-black/40 backdrop-blur border border-white/10 rounded-3xl p-4 sm:p-6">
                      <p className="text-purple-300 text-xs sm:text-sm mb-3">
                        Fundadores EMR
                      </p>

                      <h3 className="text-xl sm:text-3xl font-black mb-4 leading-tight">
                        Liderando marcas para o próximo nível digital
                      </h3>

                      <p className="text-gray-300 leading-6 sm:leading-7 text-sm sm:text-base">
                        Estratégia, criatividade e tecnologia trabalhando juntas
                        para construir resultados reais.
                      </p>
                    </div>
                  </div>
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
          <div className="absolute w-60 sm:w-96 h-60 sm:h-96 bg-purple-500/20 blur-[120px] rounded-full -top-20 -right-20" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black mb-6">
              Entre em contato
            </h2>

            <p className="text-purple-100 text-sm sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto leading-7 sm:leading-8">
              Vamos transformar sua ideia em um projeto digital moderno,
              estratégico e preparado para gerar resultados reais.
            </p>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/emr_solucoesdigitais/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/40 hover:bg-black transition duration-300 border border-purple-500/20 hover:border-purple-400 p-5 sm:p-6 rounded-3xl flex items-center gap-4 backdrop-blur shadow-xl hover:scale-[1.02]"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-900/50 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  >
                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
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

              {/* WHATSAPP */}
              <a
                href="https://wa.me/5547991666865"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/40 hover:bg-black transition duration-300 border border-purple-500/20 hover:border-purple-400 p-5 sm:p-6 rounded-3xl flex items-center gap-4 backdrop-blur shadow-xl hover:scale-[1.02]"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-900/50 flex-shrink-0">
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

              {/* GMAIL */}
              <a
                href="mailto:contatoemrdigital@gmail.com"
                className="group bg-black/40 hover:bg-black transition duration-300 border border-purple-500/20 hover:border-purple-400 p-5 sm:p-6 rounded-3xl flex items-center gap-4 backdrop-blur shadow-xl hover:scale-[1.02] md:col-span-2 xl:col-span-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-900/50 flex-shrink-0">
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