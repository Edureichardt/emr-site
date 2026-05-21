"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MessageCircle,
  Mail,
} from "lucide-react";

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
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HEADER */}
      <header className="relative w-full bg-gradient-to-t from-black via-purple-950 border-b border-purple-500/20 shadow-2xl shadow-purple-950/50">
        {/* EFEITO */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.30),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* MENU ESQUERDA */}
          <nav className="flex items-center gap-10 text-sm md:text-base font-medium">
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
          <div className="absolute left-1/2 transform -translate-x-1/2 top-2 z-20 group cursor-pointer">
            <div className="absolute inset-0 bg-purple-500 blur-[80px] opacity-40 scale-125 rounded-full" />

            <div className="relative w-40 h-40 md:w-52 md:h-52 transition duration-500 group-hover:scale-105">
              <Image
                src="/logo99.png"
                alt="Logo EMR"
                fill
                priority
                className="object-contain drop-shadow-[0_0_45px_rgba(168,85,247,0.9)]"
              />
            </div>
          </div>

          {/* MENU DIREITA */}
          <nav className="flex items-center gap-10 text-sm md:text-base font-medium">
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
              className="bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-105 transition duration-300 px-6 py-3 rounded-2xl font-semibold shadow-xl shadow-purple-900/40"
            >
              Orçamento
            </a>
          </nav>
        </div>

        <div className="h-24" />
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-40">
        <div className="absolute w-[700px] h-[700px] bg-purple-700/20 blur-[200px] rounded-full top-0" />

        <div className="relative z-10">
          <div className="bg-purple-900/30 border border-purple-700 px-5 py-2 rounded-full text-sm text-purple-300 mb-8 inline-block backdrop-blur">
            Desenvolvimento Web • Sistemas • Soluções Digitais
          </div>

          <h2 className="text-5xl md:text-7xl font-black max-w-5xl leading-tight">
            Transformando ideias em{" "}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              soluções digitais modernas
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mt-8 text-lg mx-auto leading-8">
            Criamos sites profissionais, aplicações web e sistemas
            personalizados para empresas que querem crescer no digital.
          </p>

          <div className="flex gap-5 mt-12 justify-center flex-wrap">
            <a
              href="https://wa.me/5547991666865"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl font-semibold shadow-2xl shadow-purple-900/50"
            >
              Solicitar orçamento
            </a>

            <a
              href="#catalogo"
              className="border border-purple-700 hover:bg-purple-900/20 transition px-8 py-4 rounded-2xl font-semibold backdrop-blur"
            >
              Ver catálogo
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="max-w-7xl mx-auto px-6 py-32 relative"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] bg-purple-700/10 blur-[180px] rounded-full" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          {/* TEXTO */}
          <div>
            <div className="inline-flex items-center gap-3 bg-purple-900/20 border border-purple-700/30 px-5 py-2 rounded-full text-sm text-purple-300 mb-8 backdrop-blur">
              <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)]" />

              Sobre a EMR
            </div>

            <h3 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              Estratégia, inovação e presença digital{" "}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                em alto nível
              </span>
            </h3>

            <p className="text-gray-400 leading-9 text-lg mb-12">
              A EMR Soluções Digitais nasceu com o propósito de transformar
              marcas em referências no ambiente digital. Unimos estratégia,
              criatividade e tecnologia para desenvolver experiências modernas,
              posicionamentos fortes e resultados reais para empresas que
              desejam crescer.
            </p>

            <div className="grid gap-6">
              <div className="bg-zinc-900/70 border border-purple-900/40 rounded-3xl p-6 backdrop-blur hover:border-purple-500 transition duration-300">
                <h4 className="text-2xl font-bold text-purple-300 mb-3">
                  Missão
                </h4>

                <p className="text-gray-400 leading-7">
                  Construir presença, gerar autoridade e transformar estratégias
                  em crescimento.
                </p>
              </div>

              <div className="bg-zinc-900/70 border border-purple-900/40 rounded-3xl p-6 backdrop-blur hover:border-purple-500 transition duration-300">
                <h4 className="text-2xl font-bold text-purple-300 mb-3">
                  Visão
                </h4>

                <p className="text-gray-400 leading-7">
                  Tornar-se referência em soluções digitais e posicionamento
                  estratégico de marcas.
                </p>
              </div>

              <div className="bg-zinc-900/70 border border-purple-900/40 rounded-3xl p-6 backdrop-blur hover:border-purple-500 transition duration-300">
                <h4 className="text-2xl font-bold text-purple-300 mb-4">
                  Valores
                </h4>

                <div className="flex flex-wrap gap-3">
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
                      className="bg-purple-900/30 border border-purple-700/30 px-4 py-2 rounded-2xl text-sm text-purple-200"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* IMAGEM DOS SOCIOS */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-purple-500/20 blur-[120px] rounded-full scale-125" />

            <div className="relative w-full max-w-[520px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 rounded-[40px] blur-2xl" />

              <div className="relative bg-zinc-900/80 border border-purple-500/20 backdrop-blur rounded-[40px] overflow-hidden shadow-2xl shadow-purple-950/40">
                <div className="relative h-[620px] w-full">
                  <Image
                    src="/socios.jpeg"
                    alt="Sócios da EMR"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <div className="bg-black/40 backdrop-blur border border-white/10 rounded-3xl p-6">
                      <p className="text-purple-300 text-sm mb-3">
                        Fundadores EMR
                      </p>

                      <h4 className="text-3xl font-black mb-4">
                        Liderando marcas para o próximo nível digital
                      </h4>

                      <p className="text-gray-300 leading-7">
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
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h3 className="text-4xl font-black text-purple-400 mb-14">
          Catálogo de Serviços
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() =>
                setOpenCard(openCard === index ? null : index)
              }
              className={`group cursor-pointer backdrop-blur border p-8 rounded-3xl transition-all duration-300 shadow-lg

              ${
                openCard === index
                  ? "bg-zinc-900 border-purple-500 shadow-purple-700/30 scale-[1.02]"
                  : "bg-zinc-900/80 border-purple-900/40 hover:border-purple-500 hover:-translate-y-2 shadow-purple-950/20"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-2xl font-bold">
                  {service.title}
                </h4>

                <div
                  className={`min-w-[52px] h-[52px] rounded-2xl flex items-center justify-center transition-all duration-300

                  ${
                    openCard === index
                      ? "bg-gradient-to-br from-fuchsia-500/30 to-purple-700/30 rotate-12"
                      : "bg-purple-900/30"
                  }`}
                >
                  <div className="w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)]" />
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openCard === index
                    ? "max-h-96 opacity-100 mt-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6" />

                <p className="text-gray-400 leading-7">
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
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-950 via-purple-800 to-purple-600 rounded-[40px] p-12 text-center shadow-2xl shadow-purple-950/50">
          <div className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full -top-20 -right-20" />

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              Entre em contato
            </h3>

            <p className="text-purple-100 text-lg mb-12 max-w-2xl mx-auto leading-8">
              Vamos transformar sua ideia em um projeto digital moderno,
              estratégico e preparado para gerar resultados reais.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/emr_solucoesdigitais/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/40 hover:bg-black transition duration-300 border border-purple-500/20 hover:border-purple-400 px-8 py-5 rounded-3xl flex items-center gap-4 backdrop-blur shadow-xl hover:scale-105"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-900/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-7 h-7"
                  >
                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                  </svg>
                </div>

                <div className="text-left">
                  <p className="text-sm text-gray-400">
                    Instagram
                  </p>

                  <h4 className="font-bold text-lg">
                    @emr_solucoesdigitais
                  </h4>
                </div>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/5547991666865"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/40 hover:bg-black transition duration-300 border border-purple-500/20 hover:border-purple-400 px-8 py-5 rounded-3xl flex items-center gap-4 backdrop-blur shadow-xl hover:scale-105"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-900/50">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>

                <div className="text-left">
                  <p className="text-sm text-gray-400">
                    WhatsApp
                  </p>

                  <h4 className="font-bold text-lg">
                    (47) 99166-6865
                  </h4>
                </div>
              </a>

              {/* GMAIL */}
              <a
                href="mailto:contatoemrdigital@gmail.com"
                className="group bg-black/40 hover:bg-black transition duration-300 border border-purple-500/20 hover:border-purple-400 px-8 py-5 rounded-3xl flex items-center gap-4 backdrop-blur shadow-xl hover:scale-105"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-900/50">
                  <Mail className="w-7 h-7 text-white" />
                </div>

                <div className="text-left">
                  <p className="text-sm text-gray-400">
                    Gmail
                  </p>

                  <h4 className="font-bold text-lg">
                    contatoemrdigital@gmail.com
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-purple-900/40 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-500">
          © 2026 EMR Soluções Digitais — Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}