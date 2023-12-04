import Link from "next/link";

export default function Servicos () {
    return (
        <section className="flex flex-col gap-10 sm:gap-16 2xl:gap-20 justify-center items-center">    
            <h2 className="text-4xl mt-32 sm:mt-36 md:mt-40">
                Serviços
            </h2>
            <section className="grid gap-5 pb-2 px-2 md:px-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 ">
                <section className="flex flex-col bg-neutral-200 p-3 rounded-lg drop-shadow-lg">
                    <h3 className="md:text-2xl font-semibold">Corte tesoura</h3>
                    <p className="mt-1 md:mt-2 text-lg">Um corte completamente feito na tesoura e navalha no nuca. <span className="text-red-600">A partir de 40 reais</span></p>
                    <Link href={'#'} className="underline text-red-600">Agende seu corte</Link>
                </section>

                <section className="flex flex-col bg-neutral-200 p-3 rounded-lg drop-shadow-lg">
                    <h3 className="md:text-2xl font-semibold">Corte maquina</h3>
                    <p className="mt-1 md:mt-2 text-lg">Um corte completamente feito na maquina e navalha no nuca. <span className="text-red-600">A partir de 30 reais</span></p>
                    <Link href={'#'} className="underline text-red-600">Agende seu corte</Link>
                </section>

                <section className="flex flex-col bg-neutral-200 p-3 rounded-lg drop-shadow-lg">
                    <h3 className="md:text-2xl font-semibold">Undercut</h3>
                    <p className="mt-1 md:mt-2 text-lg">Um corte completamente feito na tesoura e navalha no nuca. <span className="text-red-600">A partir de 50 reais</span></p>
                    <Link href={'#'} className="underline text-red-600">Agende seu corte</Link>
                </section>

                <section className="flex flex-col bg-neutral-200 p-3 rounded-lg drop-shadow-lg">
                    <h3 className="md:text-2xl font-semibold">Barba</h3>
                    <p className="mt-1 md:mt-2 text-lg">Aparamento e design de barba <span className="text-red-600">A partir de 30 reais</span></p>
                    <Link href={'#'} className="underline text-red-600">Agende seu corte</Link>
                </section>

                <section className="flex flex-col bg-neutral-200 p-3 rounded-lg drop-shadow-lg">
                    <h3 className="md:text-2xl font-semibold">Sombrancelha</h3>
                    <p className="mt-1 md:mt-2 text-lg">Aparamento e design de sombrancelha <span className="text-red-600">A partir de 25 reais</span></p>
                    <Link href={'#'} className="underline text-red-600">Agende seu corte</Link>
                </section>
            </section>
        </section>
    )
}