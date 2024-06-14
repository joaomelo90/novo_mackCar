import React from "react";
import {Containder} from './styles/style'
import {Menu} from './componentes/menu'

import Carrosel from "./componentes/carrosel"
import Map from "../src/map"

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CarRepairIcon from '@mui/icons-material/CarRepair';

import Motor from './assets/motorhome.jpg'
import Logo from './assets/logo cris.jpg'
import Gif from './assets/gif mecanica.gif'
import Insta from './assets/insta gif.gif'
import Face from './assets/Facebook Icon.gif'
import Tel from './assets/telgif.gif'
import Zap from './assets/zap.gif'


function App() {
  return (
 <Containder className=" w-full h-full">
<Menu/>
<nav id="inicio" style={{backgroundImage: `url(${Motor})`}} className=" w-screen h-screen bg-cover">

  <div className=" w-screen h-full flex justify-center items-center " >
    <img 
    src={Logo} 
    alt="logo" 
    className=" w-80 h-80 rounded-full "/>

  </div>

</nav>

<section>
  <p className=" w-full p-7 text-white text-center font-medium text-lg leading-loose">
  Traga o seu veículo para a melhor oficina mecânica da cidade!  <br />
        Aqui a gente cuida dele como se fosse nosso e traz para você <br /> as melhores soluções com preço justo e
        resolução dentro do prazo.<br />
        Aqui não tem enrolação! <br /> Ligue agora e agende uma visita.<br /><br />(11) 4317-0709 / (11) 97608-6281
  </p>
</section>

<section className=" w-full h-full mt-10 bg-black opacity-80">

  <p className=" text-white text-center font-bold mb-5 text-xl p-7 lg:text-5xl">Nossos Serviços</p>

<div id="servicos">
<Carrosel />
</div>
</section>

<section className="flex flex-col items-center w-full h-full p-7 lg:flex-row lg:justify-center lg:gap-10">

  <div className="flex flex-col items-center">
<PsychologyIcon style={{width:'100px', height: '100px' }} className=" text-vermelho"/>
<p className=" text-white font-bold text-2xl whitespace-nowrap">Profissional Qualificado</p>
</div>

<div className="flex p-7 flex-col items-center">
<ThumbUpIcon style={{width:'100px', height: '100px' }} className=" text-vermelho"/>
<p className=" text-white font-bold text-2xl">confiabilidade</p>
</div>

<div className="flex p-7 flex-col items-center">
<MonetizationOnIcon style={{width:'100px', height: '100px' }} className=" text-vermelho"/>
<p className=" text-white font-bold text-2xl whitespace-nowrap">Preços Acessíveis</p>
</div>

<div className="flex p-7 flex-col items-center">
<CarRepairIcon style={{width:'100px', height: '100px' }} className=" text-vermelho"/>
<p className=" text-white font-bold text-2xl whitespace-nowrap">Equipamentos Modernos</p>
</div>

</section>

<section id="somos" className=" bg-black w-screen h-auto opacity-75">
  <p className=" text-white text-center text-2xl w-[95%] p-5">
  <span className=" text-3xl font-bold">Quem Somos</span> <br/><br/> Somos a oficina mecânica <span className="text-vermelho font-bold">Mack Car</span> , especializada em carros nacionais e importados a gasolina e álcool. Com experiência e profissionalismo, oferecemos serviços de manutenção e reparo de qualidade para garantir o melhor desempenho do seu veículo. Confie em nós para cuidar do seu carro como se fosse nosso.
  </p>
  <div className="flex justify-center p-5">
  <img src={Gif} alt="gif oficina"/>
  </div>

</section>

<article className="flex flex-col justify-around p-5 lg:flex-row lg:ml-10">

  <div id="endereco">
    <p className="text-vermelho font-bold text-xl">Endereço:</p>
    <p className=" text-white text-xl whitespace-nowrap">R. min. Frederico Barreto, 480 - Bairro dos Casas.<br/>
    São Bernardo do Campo - SP.</p>

    <p className="text-vermelho font-bold text-xl mt-7">Horários:</p>
    <p className=" text-white text-xl"> 
    Segunda a Sexta, das 8:00 às 18:00.<br/>
    Sábado de 08:00 às 13:00.
    </p>
  </div>

  <div className=" mt-5 flex justify-center w-full z-0">
  <Map />
  </div>
</article>

<footer className=" w-full h-auto mt-10 bg-black opacity-75 lg:flex lg:justify-around">

<div id="contatos" className="flex flex-col items-center">
  <a href="https://www.instagram.com/oficinamecanicamackcar/" target="_blank" rel="noopener noreferrer">
  <img src={Insta}
   alt="instagram"
   className=" w-20 ml-5 mt-7"/>
   </a>
   <p className=" text-white text-xl ml-4 mt-2">@oficinamecanicamackcar</p>
   
</div>

<div className="flex flex-col mt-5 items-center">
  <a href=" https://www.facebook.com/cristianojuliogomessantos.julio" target="_blank" rel="noopener noreferrer">
  <img src={Face}
   alt="facebook"
   className=" w-24 ml-5"/>
    </a>
   <p className=" text-white text-xl ml-4 ">Cristiano julio julio</p>
  
</div>

<div className="flex flex-col mt-5 items-center">
<a href="tel:+551143170709">
  <img src={Tel}
   alt="telefone"
   className=" w-32 ml-5 "/>
    </a>
   <p className=" text-white text-xl ml-4 ">(11) 4317-0709</p>
  
</div>

<div className="flex flex-col mt-7 items-center">
<a href="https://wa.me/+5511976086281" target="_blank" text="Bom dia, Gostaria de fazer um orçamento.">
  <img src={Zap} 
  alt="whatsapp"
  className=" w-20 ml-5"/>
   </a>
  <p className=" text-white text-xl ml-4 ">(11) 97608-6281</p>
 
 
</div>

</footer>
<div className=" w-screen h-auto text-vermelho bg-black opacity-75">
  <a
  className=" font-bold text-center"
  href="https://portfolio-bice-gamma-38.vercel.app/">
    <p>© Dev JoãoMelo</p>
  </a>

</div>



 </Containder>
  );
}

export default App;
