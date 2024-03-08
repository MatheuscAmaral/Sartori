import wallpaper from "../../assets/wallpaper.jpg";
import wallpaper2 from "../../assets/wallpaper2.avif";
import { GoArrowUpRight } from "react-icons/go";
import { Carousel as ResponsiveCarousel  } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Home = () => {
    return (
        <main>
            <div className=" flex flex-col gap-2 mb-10 text-white">
                <ResponsiveCarousel className="h-screen w-full mb-5" autoPlay infiniteLoop showArrows={false} showThumbs={false} showStatus={false}>
                    <div>
                        <img src={wallpaper2} className="h-screen xl:h-full" style={{ maxHeight: '800px'}} alt="carousel2" />
                    </div>
                    <div>
                        <img src={wallpaper} className="h-screen xl:h-full" style={{ maxHeight: '800px'}} alt="carousel1" />
                    </div>
                </ResponsiveCarousel>

                {/* <img src={wallpaper} alt="wallpaper" /> */}
                <div className="flex flex-col gap-8 justify-center items-center mt-32 2xl:mt-46 md:w-5/6 lg:w-4/6 xl:w-3/6 3xl:w-2/6 mx-auto select-none absolute top-40 right-0 left-0 max-w-xl:">
                    <h1 className="text-4xl px-10 md:text-5xl font-bold text-center" style={{textShadow: "10px 10px 10px rgba(0, 0, 0, 5)"}}>INSTALAÇÃO ELÉTRICA INDUSTRIAL</h1>
                    <p className="text-lg text-center w-10/12" style={{textShadow: "10px 10px 10px rgba(0, 0, 0, 5)"}}>Supere a complexidade com precisão: confie em nossa expertise em projetos industriais de alta complexidade.</p>
            
                    <button className="flex  items-center gap-2 bg-gray-900 text-white p-5 rounded-sm mt-2">
                        SAIBA MAIS
                        <GoArrowUpRight fontSize={20}/>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Home;