import Image from "next/image";
import barba from "../../../public/assets/images/barba.jpg"
import mullet from "../../../public/assets/images/mullet.jpg"
import Title from "../Title";

export default function Banner () {
    return(
        <div className="grid grid-cols-2 h-screen">
            <div className="flex items-center justify-center">
                <Image 
                    src={mullet} 
                    width={900}
                    height={900}
                    alt="Mão segurando uma navalha" 
                    className="h-full w-full grayscale z-0"
                    loading="lazy"
                    placeholder="blur"
                />
            </div>
            
            <div className="flex items-center justify-center">
                <Image 
                    src={barba} 
                    width={900}
                    height={900}
                    alt="Mão segurando uma navalha"
                    className="w-1/2 grayscale z-0"
                    loading="lazy"
                    placeholder="blur"
                />
            </div>
            <Title />
        </div>
    )
}