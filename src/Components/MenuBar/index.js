import Image from "next/image";
import Link from "next/link";

export default function MenuBar() {
    return (
        <div className="absolute w-screen flex justify-between px-14 py-10 items-center z-10">
            <Image 
                src={'https://shedbarber.com/wp-content/uploads/2017/01/Page-1.svg'}
                width={120}
                height={120}
                alt="Mão segurando uma navalha" 
            />
            <ul className="flex gap-16 text-3xl font-thin">
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
        </div>
    )
}