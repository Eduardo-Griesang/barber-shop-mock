"use client"

import { useAnimation, useInView, motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function ContactComponent({ titulo, sobre, timing, children}) {

    const contactCompRef = useRef()
    const contactCompInView = useInView(contactCompRef, {once:true})
    const contactCompAnimate = useAnimation()

    useEffect(() => {
        if(contactCompInView){
            contactCompAnimate.start("visible")
        }
    },[contactCompInView])

    return(
        <div ref={contactCompRef}>
            <motion.section className="mt-32 sm:mt-36 md:mt-40 flex flex-col gap-2 items-center px-1"
                variants={{
                    hidden: {y:100, opacity: 0},
                    visible: {y:0, opacity:1}
                }}
                initial= "hidden"
                transition= {{duration: 0.3, delay: timing}}
                animate= {contactCompAnimate}
            >
                <h2 className="md:text-2xl font-bold">{titulo}</h2>
                <span className="md:text-xl">{sobre}</span>
                <div className="flex gap-10 text-red-600 md:text-xl">
                    {children}
                </div>
            </motion.section>
        </div>
    )
}