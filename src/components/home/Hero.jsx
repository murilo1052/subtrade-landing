import {
  ShieldCheck,
  Clock3,
  CreditCard,
  MessageCircle,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28 px-6">

      {/* Iluminação do fundo */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-600/10 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* ================= LADO ESQUERDO ================= */}

        <div>

         <span className="inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-600/10 px-4 py-2 text-sm font-medium text-red-400">
  ✔ Atendimento 24 horas • Pagamentos via PIX
</span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-white">

            Robux e itens de

            <span className="block text-red-500">
              Flee the Facility.
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">

            Compre com segurança utilizando
            <span className="text-white font-semibold"> PIX</span>,
            receba seus produtos em aproximadamente
            <span className="text-white font-semibold">
              {" "}15–20 minutos
            </span>
            {" "}e conte com atendimento 24 horas durante todo o processo.

          </p>

<div className="mt-10">

  <a
    href="#contato"
    className="
      inline-flex
      items-center
      justify-center
      rounded-xl
      bg-red-600
      px-8
      py-4
      font-semibold
      text-white
      transition
      hover:bg-red-700
      hover:-translate-y-0.5
    "
  >
    Comprar Agora
  </a>

</div>

          <div className="mt-12 grid sm:grid-cols-3 gap-5">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-red-600/10 p-3 border border-red-600/20">
                <Clock3 className="w-5 h-5 text-red-500" />
              </div>

              <div>

                <p className="text-white font-semibold">
                  15–20 min
                </p>

                <p className="text-sm text-zinc-500">
                  Entrega
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-red-600/10 p-3 border border-red-600/20">
                <ShieldCheck className="w-5 h-5 text-red-500" />
              </div>

              <div>

                <p className="text-white font-semibold">
                  PIX Seguro
                </p>

                <p className="text-sm text-zinc-500">
                  Pagamento
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-red-600/10 p-3 border border-red-600/20">
                <MessageCircle className="w-5 h-5 text-red-500" />
              </div>

              <div>

                <p className="text-white font-semibold">
                  24 horas
                </p>

                <p className="text-sm text-zinc-500">
                  Atendimento
                </p>

              </div>

            </div>

          </div>

        </div>
                {/* ================= LADO DIREITO ================= */}

        <div className="relative">

          <div className="absolute inset-0 rounded-3xl bg-red-600/10 blur-3xl"></div>

          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  SubTrade Store
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  Loja em operação
                </h2>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>

                <span className="text-sm font-medium text-green-400">
                  Online
                </span>
              </div>

            </div>

            <div className="mt-10 space-y-5">

              <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">

                <div>

                  <p className="text-white font-semibold">
                    Atendimento
                  </p>

                  <p className="text-zinc-500 text-sm">
                    Equipe disponível
                  </p>

                </div>

                <span className="font-bold text-red-500">
                  24h
                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">

                <div>

                  <p className="text-white font-semibold">
                    Pagamento
                  </p>

                  <p className="text-zinc-500 text-sm">
                    Método aceito
                  </p>

                </div>

                <CreditCard className="text-red-500" />

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">

                <div>

                  <p className="text-white font-semibold">
                    Entrega
                  </p>

                  <p className="text-zinc-500 text-sm">
                    Tempo médio
                  </p>

                </div>

                <span className="font-bold text-red-500">
                  15–20 min
                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">

                <div>

                  <p className="text-white font-semibold">
                    Produtos
                  </p>

                  <p className="text-zinc-500 text-sm">
                    Disponíveis
                  </p>

                </div>

                <span className="font-bold text-red-500">
                  Robux + FTF
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;  