import React from "react";
import Header from "./Header";

function Hero(){
    return(
        <>
            <section className="relative bg-[url(https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg)] bg-cover bg-center bg-no-repeat">
                <Header />
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                    Agbonou Kossiwa Anne Marie
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                    J'aime l'informatique et le developpement web c'est ma passion
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                        href="#"
                        className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                        Get Started
                        </a>

                        <a
                        href="#"
                        className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                        Learn More
                        </a>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero