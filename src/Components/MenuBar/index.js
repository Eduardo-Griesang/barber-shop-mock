import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function MenuBar() {
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
                <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} className="w-6" />
                <ul>

                </ul>
            </div>

            <ul className="hidden gap-6 text-3xl font-thin md:flex lg:gap-10 xl:gap-16 ">
                <li>
                    <Link href={'/'}>Inicio</Link>
                </li>
                <li>
                    <Link href={'/sobre'}>Sobre</Link>
                </li>
                <li>
                    <Link href={'/servicos'}>Serviços</Link>
                </li>
                <li>
                    <Link href={'/contato'}>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}