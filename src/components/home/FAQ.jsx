import { useState } from "react";

const faqs = [
  {
    question: "Como faço uma compra?",
    answer:
      "Entre em contato conosco pelo Discord, WhatsApp ou Instagram. No Discord, você abrirá um ticket e um atendente acompanhará todo o processo, desde a escolha do produto até a confirmação do pagamento e a entrega. No WhatsApp e Instagram apos o pagamento, o cliente entrara na fila de entrega. O prazo pode variar conforme a demanda (24 Horas) o cliente deve estar disponivel quando o entregador entrar em contato.",
  },
  {
    question: "Quanto tempo demora a entrega?",
    answer:
      "Após a confirmação do pagamento, a entrega costuma ser realizada entre 15 e 20 minutos. Caso ocorram imprevistos, nossa equipe manterá você informado durante todo o processo.",
  },
  {
    question: "Como funciona a entrega?",
    answer:
      "No Discord, você será atendido por um responsável em um ticket exclusivo. Após a confirmação do pagamento via PIX, o atendente realizará a entrega dos itens ou dos Robux diretamente para sua conta. No Instagram ou WhatsApp voce entrara na fila e ficara esperando ate chegar a sua vez, o tempo de espera pode ser a 15 a 20 minuto. o cliente deve esta disponivel quando o entregar entrar em contato.",
  },
  {
    question: "Como os Robux são entregues?",
    answer:
      "Os Robux são entregues por meio de uma Game Pass no Roblox. Nossa equipe orientará todo o procedimento durante o atendimento.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Atualmente aceitamos pagamentos exclusivamente via PIX.",
  },
  {
    question: "O atendimento funciona 24 horas?",
    answer:
      "Sim. Nossa equipe atende 24 horas por dia para oferecer suporte e acompanhar seus pedidos.",
  },
  {
    question: "Posso solicitar reembolso?",
    answer:
      "Sim. Caso o pedido não seja entregue em até 24 horas após a confirmação do pagamento, você poderá solicitar o reembolso conforme nossa política.",
  },
  {
    question: "Quais produtos a SubTrade Store vende?",
    answer:
      "Atualmente trabalhamos com Robux e itens digitais de Flee the Facility, oferecendo um processo de compra simples, seguro e acompanhado por nossa equipe.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggleFAQ(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section
  id="faq"
  className="py-28 px-6 bg-zinc-950"
>
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            Perguntas frequentes
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-8">
            Tire suas principais dúvidas sobre pagamentos, entrega,
            atendimento e funcionamento da SubTrade Store.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition hover:bg-zinc-800/40"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <span className="text-2xl text-red-500 font-light">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-zinc-400 leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;