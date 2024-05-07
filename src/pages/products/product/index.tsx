import { useEffect, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate, useParams } from 'react-router-dom';
import img5 from "../../../assets/QDR-6.webp";
import img2 from "../../../assets/QCC-13.webp";
import img3 from "../../../assets/QDFL-10.webp";
import img4 from "../../../assets/QDL-6.webp";

const Product = () => {
  const {product} = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (product == "QDR") {
        setTitle("QDR – Quadro de Distribuição Residencial");
        setDesc("Os quadros de disjuntores residenciais oferecidos pela Sartori Elétrica desempenham a função crucial de abrigar todos os dispositivos de proteção e controle dos circuitos elétricos. Elaborados com componentes de alta qualidade, os painéis fabricados pela Sartori Elétrica garantem a total eficiência e confiabilidade do sistema. Disponíveis em opções de caixas termoplásticas e metálicas, tanto de sobrepor quanto de embutir, atendemos às necessidades específicas de cada projeto, proporcionando flexibilidade para adaptar-se às preferências individuais dos nossos clientes.");
    } else if (product == "QCC") {
        setTitle("QCC – Quadro de Comando e Controle");
        setDesc("Os quadros de comando e controle da Sartori Elétrica são projetados e fabricados para oferecer soluções inteligentes e economicas. Esses quadros destinam-se a controlar e proteger máquinas, equipamentos e células de produção, abrangendo uma ampla gama de processos elétricos em sistemas tanto industriais quanto prediais. No âmbito industrial, os Quadros de Comando e Controle da Sartori Elétrica são desenvolvidos para proporcionar uma gestão eficaz e segura dos processos elétricos em máquinas e equipamentos. A inteligência embutida nesses quadros permite um controle preciso, contribuindo para a otimização da produção e a garantia da segurança operacional.")
    } else if (product == "QDFL") {
        setTitle("QDFL – Quadro Distribuição Força e Luz");
        setDesc("Os quadros de distribuição de força e luz da Sartori Elétrica são projetados e fabricados para proteção dos circuitos secundários de tomadas e iluminação, garantindo a eficiência do sistema de iluminação automatizado, permitindo o acionamento e desligamento da iluminação de acordo com as necessidades específicas do cliente. Cada quadro é fabricado com os mais rigorosos padrões de qualidade e segurança, garantindo a conformidade com normas vigentes.");
    } else if (product == "QDL") {
        setTitle("QDL – Quadro Distribuição de Luz");
        setDesc("Os quadros de distribuição de luz da Sartori Elétrica são fabricados meticulosamente para atender às normas vigentes e às distintas necessidades de aplicação no cenário industrial, predial e comercial. Compromisso inabalável com a eficiência energética, fabricamos quadros de luz com sistema de iluminação automatizado, permitindo o acionamento e desligamento da iluminação de acordo com as necessidades específicas de cada cliente.");
    } 
  })

  return (
    <main>
      <section className="mx-auto  text-center">
        <div className="py-14 bg-gray-200">
          <h1 className="text-3xl font-bold text-center">{title}</h1>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20 mb-32 mx-auto max-w-5xl items-center px-10">
        <div className='flex flex-col gap-3'>
            <h4 className='text-3xl font-bold'>{product}</h4>

            <p className='text-sm font-medium'>{desc}</p>
        </div>

        <div className='flex justify-center'>
          {
            product == "QDR" && <img src={img5} className='w-96 rounded-md' />
          }
          {
            product == "QCC" && <img src={img2} className='w-96' />
          }
          {
            product == "QDFL" && <img src={img3} className='w-96' />
          }
          {
            product == "QDL" && <img src={img4} className='w-96' />
          }
        </div>
      </section>

      <hr className='mx-auto max-w-5xl'/>
      
      <section className='grid grid-cols-2 gap-20 mx-auto max-w-4xl mt-10 mb-20 px-10'>
        <h3 className='text-2xl font-bold'>PROJETOS ELÉTRICOS É COM A SARTORI</h3>
        <p className='text-lg'>A <strong className='underline'>Sartori</strong> é especialista quando o assunto é projetos elétricos . A empresa oferece desde o Projeto Fotovoltaico até o comissionamento com segurança e qualidade.</p>
      </section>

        <button
            onClick={() => navigate("/produtos")}
            className="flex items-center gap-2 bg-gray-800 text-white mx-auto text-sm p-3 rounded-sm mt-2 text-md hover:bg-gray-600 transition-all"
        >
            VER TODOS OS PRODUTOS
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

export default Product;
