import { Carousel as ResponsiveCarousel  } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import { GoArrowUpRight } from "react-icons/go";

import wallpaper from "../../assets/wallpaper.jpg";
import wallpaper2 from "../../assets/wallpaper2.avif";
import img1 from "../../assets/img1.webp"
import electricity from "../../assets/electricity.png"
import industry from "../../assets/industryy.jpg"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { useNavigate } from 'react-router';
  

const Home = () => {
    const navigate = useNavigate();

    return (
        <main>
            <section className="flex flex-col gap-2 text-white h-96 mb-96">
                <ResponsiveCarousel className="h-screen w-full" autoPlay infiniteLoop showArrows={false} showThumbs={false} showStatus={false}>
                    <div>
                        <img src={wallpaper2} className="h-screen xl:h-full" style={{ maxHeight: '800px'}} alt="carousel2" />
                    </div>
                    <div>
                        <img src={wallpaper} className="h-screen xl:h-full" style={{ maxHeight: '800px'}} alt="carousel1" />
                    </div>
                </ResponsiveCarousel>
                
                <div className="flex flex-col gap-8 justify-center items-center mt-32 2xl:mt-46 md:w-5/6 lg:w-4/6 xl:w-3/6 3xl:w-2/6 mx-auto select-none absolute top-40 right-0 left-0 max-w-xl:">
                    <h1 className="text-4xl px-10 md:text-5xl font-bold text-center" style={{textShadow: "10px 10px 10px rgba(0, 0, 0, 5)"}}>INSTALAÇÃO ELÉTRICA INDUSTRIAL</h1>
                    <p className="text-lg text-center w-10/12" style={{textShadow: "10px 10px 10px rgba(0, 0, 0, 5)"}}>Supere a complexidade com precisão: confie em nossa expertise em projetos industriais de alta complexidade.</p>
            
                    <button className="flex  items-center gap-2 bg-gray-900 text-white p-5 rounded-sm mt-2">
                        SAIBA MAIS
                        <GoArrowUpRight fontSize={20}/>
                    </button>
                </div>
            </section>

            <section className="bg-gray-300">
                <div className="flex flex-col mx-10 lg:flex-row justify-center gap-20 xl:mx-auto max-w-6xl pt-28 py-20">
                    <h1 className="text-2xl w-full font-semibold">Por que contratar uma empresa <strong>especialista</strong> em instalações elétricas?</h1>
                    <div className="flex flex-col gap-2 items-start font-semibold">
                        <span>
                            Com a Sartori, você economiza e preserva o seu patrimônio. Entre os motivos para contratar uma empresa especialista está a garantia de possuir uma instalação elétrica segura, ininterrupta e sem oscilações.
                        </span>

                        <button className="flex items-center gap-2 bg-transparent text-black rounded-sm mt-2 text-sm hover:bg-gray-200 p-2 transition-all">
                            CONHEÇA MAIS MOTIVOS E SURPREENDA-SE 
                            <GoArrowUpRight fontSize={20}/>
                        </button>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 w-full mt-1">
                <div className="flex flex-col gap-6 px-16 w-full max-w-7xl my-5  h-full - justify-center ">
                    <h1 className="text-4xl font-bold">PROJETOS ELÉTRICOS</h1>
                    <p className="text-md">A análise dos projetos elétricos da Sartori é realizada com o objetivo de atender às necessidades individuais de cada cliente. É essencial compreender se o cliente requer um projeto totalmente novo ou uma modificação em um projeto existente.</p>
                    <button className="flex items-center justify-center gap-2 bg-gray-700 text-white p-5 mb-10 rounded-sm mt-2 max-w-72 ">
                        VEJA TODOS OS PROJETOS
                        <GoArrowUpRight fontSize={20}/>
                    </button>
                </div>

                <Carousel className="hidden lg:flex">
                    <CarouselContent className="relative w-full">
                        <CarouselItem >
                            <img src={img1} />
                        </CarouselItem>

                        <CarouselItem>
                            <img src={img1} />
                        </CarouselItem>

                        <CarouselItem>
                            <img src={img1} />
                        </CarouselItem>
                    </CarouselContent>

                    <CarouselPrevious className="absolute left-0" />
                    <CarouselNext className="absolute right-2" />
                </Carousel>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col gap-5 px-16 py-32 text-white bg-gray-900">
                    <h1 className="text-3xl font-bold">
                        Como a Sartori pode te ajudar?
                    </h1>

                    <p >
                        A Sartori é uma empresa focada em qualidade e know-how dos especialistas no ramo industrial, predial e comercial. Equipe qualificada para projeto, instalação e manutenção. Uma vitrine enorme de soluções para colocar a sua empresa em destaque.
                    </p>

                    <button className="flex items-center justify-center gap-2 bg-gray-400 text-black p-5 rounded-sm mt-2 max-w-72">
                        VEJA TODOS OS PROJETOS
                        <GoArrowUpRight fontSize={20}/>
                    </button>
                </div>

                <div className="hidden lg:flex">
                    <img src={img1} alt="" />
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 w-full gap-24 px-10 lg:px-40 items-center justify-between pt-20 mb-28">
                <div className='hidden lg:block w-full'>
                    <img src={industry} className=' rounded-full' />
                </div>

                <div className="flex flex-col gap-5 w-full">
                    <h1 className="text-2xl font-bold text-gray-700">Por que contratar a Sartori?</h1>

                    <hr />
                    <div className="flex gap-2 items-center">
                        <img src={electricity} className="w-12"/>
                        <p>Especialistas em instalações elétricas</p>
                    </div>
                    <hr />

                    <div className="flex gap-2 items-center">
                        <img src={electricity} className="w-12"/>
                        <p>Perita no ramo industrial, predial e comercial</p>
                    </div>

                    <hr />
                    <div className="flex gap-2 items-center">
                        <img src={electricity} className="w-12"/>
                        <p>Especialista em projeto, instalação e manutenção</p>
                    </div>
                    <hr />

                    <button onClick={() => navigate("/servicos")} className="flex items-center justify-center gap-2 bg-gray-300 text-black p-5 rounded-sm mt-2 max-w-72">
                        VEJA TODOS OS PROJETOS
                        <GoArrowUpRight fontSize={20}/>
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Home;