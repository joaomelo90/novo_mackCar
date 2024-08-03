import React, { useEffect } from "react";
import { Link } from 'react-scroll';
import Gif from '../../assets/3dgifmaker86514.gif';

export function Menu() {
    useEffect(() => {
        const menuMobile = document.getElementById("menu");
        const openButton = document.getElementById('open-menu-btn');

        function openMenu() {
            if (menuMobile) {
                menuMobile.classList.remove("hidden");
                menuMobile.classList.add("flex");
            } else {
                console.error('Elemento menu não encontrado');
            }
        }

        function closeMenu() {
            if (menuMobile) {
                menuMobile.classList.remove("flex");
                menuMobile.classList.add("hidden");
            } else {
                console.error('Elemento menu não encontrado');
            }
        }

        if (openButton) {
            openButton.addEventListener('click', openMenu);
        }

        return () => {
            if (openButton) {
                openButton.removeEventListener('click', openMenu);
            }
        };
    }, []);

    return (
        <div className="h-10 bg-zinc-200  fixed w-full z-50">

               <div className="flex items-center fixed">
                        <img src={Gif} alt="logo" className="w-10 h-auto top-0 mt-0 opacity-70" />
                        <p className="h-12 decoration-none flex items-center decoration-black whitespace-nowrap font-bold text-xl">
                            Oficina <span className="text-vermelho">Mack Car</span>
                        </p>
                    </div>
            <nav className="bg-zinc-200 shadow-nav3 z-50">
              
                <ul id="menu" className="list-none hidden flex-col items-start top-0 right-0 h-screen w-64 z-50 bg-cinzaOpacity shadow-navSidebar backdrop-blur-[10px] fixed">
               
                    <li className="h-12 w-full flex justify-end">
                        <svg onClick={() => {
                            const menuMobile = document.getElementById("menu");
                            if (menuMobile) {
                                menuMobile.classList.remove("flex");
                                menuMobile.classList.add("hidden");
                            }
                        }}
                            className="font-bold bg-vermelho mt-5"
                            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                    </li>
                    <li className="h-12 w-full">
                        <Link activeClass="active" to="inicio" spy={true} smooth={true} offset={-70} duration={500}
                            className="h-12 w-full px-8 decoration-none flex items-center decoration-black hover:bg-zinc-300 font-bold text-2xl cursor-pointer">
                            Inicio
                        </Link>
                    </li>
                    <li className="h-12 w-full">
                        <Link activeClass="active" to="servicos" spy={true} smooth={true} offset={-70} duration={500}
                            className="h-12 w-full px-8 decoration-none flex items-center decoration-black hover:bg-zinc-300 font-bold text-2xl cursor-pointer">
                            Serviços
                        </Link>
                    </li>
                    <li className="h-12 w-full">
                        <Link activeClass="active" to="somos" spy={true} smooth={true} offset={-70} duration={500}
                            className="h-12 w-full px-8 decoration-none flex items-center decoration-black hover:bg-zinc-300 font-bold whitespace-nowrap text-2xl cursor-pointer">
                            Quem somos
                        </Link>
                    </li>
                    <li className="h-12 w-full">
                        <Link activeClass="active" to="endereco" spy={true} smooth={true} offset={-70} duration={500}
                            className="h-12 w-full px-8 decoration-none flex items-center decoration-black hover:bg-zinc-300 font-bold text-2xl cursor-pointer">
                            Endereço
                        </Link>
                    </li>
                    <li className="h-12 w-full">
                        <Link activeClass="active" to="contatos" spy={true} smooth={true} offset={-70} duration={500}
                            className="h-12 w-full px-8 decoration-none flex items-center decoration-black hover:bg-zinc-300 font-bold text-2xl cursor-pointer">
                            Contatos
                        </Link>
                    </li>
                 
                </ul>
            </nav>
            <nav className="bg-zinc-200 shadow-nav3 hidden sm:flex w-full h-10 fixed z-50">
                <ul className="hidden sm:flex w-full list-none justify-start items-center">
                    <img src={Gif} alt="logo" className="w-20 h-20 top-0 mt-0 opacity-70 flex" />
                    <p className="h-12 px-10 decoration-none flex items-center decoration-black whitespace-nowrap font-bold">
                        Oficina Mecânica <span className="text-vermelho"> Mack Car</span>
                    </p>
                    <li className="h-12">
                        <Link activeClass="active" to="inicio" spy={true} smooth={true} offset={-70} duration={500}
                            className="h-12 px-8 decoration-none flex items-center decoration-black hover:bg-zinc-300 hover:text-xl cursor-pointer">
                            Inicio
                        </Link>
                    </li>
                    <li className="h-12">
                        <Link activeClass="active" to="servicos" spy={true} smooth={true} offset={-70} duration={500}
                            className="h-12 px-8 decoration-none flex items-center decoration-black hover:bg-zinc-300 hover:text-xl cursor-pointer">
                            Serviços
                        </Link>
                    </li>
                    <li className="h-12">
                        <Link activeClass="active" to="somos" spy={true} smooth={true} offset={-70} duration={500}
                            className="h-12 px-8 decoration-none flex items-center decoration-black hover:bg-zinc-300 whitespace-nowrap hover:text-xl cursor-pointer">
                            Quem somos
                        </Link>
                    </li>
                    <li className="h-12">
                        <Link activeClass="active" to="contatos" spy={true} smooth={true} offset={-70} duration={500}
                            className="h-12 px-8 decoration-none flex items-center decoration-black hover:bg-zinc-300 hover:text-xl cursor-pointer">
                            Contatos
                        </Link>
                    </li>
                </ul>
            </nav>
            <button id="open-menu-btn" className="sm:hidden flex px-4 py-2 z-50 justify-end items-end w-full">
                <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="black">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </button>
        </div>
    );
}

export default Menu;




