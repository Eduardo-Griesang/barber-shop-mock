"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Satisfaction() {

    const [ color1, setColor1 ] = useState("#000000")
    const [ color2, setColor2 ] = useState("#000000")
    const [ color3, setColor3 ] = useState("#000000")
    const [ color4, setColor4 ] = useState("#000000")
    const [ color5, setColor5 ] = useState("#000000")
    const [ display, setDisplay ] = useState("hidden")


    function handleOver(e) {
        if( e === 1 ){
            setColor1("#fff700")
        } else if (e === 2) { 
            setColor1("#fff700")
            setColor2("#fff700")
        } else if (e === 3) { 
            setColor1("#fff700")
            setColor2("#fff700")
            setColor3("#fff700")
        } else if (e === 4) { 
            setColor1("#fff700")
            setColor2("#fff700")
            setColor3("#fff700")
            setColor4("#fff700")
        } else if (e === 5) { 
            setColor1("#fff700")
            setColor2("#fff700")
            setColor3("#fff700")
            setColor4("#fff700")
            setColor5("#fff700")
        }
    }

    function handleLeave() {
        setColor1("#000000")
        setColor2("#000000")
        setColor3("#000000")
        setColor4("#000000")
        setColor5("#000000")
    }

    function handleClick(id) {
        if( id >= 4 ) {
            console.log("link do google")
        } else {
            setDisplay("flex")
        }
    }

    return (
        <main className="flex flex-col gap-10 sm:gap-16 2xl:gap-20 justify-center items-center text-center">
            <h2 className="text-4xl mt-32 sm:mt-36 md:mt-40">Pesquisa de satisfação</h2>
            <div className="grid grid-cols-1 gap-10 mt-10 bg-neutral-200 mx-2 py-14 px-5 rounded-lg sm:px-10 lg:5/6">
                <span className="text-lg sm:text-xl">Como você avaliaria sua última visita a nossa barbearia?</span>
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <FontAwesomeIcon icon={faStar} 
                        style={{color: color1,}} 
                        size="2xl" 
                        onMouseOver={() => handleOver(1)} 
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick(1)} 
                        className="cursor-pointer" 
                    />
                    <FontAwesomeIcon icon={faStar} 
                        style={{color: color2,}} 
                        size="2xl" 
                        onMouseOver={() => handleOver(2)} 
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick(2)} 
                        className="cursor-pointer" 
                    />
                    <FontAwesomeIcon icon={faStar} 
                        style={{color: color3,}} 
                        size="2xl" 
                        onMouseOver={() => handleOver(3)} 
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick(3)} 
                        className="cursor-pointer" 
                    />
                    <FontAwesomeIcon icon={faStar} 
                        style={{color: color4,}} 
                        size="2xl" 
                        onMouseOver={() => handleOver(4)} 
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick(4)} 
                        className="cursor-pointer" 
                    />
                    <FontAwesomeIcon icon={faStar} 
                        style={{color: color5,}} 
                        size="2xl" 
                        onMouseOver={() => handleOver(5)} 
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick(5)} 
                        className="cursor-pointer" 
                    />
                </div>

                <form className={`mt-10 flex-col gap-2 items-center ${display}`}>
                    <label className="md:text-xl">Como podemos melhorar nossos serviços?</label>
                    <textarea placeholder="Nos conte o que pode melhorar" type="text" cols="30" rows="3" required className="rounded-lg p-1 w-full" />
                    <button className="bg-red-600 rounded-lg w-1/2 text-zinc-50 mt-2 text-lg sm:text-xl sm:w-1/3">Enviar</button>
                </form>
            </div>
        </main>
    )
}