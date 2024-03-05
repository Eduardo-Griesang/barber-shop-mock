"use client"
import { useAnimation, useInView, motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Title () {

    const titleRef = useRef()
    const titleInView = useInView(titleRef, {once:true})
    const titleAnimation = useAnimation()

    useEffect(() => {
        if(titleInView){
            titleAnimation.start("visible")
        }
    }, [titleInView])

    return (
        <motion.section className="absolute w-screen h-screen flex flex-col justify-center items-center text-red-600" ref={titleRef}
            variants={{
                hidden: {x:-100, opacity:0},
                visible: {x:0, opacity:1}
            }}
            initial= "hidden"
            transition={{duration:0.3}}
            animate= {titleAnimation}
        >
            <h1 className="text-9xl leading-[5rem] sm:text-10xl sm:leading-[10rem] font-black ">
                NINO
            </h1>
            <span className="text-xl pt-3 md:pt-5">Barbershop</span>
        </motion.section>
    )
}