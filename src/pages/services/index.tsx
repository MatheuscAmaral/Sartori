import { GoArrowUpRight } from "react-icons/go"; 
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();

    return (
        <main className="h-svh">
            <div className="mx-auto  text-center">
                <div className="py-14 bg-gray-200">
                    <h1 className="text-3xl font-bold text-center">INSTALAÇÕES ELÉTRICAS ESPECIALIDADE <br /> SARTORI</h1>
                </div>

                <div className="mt-10 py-14">
                    <p className="max-w-7xl mx-auto text-lg font-semibold">A <strong className=" underline">Sartori</strong> realiza uma análise criteriosa dos projetos elétricos, visando atender às necessidades individuais de cada cliente. É de extrema importância compreender se o cliente requer um projeto totalmente novo ou uma modificação no projeto existente.</p>
                </div>
            </div>

            <div className="flex flex-col gap-3 items-center px-5 bg-gray-300 w-full py-20 mt-24">
                <h3 className="text-2xl font-semibold text-center">
                    Otimize o seu negócio com a expertise <strong>Sartori</strong>.
                </h3>

                <button onClick={() => navigate("/contato")} className="flex items-center gap-2 bg-transparent text-black rounded-sm mt-2 text-md hover:bg-gray-300 p-2 transition-all">
                    ENTRE EM CONTATO
                    <GoArrowUpRight fontSize={20}/>
                </button>
            </div>
        </main>
    )
}

export default Services;