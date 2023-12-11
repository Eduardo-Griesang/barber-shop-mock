"use client"
import Servico from "./Servico";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

export default function Servicos () {

    const serv = [
        {
            titulo: "Corte tesoura",
            sobre: "Um corte completamente feito na tesoura e navalha no nuca.",
            preco: "A partir de 40 reais.",
            link: "Agende seu corte"
        },
        {
            titulo: "Corte maquina",
            sobre: "Um corte completamente feito na maquina e navalha no nuca.",
            preco: "A partir de 30 reais.",
            link: "Agende seu corte"
        },
        {
            titulo: "Undercut",
            sobre: "Um corte completamente feito na tesoura e navalha no nuca.",
            preco: "A partir de 50 reais.",
            link: "Agende seu corte"
        },
        {
            titulo: "Barba",
            sobre: "Aparamento e design de barba. ",
            preco: "A partir de 30 reais.",
            link: "Agende seu corte"
        },
        {
            titulo: "Sombrancelha",
            sobre: "Aparamento e design de sombrancelha. ",
            preco: "A partir de 25 reais.",
            link: "Agende seu corte"
        },
    ]

    const servTitleRef = useRef()
    const servTitleInView = useInView(servTitleRef, {once:true})
    const servTitleAnimate = useAnimation()

    useEffect(() => {
        if(servTitleInView){
            servTitleAnimate.start("visible")
        }
    },[servTitleInView])

    return (
        <section className="flex flex-col gap-10 sm:gap-16 2xl:gap-20 justify-center items-center" ref={servTitleRef}>    
            <motion.h2 className="text-4xl mt-32 sm:mt-36 md:mt-40"
                variants={{
                    hidden: {x:-100, opacity: 0},
                    visible: {x:0, opacity:1}
                }}
                initial= "hidden"
                transition= {{duration: 0.3}}
                animate= {servTitleAnimate}
            >
                Serviços
            </motion.h2>
            <section className="grid gap-5 pb-2 px-2 md:px-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 ">
                {serv.map((ser) => {
                    return (
                        <Servico
                            key={ser.titulo} 
                            titulo={ser.titulo} 
                            sobre={ser.sobre}
                            preco={ser.preco}
                            link={ser.preco}
                        />
                    )
                })}
            </section>
        </section>
    )
}