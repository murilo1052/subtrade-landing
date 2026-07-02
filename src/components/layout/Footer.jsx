import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold text-white">
              SubTrade <span className="text-red-500">Store</span>
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Robux e itens de Flee the Facility com entrega em 15–20 minutos,
              atendimento 24 horas e pagamento via PIX.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Informações
            </h4>

            <div className="flex flex-col gap-3">
              <Link
                to="/privacidade"
                className="text-zinc-400 transition hover:text-red-500"
              >
                Política de Privacidade
              </Link>

              <Link
                to="/termos"
                className="text-zinc-400 transition hover:text-red-500"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} SubTrade Store. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;