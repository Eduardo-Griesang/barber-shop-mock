"use client"
import Image from "next/image";
import barba from "../../../public/assets/images/barba.png"
import mullet from "../../../public/assets/images/mullet.png"
import Title from "../Title";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Banner () {

    const imageRef = useRef()
    const imageInView = useInView(imageRef, {once:true})
    const imageAnimation = useAnimation()

    useEffect(() => {
        if(imageInView){
            imageAnimation.start("visible")
        }
    }, [imageInView])

    return(
        <div className="grid grid-cols-1 md:grid md:grid-cols-2 h-screen overflow-hidden" ref={imageRef}>
            <div className="flex items-center justify-center">
                <Image 
                    src={mullet} 
                    width={900}
                    height={900}
                    alt="Mão segurando uma navalha" 
                    className="h-full w-full grayscale z-0 object-cover"
                    placeholder="blur"
                />
            </div>

            <motion.div className="hidden md:flex md:flex-col items-center justify-center"
                variants={{
                    hidden: {y:100, opacity:0},
                    visible: {y:0, opacity:1}
                }}
                initial= "hidden"
                transition={{duration:0.3}}
                animate= {imageAnimation}
            >
                <Image 
                    src={barba} 
                    width={900}
                    height={900}
                    alt="Mão segurando uma navalha"
                    className="w-1/2 grayscale z-0 object-cover"
                    placeholder="blur"
                />
                <p>A melhor barbearia de Dois Irmãos</p>
            </motion.div>
            <Title />
        </div>
    )
}