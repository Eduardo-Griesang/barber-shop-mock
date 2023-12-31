"use client"
import Link from "next/link";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function About () {

    const textRef = useRef()
    const textInView = useInView(textRef, {once:true})
    const textAnimation = useAnimation()

    useEffect(() => {
        if(textInView){
            textAnimation.start("visible")
        }
    }, [textInView])

    return (
        <section className="flex flex-col gap-10 sm:gap-16 2xl:gap-20 justify-center items-center" ref={textRef}>    
            <motion.p className="mt-32 text-lg w-5/6 sm:text-xl sm:mt-36 md:mt-40 lg:w-3/4 lg:text-2xl 2xl:text-3xl"
                variants={{
                    hidden: {x:-100, opacity:0},
                    visible: {x:0, opacity:1}
                }}
                initial= "hidden"
                transition={{duration:0.3}}
                animate= {textAnimation}
            >
                NINO Barbershop fica localizado no centro de Dois Irmãos - RS, R. Pastor Klein, 57 - União. Considerado por muitos a 
                melhor barbearia da região, os <Link href={"/servicos"}>serviços</Link> variam desde o tratamento tradicional até a moda
                mais recente. Aqui voce encontra um espaço de relaxamento e paz, venha tomar uma ótima bebida, ouvir boas músicas e deixar o
                cabelo na régua.
            </motion.p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.86539056470968!2d-51.086124288895654!3d-29.579076524593134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194790af938f69%3A0x1997abd62ed8986e!2sEst%C3%BAdio%20Lebhin!5e0!3m2!1sen!2sbr!4v1701715404820!5m2!1sen!2sbr" 
            width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full"></iframe>
        </section>
    )
}