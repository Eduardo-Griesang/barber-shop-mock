"use client"
import Link from "next/link";
import ContactComponent from "./ContactComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

export default function Contact () {

    const contactRef = useRef()
    const contactInView = useInView(contactRef, {once:true})
    const contactAnimate = useAnimation()

    useEffect(() => {
        if(contactInView){
            contactAnimate.start("visible")
        }
    },[contactInView])

    return (
        <section className="flex flex-col items-center text-center" ref={contactRef}>
            <ContactComponent titulo={"Nos siga nas redes sociais"} sobre={"Fique por dentro das ultimas novidades da equipe NINO"} timing={0.3}>
                <Link href={'#'}>Instagram</Link>
                <Link href={'#'}>Facebook</Link>
            </ContactComponent>

            <ContactComponent titulo={"Agende seu horário"} sobre={"Ficou interessado? Agende agora seu horário"} timing={0.6}>
                <Link href={'#'}>Quero agendar</Link>
            </ContactComponent>

            <motion.div className="mt-32 sm:mt-36 md:mt-40 flex flex-col gap-2 items-center px-1"
                variants={{
                    hidden: {y:100, opacity: 0},
                    visible: {y:0, opacity:1}
                }}
                initial= "hidden"
                transition= {{duration: 0.3, delay: 0.9}}
                animate= {contactAnimate}
            >
                <h2 className="md:text-2xl font-bold">Contato</h2>
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#000000",}} className="w-3" />
                    <span className="md:text-xl">R. Pastor Klein, 57 - União, Dois Irmãos - RS, 93950-000</span>
                </div>

                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faPhone} style={{color: "#000000",}} className="w-3" />
                    <span className="md:text-xl">Numero de telefone</span>
                </div>

                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} className="w-3" />
                    <span className="md:text-xl">email@gmail.com</span>
                </div>
            </motion.div>
        </section>
    )
}