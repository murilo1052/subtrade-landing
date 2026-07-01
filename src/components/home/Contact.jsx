import {
  MessageCircle,
  MessagesSquare,
  Camera,
  ArrowUpRight,
} from "lucide-react";

const contacts = [
  {
    title: "Discord",
    description:
      "Abra um ticket e converse diretamente com nossa equipe durante todo o processo da compra.",
    icon: MessageCircle,
    button: "Entrar no Discord",
    link: "https://discord.gg/D6NRqpVTr",
  },
  {
    title: "WhatsApp",
    description:
      "Prefere um atendimento rápido? Fale conosco pelo WhatsApp sempre que precisar.",
    icon: MessagesSquare,
    button: "Conversar",
    link: "https://wa.me/558589767074",
  },
  {
    title: "Instagram",
    description:
      "Acompanhe novidades, anúncios e conteúdos da SubTrade Store.",
    icon: Camera,
    button: "Seguir",
    link: "https://www.instagram.com/subtradestore?igsh=MXV1ODFmemVoaGd3Yg==",
  },
];

function Contact() {
  return (
    <section
  id="contato"
  className="py-28 px-6"
>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-red-500 uppercase tracking-widest font-semibold text-sm">
            Contato
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            Estamos prontos para ajudar.
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-8">
            Nossa equipe oferece atendimento 24 horas para esclarecer dúvidas,
            acompanhar pedidos e garantir uma experiência segura durante toda a
            compra.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <div
                key={contact.title}
                className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-600/40"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-red-600/10 border border-red-600/20">
                  <Icon className="w-7 h-7 text-red-500" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {contact.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-7">
                  {contact.description}
                </p>

                <a
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-red-500 font-semibold hover:text-red-400 transition"
                >
                  {contact.button}

                  <ArrowUpRight className="w-5 h-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;