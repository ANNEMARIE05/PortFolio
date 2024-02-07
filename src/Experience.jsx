import React from "react";

function Experience(){
    return(
        <>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Mes expériences
                    </h2>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                        <article className="overflow-hidden mt-12 rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://uvci.edu.ci/portail/Medias/actu_details/en/661/quinzaine-du-numerique-educatif-finale-de-la-4e-edition-du-concours-geni#"
                            className="h-56 w-full object-cover"
                        />

                        <div className="bg-white p-4 sm:p-6">

                            <a href="#">
                            <h3 className="mt-0.5 text-lg text-gray-900">UVCI Concours Génie</h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                            dignissimos. Molestias explicabo corporis voluptatem?
                            </p>
                        </div>
                        </article>
                        <article className="overflow-hidden mt-12 rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnan.ci%2Fparent&psig=AOvVaw1_hNSvTbdU07IfggCfsyiY&ust=1707426912321000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiSk8mFmoQDFQAAAAAdAAAAABAJ"
                            className="h-56 w-full object-cover"
                        />

                        <div className="bg-white p-4 sm:p-6">

                            <a href="https://nan.ci/">
                            <h3 className="mt-0.5 text-lg text-gray-900">NaN Digital Academy</h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                            dignissimos. Molestias explicabo corporis voluptatem?
                            </p>
                        </div>
                        </article>
                    </div>
                </div>
                
            </section>
        </>
    )
}
export default Experience