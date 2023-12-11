"use client"
import Link from "next/link";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Servico({ titulo, sobre, preco, link }) {

    const servicoRef = useRef()
    const servicoInView = useInView(servicoRef, {once:true})
    const servicoAnimate = useAnimation()

    useEffect(() => {
        if(servicoInView){
            servicoAnimate.start("visible")
        }
    },[servicoInView])

    return(
        <div ref={servicoRef}>
            <motion.section className="flex flex-col bg-neutral-200 p-3 rounded-lg drop-shadow-lg"
                variants={{
                    hidden: {y:100, opacity: 0},
                    visible: {y:0, opacity:1}
                }}
                initial= "hidden"
                transition= {{duration: 0.3}}
                animate= {servicoAnimate}
            >
                <h3 className="md:text-2xl font-semibold">{titulo}</h3>
                <p className="mt-1 md:mt-2 text-lg">{sobre}<span className="text-red-600">{preco}</span></p>
                <Link href={'#'} className="underline text-red-600">{link}</Link>
            </motion.section>
        </div>
    )
}