import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import img3 from "../../assets/revision-of-inventory-in-warehouse-2022-12-22-20-08-29-utc.webp";
import img4 from "../../assets/car-manufacturing-plant-automotive-shop-the-asse-2023-01-05-00-43-58-utc-1.webp";
import img5 from "../../assets/instalacao-eletrica-predial.webp";
import img6 from "../../assets/retrofit-da-instalacao-eletrica-1.webp";

const Services = () => {
  const navigate = useNavigate();

  return (
    <main className="">
      <div className="mx-auto  text-center">
        <div className="py-14 bg-gray-200">
          <h1 className="text-3xl font-bold text-center">
            MANUTENÇÃO ELÉTRICA
          </h1>
        </div>

        <div className="mt-10 py-14">
          <p className="max-w-7xl mx-auto text-lg font-semibold">
            A <strong>Sartori</strong> conta com colaboradores preparados para resolver os problemas de indústrias, empresas, comércios, residências e outros, afim de sempre entregar segurança e confiança aos seus clientes. Prestamos manutenções em:
          </p>
        </div>
      </div>

      <section className=" w-full mx-auto text-center mt-20">
        <div className="max-w-xl mx-auto flex flex-col gap-6">
          <h3 className="text-xl font-bold">TIPOS DE PROJETOS ELÉTRICOS</h3>
        </div>

        <div className="grid grid-cols md:grid-cols-2 px-2 gap-5 max-w-3xl mx-auto mt-10">
          <div className="relative mb-10">
            <img src={img3} className="rounded-sm" />
            <div
              className="bg-gray-800 text-white rounded-sm p-3 md:absolute md:left-7 md:top-52 md:w-80 transition-all"
            >
              <span className="flex justify-between px-2 items-center">
                <h3 className="text-sm">INSTALAÇÃO ELÉTRICA COMERCIAL</h3>
                <button onClick={() => navigate("/servicos/eletrica-comercial")} className="bg-gray-300 hover:bg-gray-200 text-black p-2 rounded-full">
                  <GoArrowUpRight />
                </button>
              </span>
            </div>
          </div>
          <div className="relative mb-10">
            <img src={img4} className="rounded-sm" />
            <div
              className="bg-gray-800 text-white rounded-sm p-3 md:absolute md:left-7 md:top-52 md:w-80 transition-all"
            >
              <span className="flex justify-between px-2 items-center">
                <h3 className="text-sm">INSTALAÇÃO ELÉTRICA INDUSTRIAL</h3>
                <button onClick={() => navigate("/servicos/eletrica-industrial")} className="bg-gray-300 hover:bg-gray-200 text-black p-2 rounded-full">
                  <GoArrowUpRight />
                </button>
              </span>
            </div>
          </div>
          <div className="relative mb-10">
            <img src={img5} className="rounded-sm" />
            <div
              className="bg-gray-800 text-white rounded-sm p-3 md:absolute md:left-7 md:top-52 md:w-80 transition-all"
            >
              <span className="flex justify-between px-2 items-center">
                <h3 className="text-sm">INSTALAÇÃO ELÉTRICA RESIDENCIAL</h3>
                <button onClick={() => navigate("/servicos/eletrica-predial")} className="bg-gray-300 hover:bg-gray-200 text-black  p-2 rounded-full">
                  <GoArrowUpRight />
                </button>
              </span>
            </div>
          </div>

          <div className="relative mb-10">
            <img src={img6} className="rounded-sm" />
            <div
              className="bg-gray-800 text-white rounded-sm p-3 md:absolute md:left-7 md:top-52 md:w-80 transition-all"
            >
              <span className="flex justify-between px-2 items-center">
                <h3 className="text-sm">POSTES DE ILUMINAÇÃO EM CONDOMÍNIOS E RUAS PRIVATIVAS</h3>
                <button onClick={() => navigate("/servicos/postes-ruas")} className="bg-gray-300 hover:bg-gray-200 text-black p-2 rounded-full">
                  <GoArrowUpRight />
                </button>
              </span>
            </div>
          </div>
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

export default Services;
