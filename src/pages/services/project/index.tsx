import { useEffect, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import  logo from "../../../assets/logosartori.png";
import { useNavigate, useParams } from 'react-router-dom';

const Project = () => {
  const {project} = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (project == "eletrica-comercial") {
        setTitle("AUTOMAÇÃO ELÉTRICA COMERCIAL");
    } else if (project == "eletrica-industrial") {
        setTitle("AUTOMAÇÃO ELÉTRICA INDUSTRIAL");
    } else if (project == "eletrica-predial") {
        setTitle("AUTOMAÇÃO ELÉTRICA PREDIAL/RESIDENCIAL");
    } else if (project == "postes-ruas") {
        setTitle("POSTES DE ILUMINAÇÃO EM CONDOMÍNIOS E RUAS PRIVATIVAS");
    }
  })

  return (
    <main>
      <section className="mx-auto  text-center">
        <div className="py-14 bg-gray-200">
          <h1 className="text-3xl font-bold text-center">{title}</h1>
        </div>

        <div className="mt-10 py-14 px-5">
          <p className="max-w-7xl mx-auto text-lg font-semibold">
            {
              project == "eletrica-comercial" && (
                "As instalações elétricas comerciais fornecem energia a estabelecimentos comerciais, assegurando o funcionamento seguro e eficiente dos equipamentos. Devem seguir normas de segurança para evitar falhas e riscos, atendendo às demandas específicas de cada comércio. O planejamento deve considerar a carga elétrica, proteção e facilidade de manutenção."
              )
            }

            {
              project == "eletrica-predial" && (
                "As instalações elétricas prediais são sistemas elétricos montados para garantir eletricidade para todo o prédio. Para que o sistema funcione bem e seja livre de erros, ele deve ser montado de acordo com as regras e normas de segurança, que garantem os processos seguros da transmissão de energia."
              )
            }

            {
              project == "postes-ruas" && (
                "Os postes de iluminação em condomínios e ruas privativas devem ser instalados por profissionais qualificados, seguindo normas e regulamentações de segurança. A posição estratégica e a manutenção periódica são essenciais para garantir iluminação eficiente e segura. Isso melhora a visibilidade noturna e a sensação de segurança dos moradores."
              )
            }

            {
              project == "eletrica-industrial" && (
                "A automação industrial refere-se ao uso de tecnologia e sistemas para controlar e operar processos industriais de forma automatizada, reduzindo a necessidade de intervenção humana direta. Essa automação pode abranger diversos aspectos da indústria, desde a produção e montagem de produtos até o controle de qualidade, logística e gestão de estoques."
                ) 
              }
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-24 mb-40 mx-auto max-w-5xl items-center px-5">
        <div className='flex flex-col gap-3'>
            <h4 className='text-3xl font-bold'>OBJETIVO</h4>

            <p className='text-lg font-medium'>
              {
                project == "eletrica-comercial" && (
                  `A Sartori é especializada em serviços elétricos comerciais, garantindo qualidade e eficiência energética para seu estabelecimento. Focada em atender às necessidades específicas de cada negócio, a empresa segue rigorosamente as normas de segurança, assegurando um sistema energético confiável e seguro. Com a Sartori, seu comércio estará sempre bem alimentado em energia, proporcionando um ambiente seguro e eficiente para suas operações diárias.`
                  ) 
              }

              {
                project == "eletrica-predial" && (
                  `A Sartori é especializada em serviços prediais, garantindo qualidade em energia para seu prédio. Com o foco em eficiência energética, a empresa procura atender a demanda de cada construção, aplicando as normas e deixando o local com um sistema energético seguro.`
                  ) 
              }
              
              {
                project == "postes-ruas" && (
                  "A Sartori é especializada em serviços de iluminação, garantindo qualidade e segurança para seu condomínio ou rua privativa. Com foco em eficiência luminotécnica, a empresa atende às necessidades de cada projeto, seguindo normas rigorosas para fornecer um sistema de iluminação seguro e eficaz, melhorando a visibilidade e a segurança noturna."
                )
              }

              {
                project == "eletrica-industrial" && (
                  ` A Sartori é especializada em serviços de automação industrial, atendendo a uma variedade de segmentos industriais. Com nossos serviços de automação, é possível alcançar um aumento na eficiência produtiva, reduzir os custos operacionais, aprimorar a qualidade do produto e garantir a segurança dos trabalhadores. Nossas soluções oferecem flexibilidade para se adaptar às demandas em constante mudança do mercado.`
                ) 
              }
            </p>
        </div>

        <div className='flex justify-center'>
            <img src={logo} className='w-96' />
        </div>
      </section>

      <hr className='mx-auto max-w-5xl'/>
      
      <section className='grid md:grid-cols-2 gap-20 mx-auto max-w-4xl mt-10 mb-20 px-5'>
        <h3 className='text-2xl font-bold'>PROJETOS ELÉTRICOS É COM A SARTORI</h3>
        <p className='text-lg'>A <strong className='underline'>Sartori</strong> trabalha com diversos tipos de projetos de instalações elétricas. A empresa conta com Know-how e experiência para atender os segmentos industriais, prediais e comerciais.</p>
      </section>

        <button
            onClick={() => navigate("/servicos")}
            className="flex items-center gap-2 bg-gray-800 text-white mx-auto text-sm p-3 rounded-sm mt-2 text-md hover:bg-gray-600 transition-all"
        >
            VER TODOS OS PROJETOS
            <GoArrowUpRight fontSize={20} />
        </button>

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

export default Project;
