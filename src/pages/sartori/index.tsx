import logo from "../../assets/faviconsartori.png"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { HiRocketLaunch } from "react-icons/hi2";
import { GoArrowUpRight } from "react-icons/go";    
import { useNavigate } from "react-router-dom";

const Sartori = () => {
    const navigate = useNavigate();

    return (
        <main >
            <div className="flex flex-col mx-10 lg:mx-auto items-center gap-20">
                <div className="w-full bg-gray-200 py-16">
                    <h1 className="text-3xl lg:text-4xl text-center font-bold text-gray-800">SARTORI – ENGENHARIA ELÉTRICA</h1>
                </div>

                <section className="flex flex-col gap-20 mt-16 max-w-5xl">
                    <p className="text-xl font-semibold">
                        A <strong>Sartori</strong> é uma empresa focada em <strong>projetos</strong>, <strong>execução e comissionamento de instalações elétricas</strong>, industriais, prediais e comerciais. Localizada em Contagem, próximo a grande BH, a empresa atende a região e busca crescimento sólido e em espiral para tornar-se uma das maiores empresas em <strong>instalações elétricas</strong> de Contagem.
                    </p>

                    <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-2  mt-10">
                        <img src={logo} className="w-72 mx-16" alt="logo" />

                        <div className="flex flex-col gap-5">
                            <h1 className="text-3xl font-bold">A HISTÓRIA DA SARTORI</h1>
                            <p className="text-lg font-semibold">
                                A história da empresa começou com a capacitação profissional dos atuais sócios, que trabalhavam juntos em uma das maiores empresas automobilísticas do mundo. Com o know-how adquirido, conseguiram entender toda a escala dos projetos elétricos, passando também pela execução e comissionamento.
                            </p>
                            <span className="text-md font-medium">
                                Antes de iniciar uma trajetória de sucesso no universo de projetos elétricos, é importante saber onde está e para onde quer chegar. A Zetaluz tem seus padrões bem definidos e estabelecidos para um crescimento sólido a curto, médio e longo prazo.
                            </span>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-2 mt-10">
                    <h1 className="text-3xl text-center font-bold">CONHEÇA A MISSÃO, VISÃO E <br /> VALORES DA SARTORI!</h1>

                    <div className="flex justify-center">
                        <Tabs defaultValue="missao" className="w-full mt-10">
                            <TabsList className="flex justify-center h-20">
                                <TabsTrigger className="w-full h-full text-lg font-semibold" value="missao">MISSÃO</TabsTrigger>
                                <TabsTrigger className="w-full h-full text-lg font-semibold" value="visao">VISÃO</TabsTrigger>
                                <TabsTrigger className="w-full h-full text-lg font-semibold" value="valores">VALORES</TabsTrigger>
                            </TabsList>

                            <TabsContent value="missao" className="max-w-xl text-center">
                                    <div className="bg-gray-400 p-3 w-16 text-center rounded-full mx-auto mt-10">
                                        <HiRocketLaunch fontSize={40}/>
                                    </div>

                                    <p className="text-lg font-bold mt-10">Fornecer soluções inovadoras e de alta qualidade para os clientes, indo sempre além das expectativas com tecnologia, sustentabilidade e eficiência.</p>
                            </TabsContent>

                            <TabsContent value="visao" className="max-w-xl text-center">
                                <div className="bg-gray-400 p-3 w-16 text-center rounded-full mx-auto mt-10">
                                    <HiRocketLaunch fontSize={40}/>
                                </div>

                                <p className="text-lg font-bold mt-10">Tornar-se referência na grande BH e regiões metropolitanas em projetos elétricos com integridade e soluções que vão desde o projeto, execução e comissionamento.</p>
                            </TabsContent>

                            <TabsContent value="valores" className="max-w-xl text-center">
                                <div className="bg-gray-400 p-3 w-16 text-center rounded-full mx-auto mt-10">
                                    <HiRocketLaunch fontSize={40}/>
                                </div>

                                <ul className="grid grid-cols-2 gap-2 text-lg font-bold mt-10">
                                    <li>Respeito</li>
                                    <li>Ética</li>
                                    <li>Transparência</li>
                                    <li>Solidez</li>
                                    <li>Integridade</li>
                                    <li>Responsabilidade social</li>
                                    <li>Excelência</li>
                                    <li>Responsabilidade ambiental</li>
                                </ul>
                            </TabsContent>
                        </Tabs>
                    </div>

                </section>

            </div>

            <div className="flex flex-col gap-3 items-center px-5 bg-gray-200 w-full py-20 mt-24">
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

export default Sartori;