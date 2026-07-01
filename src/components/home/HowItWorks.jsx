function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Escolha seu produto",
      description:
        "Selecione os itens de Flee the Facility ou a quantidade de Robux que deseja adquirir.",
    },
    {
      number: "02",
      title: "Realize o pagamento",
      description:
        "Efetue o pagamento de forma rápida e segura utilizando os métodos disponíveis.",
    },
    {
      number: "03",
      title: "Receba rapidamente",
      description:
        "Após a confirmação do pagamento, nossa equipe realiza a entrega e permanece disponível para qualquer suporte.",
    },
  ];

  return (
    <section
  id="como-funciona"
  className="py-28 px-6 bg-zinc-950"
>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">
            Como funciona
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            Comprar na SubTrade Store é simples.
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-8">
            Nosso processo foi desenvolvido para oferecer rapidez,
            segurança e um atendimento eficiente do início ao fim.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-600/40"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 to-red-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>

              <span className="text-5xl font-bold text-red-600/30">
                {step.number}
              </span>

              <h3 className="mt-8 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;