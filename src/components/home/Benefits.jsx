const benefits = [
  {
    title: "Pagamento Seguro",
    description:
      "Realize suas compras com segurança através de plataformas confiáveis e protegidas.",
    icon: "🔒",
  },
  {
    title: "Entrega Rápida",
    description:
      "Após a confirmação do pagamento, nossa equipe inicia a entrega o mais rápido possível.",
    icon: "⚡",
  },
  {
    title: "Suporte Humanizado",
    description:
      "Nossa equipe está disponível para esclarecer dúvidas antes, durante e após a compra.",
    icon: "💬",
  },
  {
    title: "Produtos Confiáveis",
    description:
      "Trabalhamos com itens digitais e Robux entregues de forma transparente e organizada.",
    icon: "🎮",
  },
  {
    title: "Atendimento no WhatsApp",
    description:
      "Fale diretamente com nossa equipe sempre que precisar de ajuda ou informações.",
    icon: "📱",
  },
  {
    title: "Comunidade no Discord",
    description:
      "Entre em nossa comunidade para receber suporte, novidades e acompanhar nossa loja.",
    icon: "🚀",
  },
];

function Benefits() {
  return (
    <section
  id="beneficios"
  className="py-28 px-6"
>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">
            Por que escolher a SubTrade Store?
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            Uma experiência pensada para transmitir confiança.
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-8">
            Nosso compromisso é oferecer uma compra simples, segura e com
            atendimento de qualidade do início ao fim.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-600/40"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-red-600/10 border border-red-600/20 text-2xl">
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {benefit.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-7">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;