import Link from "next/link";

export default function About () {
    return (
        <section className="flex flex-col gap-24 justify-center items-center">    
            <p className="text-3xl mt-44 w-3/4">
                Nino Barbershop fica localizado no centro de Dois Irmãos - RS, R. Pastor Klein, 57 - União. Considerado por muitos a 
                melhor barbearia da região, os <Link href={"/servicos"}>serviços</Link> variam desde o tratamento tradicional até a moda
                mais recente. Aqui voce encontra um espaço de relaxamento e paz, venha tomar uma ótima bebida, ouvir boas músicas e deixar o
                cabelo na régua.
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.86539056470968!2d-51.086124288895654!3d-29.579076524593134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194790af938f69%3A0x1997abd62ed8986e!2sEst%C3%BAdio%20Lebhin!5e0!3m2!1sen!2sbr!4v1701715404820!5m2!1sen!2sbr" 
            width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full"></iframe>
        </section>
    )
}