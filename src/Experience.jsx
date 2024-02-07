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
                            src="https://uvci.edu.ci/portail/images/articles/large/23fbac3fe335dd6076f18f08ee015e5a.jpg"
                            className="h-56 w-full object-cover"
                        />

                        <div className="bg-white p-4 sm:p-6">

                            <a href="https://uvci.edu.ci/portail/Medias/actu_details/en/661/quinzaine-du-numerique-educatif-finale-de-la-4e-edition-du-concours-geni#">
                            <h3 className="mt-0.5 text-lg text-gray-900">UVCI Concours Génie</h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Dans l’optique de susciter la créativité, de révéler le talent des apprenants et de les outiller pour le monde de l’emploi, l’UVCI décide d’initier ses apprenants à la compétitivité. D’où l’instauration du concours Les Génies de l’Education Numérique Ivoirienne (GENI). Le concours GENI est une compétition qui vise un objectif pédagogique. Il offre l’opportunité à ses lauréats et à tout porteur de projets innovants, de bénéficier de l’accompagnement des services à la création d’emploi de l’UVCI. Il s’agit du VOISINAGE qui compte l'incubateur de start up et le laboratoire de fabrication (Fablab) de l’UVCI. Tout un dispositif, afin de rendre opérationnel leur projet.
                            </p>
                        </div>
                        </article>
                        <article className="overflow-hidden mt-12 rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://nan.ci/img/ap1.249640c0.jpeg"
                            className="h-56 w-full object-cover"
                        />

                        <div className="bg-white p-4 sm:p-6">

                            <a href="https://nan.ci/">
                            <h3 className="mt-0.5 text-lg text-gray-900">NaN Digital Academy</h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            NaN est une école,une académie de formation aux métiers de développeur web, développeur Mobile, Reseaux-voix et Makerting Digital L’école met l’accent sur les projets et le travail de groupe plutôt que sur l’enseignement théorique.Un concentré de nouveautés pédagogiques pour permettre aux talents de demain de se révéler.
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