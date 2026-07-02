import { Link } from "react-router-dom";

function TermsOfUse() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            to="/"
            className="text-red-500 transition hover:text-red-400"
          >
            ← Voltar para a página inicial
          </Link>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
          <div className="mb-8 h-1 w-20 rounded-full bg-red-600"></div>

          <h1 className="text-4xl font-black">Termos de Uso</h1>

          <p className="mt-3 text-zinc-400">
            Última atualização: 02 de julho de 2026
          </p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="mb-3 text-2xl font-bold">1. Aceitação</h2>

              <p className="leading-8 text-zinc-300">
                Ao utilizar os serviços da SubTrade Store, o usuário declara
                estar de acordo com estes Termos de Uso.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold">2. Serviços</h2>

              <p className="leading-8 text-zinc-300">
                Comercializamos Robux e itens do jogo Flee the Facility. A
                entrega de Robux é realizada por meio de Game Pass.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold">3. Pagamento</h2>

              <p className="leading-8 text-zinc-300">
                Os pagamentos são realizados exclusivamente via PIX e o pedido
                será processado após a confirmação do pagamento.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold">4. Entrega</h2>

              <p className="leading-8 text-zinc-300">
                O prazo médio de entrega é de 15 a 20 minutos, podendo ocorrer
                variações em situações excepcionais.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold">5. Reembolso</h2>

              <p className="leading-8 text-zinc-300">
                Caso o pedido não seja entregue em até 24 horas após a
                confirmação do pagamento, o cliente poderá solicitar o
                reembolso.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold">6. Responsabilidades</h2>

              <ul className="list-disc space-y-2 pl-6 text-zinc-300">
                <li>Informar corretamente o usuário do Roblox.</li>
                <li>Fornecer informações verdadeiras durante a compra.</li>
                <li>Respeitar as regras da plataforma Roblox.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold">7. Contato</h2>

              <div className="space-y-2 text-zinc-300">
                <p><strong>E-mail:</strong> subtradestore@gmail.com</p>
                <p><strong>WhatsApp:</strong> +55 (85) 98976-7074</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TermsOfUse;