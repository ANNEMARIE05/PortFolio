import React from "react";

function Projets(){
    return(
        <>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Mes projets
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                                alt="Office"
                                src="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                                <div className="p-4 sm:p-6">

                                <a href="https://todoapp-2tfe.onrender.com/">
                                    <h3 className="mt-0.5 text-lg text-white">TodoApp</h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                 TodoApp est une application qui vous permettras de lister vos tâches, de la journée, de la semaine etc... Soyez les bienvenue et profiter au maximum de nos services
                                </p>
                                </div>
                            </div>
                            </article>
                        </div>
                    </blockquote>

                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                                alt="Office"
                                src="https://plus.unsplash.com/premium_photo-1678344165196-261064eb31e7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                                <div className="p-4 sm:p-6">

                                <a href="https://annemarie05.github.io/AgriKAAM/">
                                    <h3 className="mt-0.5 text-lg text-white">AgriKAAM</h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                AgriKAAM est une societe qui recrute
                                des travailleurs pour la gestion des
                                champs. Née en 2023 notre but est de
                                pouvoir gérer facilement un ensemble
                                de travailleurs et de tache ainsi que
                                des sommes a payer au travailleur plus
                                facilement a travers notre application
                                </p>
                                </div>
                            </div>
                            </article>
                        </div>
                    </blockquote>

                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                                alt="Office"
                                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                                <div className="p-4 sm:p-6">

                                <a href="https://frontend-hoqz.onrender.com">
                                    <h3 className="mt-0.5 text-lg text-white">Mondi</h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                Mondi est un application permettant aux amoureux du tourisme de se divertir avec l'aide de nos guides touristique
                                </p>
                                </div>
                                
                            </div>
                            </article>
                        </div>
                    </blockquote>
                    </div>
                    <div>
                    </div>
                    <div className="text-center mt-5">
                        <a
                        className="inline-block rounded-full border border-rose-600 bg-rose-600 p-3 text-white hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-rose-500"
                        href="https://github.com/ANNEMARIE05?tab=repositories"
                        >
                        <span className="sr-only"> Download </span>

                        <svg
                            className="h-5 w-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                        </a>
                    </div>
                </div>
                
            </section>
        </>
    )
}
export default Projets