import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const MaoObra = () => {
  const navigate = useNavigate();

  const paineis = [
    {title: "Montador Eletromecânico"},
    {title: "Eletricista de Painéis"},
    {title: "Eletrícista de Manutenção"},
    {title: "Eletrícista Força e Controle"},
    {title: "Técnico de Elétrica"},
    {title: "Técnico de Automação"},
    {title: "Ajudante de Montagem Eletromecânica"},
    {title: "Ajudante de Eletricista"},
    {title: "Soldador"},
    {title: "Almoxarife"},
    {title: "Encarregado de Montagem"},
    {title: "Encarregado de Elétrica"},
    {title: "Supervisor"},
    {title: "Projetista"},
    {title: "Engenheiro"}
  ]

  return (
    <main className="">
      <div className="mx-auto  text-center">
        <div className="py-14 bg-gray-200">
          <h1 className="text-3xl font-bold text-center">Mão de Obra em regime de homem-hora</h1>
        </div>

        <div className="mt-10 py-14">
          <p className="max-w-2xl mx-auto text-md font-semibold">
            Uma das principais atividades da Sartori é o fornecimento de mão de obra em regime de hh. É com prazer e empenho que buscamos complementar as
            equipes de nossos clientes, atendendo a demanda com as seguintes funções:
          </p>
        </div>
      </div>

      <section className=" w-full mx-auto text-center mt-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl px-3 mx-auto mt-5">
            {
                paineis.map(p => {
                    return (
                        <div className="relative mb-10">
                            <div className="flex items-center justify-between p-3 rounded-md bg-gray-800 text-sm text-white">
                                <p>{p.title}</p>
                            </div>
                        </div>
                    )
                })
            }
         </div>
      </section>

      <div className="flex flex-col gap-3 items-center px-5 bg-gray-300 w-full py-20 mt-24">
        <h3 className="text-2xl font-semibold text-center">
          Otimize o seu negócio com a expertise <strong>Sartori</strong>.
        </h3>

        <button
          onClick={() => navigate("/contato")}
          className="flex items-center gap-2 bg-transparent text-black rounded-sm mt-2 text-md hover:bg-gray-200 p-2 transition-all"
        >
          ENTRE EM CONTATO
          <GoArrowUpRight fontSize={20} />
        </button>
      </div>
    </main>
  );
};

export default MaoObra;
