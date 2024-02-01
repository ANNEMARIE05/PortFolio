import React from "react";

function Apropos(){
    return(

        <>
            <h2 className="text-center text-4xl mt-10 font-bold tracking-tight text-gray-900 sm:text-5xl">
                A Propos
            </h2>
            <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Je me nomme Agbonou Kossiwa Anne Marie 
                </h2>

                <p className="hidden text-gray-500 md:mt-4 md:block">
                Etudiante en licence 2 a l'unviversité virtuelle (UVCI) en developpement d'application et service (DAS) de côte d'Ivoire, je reside a Abidjan Koumassi (Côte d'Ivoire) , developpeur web . J'aime l'informatique et le developpement web c'est ma passion
                </p>

                <div className="mt-4 md:mt-8">
                    <a
                    href="#"
                    className="inline-block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-rose-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                    Get Started Today
                    </a>
                </div>
                </div>
            </div>

            <img
                alt="Violin"
                src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
            />
            </section>
        </>
    )
}
export default Apropos