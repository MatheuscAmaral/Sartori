import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import wallpaper from "../../assets/electrician_03.png";

import { MdAbc, MdAlternateEmail } from "react-icons/md";
import { IoBusiness } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <main className="bg-gray-50 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-10 lg:mx-auto">
                <section className="flex flex-col gap-5 bg-white shadow-lg rounded-lg mx-auto mt-20 px-5 py-5 pb-10">
                    <h1 className="text-3xl font-bold text-gray-700 ">Fale conosco</h1>
                    <hr />

                    <form className="grid grid-cols-1 gap-7">
                        <div className="grid grid-cols-2 gap-3 justify-center">
                            <div className="flex flex-col gap-2 relative">
                                <label htmlFor="nome" className="text-md font-semibold">Nome completo:</label>
                                <Input id="nome" placeholder="Digite seu nome..." className="pr-14 lg:pr-10" required/>
                                <MdAbc className="absolute right-3 top-9 text-gray-600" fontSize={32}/>
                            </div>

                            <div className="flex flex-col gap-2 relative">
                                <label htmlFor="company">Empresa:</label>
                                <Input id="company" placeholder="Qual a sua empresa..." className="pr-14 lg:pr-10" required/>
                                <IoBusiness className="absolute right-3 top-10 text-gray-600" fontSize={20}/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 relative">
                            <label htmlFor="email">E-mail:</label>
                            <Input id="email" placeholder="Digite seu e-mail..." className="pr-14 lg:pr-10" required/>
                            <MdAlternateEmail className="absolute right-3 top-10 text-gray-600" fontSize={20}/>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message">Mensagem:</label>
                            <Textarea id="message" placeholder="Digite a sua mensagem..." required/>
                        </div>

                        <button type="submit" className="bg-black text-white p-3 rounded-lg text-lg font-semibold">
                            Enviar mensagem
                        </button>
                    </form>
                </section>

                <section className="flex flex-col gap-5 mt-10 lg:mt-20">
                    <div className="hidden shadow-lg lg:flex justify-center rounded-lg">
                        <img src={wallpaper} className="ml-5 w-96 h-80" alt="homem trabalhando" />
                    </div>

                    <div className="grid grid-cols-1 gap-5 p-3 bg-white shadow-lg  rounded-lg">
                        <div className="flex gap-5 items-center bg-gray-50 p-3 rounded-lg">
                            <span className="bg-gray-300 p-3 rounded-full">
                                <MdAlternateEmail fontSize={25}/>
                            </span>
                            
                            <div className="flex flex-col gap-1">
                                <span className="text-md font-bold">E-mail</span>
                                <p className="text-sm font-semibold text-gray-500">sartorieletrica@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center bg-gray-50 p-3 rounded-lg">
                            <span className="bg-gray-300 p-3 rounded-full">
                                <FaPhoneAlt fontSize={24}/>
                            </span>
                            
                            <div className="flex flex-col gap-1">
                                <span className="text-md font-bold">Telefone</span>
                                <p className="text-sm font-semibold text-gray-500">(31) 97122-2983</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Contact;