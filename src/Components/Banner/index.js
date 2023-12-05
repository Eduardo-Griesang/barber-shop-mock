import Image from "next/image";
import barba from "../../../public/assets/images/barba.avif"
import mullet from "../../../public/assets/images/mullet.avif"
import Title from "../Title";

export default function Banner () {
    return(
        <div className="grid grid-cols-1 md:grid md:grid-cols-2 h-screen">
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

            <div className="hidden md:flex md:flex-col items-center justify-center">
                <Image 
                    src={barba} 
                    width={900}
                    height={900}
                    alt="Mão segurando uma navalha"
                    className="w-1/2 grayscale z-0 object-cover"
                    placeholder="blur"
                />
                <p>A melhor barbearia de Dois Irmãos</p>
            </div>
            <Title />
        </div>
    )
}