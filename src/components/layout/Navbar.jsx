import Container from "../ui/Container";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      name: "Como Funciona",
      href: "#como-funciona",
    },
    {
      name: "Benefícios",
      href: "#beneficios",
    },
    {
      name: "FAQ",
      href: "#faq",
    },
    {
      name: "Contato",
      href: "#contato",
    },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a href="#" className="text-3xl font-extrabold">
            <span className="text-white">Sub</span>
            <span className="text-red-500">Trade</span>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-10">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 hover:text-red-500 transition font-medium"
              >
                {link.name}
              </a>
            ))}

          </div>
    

          {/* Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 py-6 flex flex-col gap-5">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-zinc-300 hover:text-red-500 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://discord.gg/D6NRqpVTr"
              target="_blank"
              rel="noreferrer"
              className="mt-2 bg-red-600 rounded-xl py-3 text-center font-semibold"
            >
              Entrar no Discord
            </a>

          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;