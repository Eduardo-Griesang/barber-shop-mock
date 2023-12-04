import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Contact () {
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="mt-44 flex flex-col gap-2 items-center">
                <h2 className="text-2xl font-bold">Nos siga nas redes sociais</h2>
                <span className="text-xl">Fique por dentro das ultimas novidades da equipe Nino</span>
                <div className="flex gap-10 text-red-600 text-xl">
                    <Link href={'#'}>Instagram</Link>
                    <Link href={'#'}>Facebook</Link>
                </div>
            </div>

            <div className="mt-44 flex flex-col gap-2 items-center">
                <h2 className="text-2xl font-bold">Agende seu horário</h2>
                <span className="text-xl">Ficou interessado? Agende agora seu horário</span>
                <div className="flex gap-10 text-red-600 text-xl">
                    <Link href={'#'}>Quero agendar</Link>
                </div>
            </div>

            <div className="mt-44 flex flex-col gap-2 items-center">
                <h2 className="text-2xl font-bold">Contato</h2>
                <div className="flex gap-2">
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#000000",}} className="w-3" />
                    <span className="text-xl">R. Pastor Klein, 57 - União, Dois Irmãos - RS, 93950-000</span>
                </div>

                <div className="flex gap-2">
                    <FontAwesomeIcon icon={faPhone} style={{color: "#000000",}} className="w-3" />
                    <span className="text-xl">Numero de telefone</span>
                </div>

                <div className="flex gap-2">
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} className="w-3" />
                    <span className="text-xl">email@gmail.com</span>
                </div>
            </div>
        </section>
    )
}