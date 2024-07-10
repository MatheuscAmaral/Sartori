import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaLocationDot } from "react-icons/fa6";
import { MdAbc, MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <main className=" pb-20">
            <h1 className="text-3xl text-center mt-10 font-bold text-gray-700 ">Solicite seu orçamento</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-10 lg:mx-auto">         
                <section className="flex w-full flex-col gap-5 mx-auto mt-20 lg:px-20 py-6  pb-10">
                    <form action="https://formsubmit.co/Sartorieletricamg@gmail.com" method="POST" className="grid grid-cols-1 gap-7 w-full">
                        <div className="grid grid-cols-2 gap-3 justify-center">
                            <div className="flex flex-col gap-2 relative">
                                <Input id="name" type="text" name="name" placeholder="Digite seu nome..." className=" pr-14 lg:pr-10" required/>
                                <MdAbc className="absolute right-3 top-1 text-gray-600" fontSize={32}/>
                            </div>

                            <div className="flex flex-col gap-2 relative">
                                <Input id="email" type="email" name="email" placeholder="Digite seu e-mail..." className="pr-14 lg:pr-10" required/>
                                <MdAlternateEmail className="absolute right-3 top-3 text-gray-600" fontSize={20}/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Textarea id="message" name="message" placeholder="Digite a sua mensagem..." required/>
                        </div>

                        <button type="submit" className="bg-black text-white p-3 rounded-lg text-lg font-semibold">
                            Enviar mensagem
                        </button>

                        
                        <input type="hidden" name="_subject" value="Nova mensagem!"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="text" name="_honey"/>
                    </form>
                </section>

                <section className="flex flex-col gap-5 mt-10 lg:mt-20 ">
                    <div className="grid grid-cols-1 gap-5 p-3">
                        <div className="flex gap-5 items-center bg-gray-50 p-3 rounded-lg">
                            <span className="bg-gray-300 p-3 rounded-full">
                                <FaLocationDot fontSize={25}/>
                            </span>
                            
                            <div className="flex flex-col gap-1">
                                <span className="text-md font-bold">Localização</span>
                                <p className="text-sm font-semibold text-gray-500">Av.Pref. Gil Diniz, 423 - Fonte Grande, Contagem - MG, 32013-650</p>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center bg-gray-50 p-3 rounded-lg">
                            <span className="bg-gray-300 p-3 rounded-full">
                                <MdAlternateEmail fontSize={25}/>
                            </span>
                            
                            <div className="flex flex-col gap-1">
                                <span className="text-md font-bold">E-mail</span>
                                <p className="text-sm font-semibold text-gray-500">Sartorieletricamg@gmail.com</p>
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