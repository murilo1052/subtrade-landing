import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:text-left">
        <div>
          <h3 className="text-xl font-bold text-white">
            SubTrade Store
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            Robux e itens de Flee the Facility com entrega rápida,
            atendimento 24 horas e pagamento via PIX.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm">
          <Link
            to="/privacidade"
            className="text-zinc-400 transition hover:text-white"
          >
            Política de Privacidade
          </Link>

          <Link
            to="/termos"
            className="text-zinc-400 transition hover:text-white"
          >
            Termos de Uso
          </Link>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-4 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} SubTrade Store. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;