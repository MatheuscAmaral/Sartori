import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const paineis = [
    {href: "QGBT", title: "QGBT – Quadro geral de baixa tensão"},
    {href: "QDMT", title: "QDMT –  Quadro de distribuição de média tenção"},
    {href: "QDCC",  title: "QDCC – Quadro de Distribuição de Corrente Contínua"},
    {href: "QDCA", title: "QDCA – Quadro de distribuição de corrente alternada"},
    {href: "QDL", title: "QDL – Quadro Distribuição de Luz"},
    {href: "QDT", title: "QDT – Quadro de distribuição de tomadas"},
    {href: "PR", title: "Painéis de Remota"},
    {href: "CLP",  title: "CLP - Painéis de CLP"},
    {href: "CCM",  title: "CCM - Centro de Comando de Motores"},
    {href: "QDC",  title: "QDC - Quadro de distribuição de circuitos"},
    {href: "CLP",  title: "CLP - Painéis de CLP"},
    {href: "PPD",  title: "PPD - Painéis de partida direta"},
  ]

  return (
    <main className="">
      <div className="mx-auto  text-center">
        <div className="py-14 bg-gray-200 px-5">
          <h1 className="text-3xl font-bold text-center">PAINÉIS ELÉTRICOS</h1>
        </div>

        <div className="mt-10 py-14 px-5">
          <h3 className="text-lg font-semibold pb-4"> PAINÉIS ELÉTRICOS</h3>
          <p className="max-w-2xl mx-auto text-sm font-semibold">
            A Sartori tem expertise em painéis elétricos, sendo uma das suas atividades principais desde o início.
            Atendemos a demanda de mercado para a montagem de painéis e quadros sendo eles:
          </p>
        </div>
      </div>

      <section className=" w-full mx-auto text-center mt-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl px-3 mx-auto mt-5">
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

export default Products;
