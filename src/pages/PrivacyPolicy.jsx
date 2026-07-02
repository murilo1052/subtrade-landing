import { Link } from "react-router-dom";

function PrivacyPolicy() {
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

          <h1 className="text-4xl font-black">Política de Privacidade</h1>

          <p className="mt-3 text-zinc-400">
            Última atualização: 02 de julho de 2026
          </p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="mb-3 text-2xl font-bold">1. Informações coletadas</h2>
              <p className="leading-8 text-zinc-300">
                A SubTrade Store coleta apenas as informações necessárias para
                realizar o atendimento, confirmar pagamentos, efetuar a entrega
                dos produtos e prestar suporte ao cliente.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold">2. Uso das informações</h2>
              <p className="leading-8 text-zinc-300">
                Os dados são utilizados exclusivamente para processar pedidos,
                confirmar pagamentos, realizar entregas e prestar atendimento ao
                cliente.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold">3. Compartilhamento</h2>
              <p className="leading-8 text-zinc-300">
                A SubTrade Store não vende nem compartilha dados pessoais com
                terceiros, exceto quando necessário para cumprir obrigações
                legais.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold">4. Segurança</h2>
              <p className="leading-8 text-zinc-300">
                Adotamos medidas para proteger as informações dos clientes
                contra acessos não autorizados e uso indevido.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold">5. Direitos do usuário</h2>
              <p className="leading-8 text-zinc-300">
                O usuário poderá solicitar atualização ou exclusão de seus
                dados, quando permitido pela legislação aplicável.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold">6. Contato</h2>

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

export default PrivacyPolicy;