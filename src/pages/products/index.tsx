import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/QDR-6.webp";
import img2 from "../../assets/QCC-13.webp";
import img3 from "../../assets/QDFL-10.webp";
import img4 from "../../assets/QDL-6.webp";

const Products = () => {
  const navigate = useNavigate();

  const paineis = [
    {img: img1, href: "QDR", title: "QDR – Quadro de Distribuição Residencial", desc: "QDR Os quadros de disjuntores residenciais oferecidos pela Sartori Elétrica..."},
    {img: img2, href: "QCC", title: "QCC – Quadro de Comando e Controle", desc: "QCC Os quadros de comando e controle da Sartori Elétrica são projetados e f..."},
    {img: img3, href: "QDFL",  title: "QDFL – Quadro Distribuição Força e Luz", desc: "QDFL Os quadros de distribuição de força e luz da Sartori Elétrica são proj..."},
    {img: img4, href: "QDL", title: "QDL – Quadro Distribuição de Luz", desc: "QDL Os quadros de distribuição de luz da Sartori Elétrica são fabricados me..."}
  ]

  return (
    <main className="">
      <div className="mx-auto  text-center">
        <div className="py-14 bg-gray-200">
          <h1 className="text-3xl font-bold text-center">PAINÉIS ELÉTRICOS</h1>
        </div>

        <div className="mt-10 py-14">
          <h3 className="text-lg font-semibold pb-4">FUNÇÃO DOS PAINÉIS ELÉTRICOS</h3>
          <p className="max-w-2xl mx-auto text-sm font-semibold">
            Painéis elétricos têm a função de abrigar e controlar componentes
            elétricos para distribuição, proteção e gerenciamento de energia em
            diversos contextos. Suas principais finalidades incluem:
          </p>
        </div>
      </div>

      <section className=" w-full mx-auto text-center mt-20">
        <div className="max-w-xl mx-auto flex flex-col gap-6">
          <h3 className="text-xl font-bold">NOSSOS PAINÉIS</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl px-3 mx-auto mt-10">
            {
                paineis.map(p => {
                    return (
                        <div className="relative mb-10">
                            <img src={p.img} className="rounded-sm" />
                            <div className="flex items-center justify-between py-2 rounded-md px-2 bg-gray-800 text-sm text-white">
                                <p>{p.title}</p>
                                <button onClick={() => navigate(`/produtos/${p.href}`)} className="bg-gray-300 hover:bg-gray-200 text-black p-2 rounded-full">
                                    <GoArrowUpRight />
                                </button>
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
