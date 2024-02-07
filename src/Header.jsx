import React from "react";

function Header(params) {
    return(
        <>
            <header className="">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                    <h1 className="block font-extrabold text-rose-700"><strong >AKAM_CV </strong></h1>
                    
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                            <a className="text-rose-500 hover:text-rose-300" href="/"> <strong>Accueil</strong> </a>
                            </li>

                            <li>
                            <a className="text-rose-500 hover:text-rose-700" href="/"> Apropos </a>
                            </li>

                            <li>
                            <a className="text-rose-500 hover:text-rose-700" href="/"> Parcours </a>
                            </li>

                            <li>
                            <a className="text-rose-500 hover:text-rose-700" href="/"> Experiences </a>
                            </li>

                            <li>
                            <a className="text-rose-500 hover:text-rose-700" href="/"> Competences </a>
                            </li>

                            <li>
                            <a className="text-rose-500 hover:text-rose-700" href="/"> Projets </a>
                            </li>

                            <li>
                            <a className="text-rose-500 hover:text-rose-700" href="/"> Contact </a>
                            </li>
                        </ul>
                        </nav>

                    </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header