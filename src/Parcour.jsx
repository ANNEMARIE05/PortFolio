import React from "react";

function Parcours() {
    return(
        <>
            <section className="">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Parcours
            </h2>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-10 lg:gap-8">
                    <div className="h-32 rounded-lg">
                        <article className="flex bg-white transition hover:shadow-xl">
                            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                <time
                                datetime="2022-10-10"
                                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                                >
                                <span>2021</span>
                                <span className="w-px flex-1 bg-gray-900/10"></span>
                                <span> 2020</span>
                                </time>
                            </div>
                            <div className="flex flex-1 flex-col justify-between">
                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                <a href="#">
                                    <h3 className="font-bold uppercase text-rose-600">
                                    Lycée Municipal de Koumassi
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                Bac D  
                                </p>
                                </div>

                            </div>
                        </article>
                    </div>
                    <div className="h-32 rounded-lg">
                        <article className="flex bg-white transition hover:shadow-xl">
                            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                <time
                                datetime="2022-10-10"
                                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                                >
                                <span>2022</span>
                                <span className="w-px flex-1 bg-gray-900/10"></span>
                                <span> 2021</span>
                                </time>
                            </div>
                            <div className="flex flex-1 flex-col justify-between">
                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                <a href="#">
                                    <h3 className="font-bold uppercase text-rose-600">
                                    Université Virtuelle de Côte d'Ivoire 
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                    Licence en developpement d'application e-service (DAS)
                                </p>
                                </div>

                            </div>
                        </article>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-10 lg:gap-8">
                    <div className="h-32 rounded-lg">
                        <article className="flex bg-white transition hover:shadow-xl">
                            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                <time
                                datetime="2022-10-10"
                                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                                >
                                <span>2023</span>
                                <span className="w-px flex-1 bg-gray-900/10"></span>
                                <span> 2022</span>
                                </time>
                            </div>
                            <div className="flex flex-1 flex-col justify-between">
                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                <a href="#">
                                    <h3 className="font-bold uppercase text-rose-600">
                                    Université Virtuelle de Côte d'Ivoire 
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                    Licence en developpement d'application e-service (DAS)
                                </p>
                                </div>

                            </div>
                        </article>
                    </div>
                    <div className="h-32 rounded-lg">
                        <article className="flex bg-white transition hover:shadow-xl">
                            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                <time
                                datetime="2022-10-10"
                                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                                >
                                <span>2024</span>
                                <span className="w-px flex-1 bg-gray-900/10"></span>
                                <span> 2023</span>
                                </time>
                            </div>
                            <div className="flex flex-1 flex-col justify-between">
                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                <a href="#">
                                    <h3 className="font-bold uppercase text-rose-600">
                                    Université Virtuelle de Côte d'Ivoire 
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                    Licence en developpement d'application e-service (DAS)
                                </p>
                                </div>

                            </div>
                        </article>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}
export default Parcours