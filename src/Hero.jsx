import React from "react";
import Header from "./Header";

function Hero(){
    return(
        <>
          {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1571974096020-5c2775ac5d47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top bg-no-repeat"
>
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl text-rose-500 font-extrabold sm:text-5xl">
      Agbonou Kossiwa Anne Marie
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      J'aime l'informatique et le developpement web c'est ma passion
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Telecharger CV
        </a>

        <a
          className="block w-full rounded px-12 bg-red-50 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Engagez moi
        </a>
      </div>
    </div>
  </div>



</section>
        </>
    )
}
export default Hero