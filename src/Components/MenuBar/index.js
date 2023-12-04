"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function MenuBar() {

    const [display, setDisplay] = useState("hidden")
    const path = usePathname()

    function handleClick(){
        if (display === "hidden"){
            setDisplay('block')
        } else {
            setDisplay('hidden')
        }
    }

    return (
        <nav className="absolute w-screen flex justify-between px-5 sm:px-14 py-10 items-center z-10">
            <Image 
                src={'https://shedbarber.com/wp-content/uploads/2017/01/Page-1.svg'}
                width={120}
                height={120}
                alt="Mão segurando uma navalha" 
                className="w-24 "
            />

            <div className="md:hidden">
                <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} size="xl" className="w-6" onClick={handleClick} />

                <ul className={`h-screen w-screen absolute top-0 right-0 bg-black text-zinc-50 ${display}`}>
                    <div className="flex justify-between px-5 sm:px-14 py-10">
                        <div></div>
                        <FontAwesomeIcon icon={faBars} style={{color: "#FFFFFF",}} size="xl" className="w-6" onClick={handleClick} />
                    </div>
                    <nav className="flex flex-col items-end px-5 sm:px-14 text-2xl gap-3">
                        <li>
                            <Link href={'/'} className={path === '/' ? 'text-red-600' : ''}>Inicio</Link>
                        </li>
                        <li>
                            <Link href={'/sobre'} className={path === '/sobre' ? 'text-red-600' : ''}>Sobre</Link>
                        </li>
                        <li>
                            <Link href={'/servicos'} className={path === '/servicos' ? 'text-red-600' : ''}>Serviços</Link>
                        </li>
                        <li>
                            <Link href={'/contato'} className={path === '/contato' ? 'text-red-600' : ''}>Contato</Link>
                        </li>
                    </nav>
                </ul>
            </div>

            <ul className="hidden gap-6 text-3xl font-thin md:flex lg:gap-10 xl:gap-16 ">
                <li>
                    <Link href={'/'} className={path === '/' ? 'text-red-600' : ''}>Inicio</Link>
                </li>
                <li>
                    <Link href={'/sobre'} className={path === '/sobre' ? 'text-red-600' : ''}>Sobre</Link>
                </li>
                <li>
                    <Link href={'/servicos'} className={path === '/servicos' ? 'text-red-600' : ''}>Serviços</Link>
                </li>
                <li>
                    <Link href={'/contato'} className={path === '/contato' ? 'text-red-600' : ''}>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}