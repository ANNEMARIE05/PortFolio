import React from "react";

function Services(){
    return(
        <>
            <section>
            <h2 className="text-center text-4xl mt-10 font-bold tracking-tight text-gray-900 sm:text-5xl">
                Mes services
                </h2>
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                    <p className="mt-4 text-gray-600">
                    Etant passionné par l'informatique et tant que developpeur d'application voici les differents services que je pourrais mettre a vos disposition
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <a
                    className="block rounded-xl border border-rose-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-rose-200 focus:outline-none focus:ring"
                    href="/accountant"
                    >
                    <span className="inline-block rounded-lg bg-rose-50 p-3">
                        <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >    
                        <path d="M19.835,2H4.163C3.542,2,3.059,2.54,3.128,3.156l1.794,16.149c0.047,0.42,0.343,0.77,0.749,0.886l6.042,1.726	c0.187,0.053,0.385,0.053,0.572,0l6.042-1.726c0.406-0.116,0.702-0.466,0.749-0.886L20.87,3.156C20.939,2.54,20.456,2,19.835,2z M15.947,8H9.219l0.201,2.31l6.077-0.02c0.001,0,0.002,0,0.003,0c0.279,0,0.545,0.117,0.734,0.322	c0.19,0.206,0.285,0.482,0.262,0.761l-0.383,4.609c-0.034,0.416-0.323,0.767-0.726,0.88l-3.117,0.877	c-0.088,0.024-0.18,0.037-0.271,0.037c-0.094,0-0.188-0.013-0.277-0.039l-3.091-0.894c-0.394-0.114-0.678-0.455-0.718-0.862	l-0.079-0.798c-0.055-0.55,0.347-1.039,0.896-1.094c0.541-0.045,1.04,0.348,1.094,0.896l0.013,0.124l2.166,0.626l2.174-0.611	l0.235-2.832l-5.906,0.019c-0.001,0-0.002,0-0.003,0c-0.519,0-0.951-0.396-0.996-0.913L7.132,7.087	C7.107,6.808,7.201,6.531,7.391,6.324S7.848,6,8.128,6h7.819c0.553,0,1,0.448,1,1S16.5,8,15.947,8z"></path>
                        </svg>      
                    </span>

                    <span className="inline-block rounded-lg bg-rose-50 p-3">
                        <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M25.428,3.333C25.238,3.121,24.967,3,24.683,3H5.317C5.033,3,4.762,3.121,4.572,3.333c-0.19,0.212-0.28,0.495-0.249,0.777 l2.202,19.823c0.044,0.403,0.329,0.74,0.719,0.851l7.48,2.137c0.09,0.026,0.183,0.039,0.275,0.039s0.185-0.013,0.275-0.039 l7.48-2.137c0.39-0.111,0.674-0.448,0.719-0.851L25.676,4.11C25.708,3.828,25.618,3.545,25.428,3.333z M20.516,13.074l-0.446,7.285 l-5.038,1.647l-5.038-1.647l-0.191-3.484h2.55l0.064,1.584l2.615,0.887l2.615-0.887l0.191-2.85h-5.612l-0.127-2.534h5.867 l0.191-2.534H9.356L9.165,8.006h11.67L20.516,13.074z"></path>
                        </svg>  
                    </span>
                    <h2 className="mt-2 font-bold">HTML CSS</h2>
                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    </a>

                    <a
                    className="block rounded-xl border border-rose-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-rose-200 focus:outline-none focus:ring"
                    href="/accountant"
                    >
                    <span className="inline-block rounded-lg bg-rose-50 p-3">
                        <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M3.427,5.352C3.385,4.129,4.314,3,5.569,3h12.863c1.255,0,2.184,1.129,2.142,2.352c-0.04,1.176,0.012,2.698,0.385,3.94	C21.334,10.538,21.966,10.899,23,11v2c-1.034,0.101-1.666,0.462-2.04,1.707c-0.373,1.242-0.425,2.765-0.385,3.94	C20.616,19.871,19.687,21,18.432,21H5.569c-1.255,0-2.184-1.129-2.142-2.352c0.04-1.176-0.012-2.698-0.385-3.94	C2.667,13.462,2.034,13.101,1,13v-2c1.034-0.101,1.667-0.462,2.042-1.707C3.415,8.051,3.467,6.528,3.427,5.352z"></path><path fill="#fff" d="M8,17V7.033h4.135c0.907,0,1.684,0.245,2.243,0.708c0.579,0.479,0.885,1.149,0.885,1.939	c0,0.804-0.438,1.559-1.087,1.993c0.958,0.41,1.557,1.285,1.557,2.368c0,0.905-0.341,1.661-0.984,2.184	C14.121,16.732,13.225,17,12.154,17H8z M11.85,15.267c1.725,0,1.725-0.92,1.725-1.223c0-0.517-0.188-1.204-1.811-1.204h-1.639v2.427	H11.85z M11.466,11.093c0.762,0,1.671-0.194,1.671-1.12c0-0.679-0.457-1.022-1.359-1.022h-1.652v2.143H11.466z"></path>

                        </svg>
                    </span>
                    
                    <h2 className="mt-2 font-bold">Bootstrap</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    </a>

                    <a
                    className="block rounded-xl border border-rose-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-rose-200 focus:outline-none focus:ring"
                    href="/accountant"
                    >
                    <span className="inline-block rounded-lg bg-rose-50 p-3">
                        <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z" opacity=".35"></path><path d="M12.608,19c-0.762,0-1.221-0.348-1.49-0.722c-0.243-0.338-0.091-0.819,0.289-0.988l0,0c0.268-0.12,0.6-0.082,0.795,0.139	c0.078,0.089,0.185,0.155,0.332,0.155c0.366,0,0.505-0.259,0.505-0.958v-3.674c0-0.412,0.333-0.746,0.744-0.746h0	c0.411,0,0.744,0.334,0.744,0.746v3.805C14.526,17.471,14.374,19,12.608,19z"></path><path d="M18.714,13.193c-0.185,0.263-0.533,0.386-0.826,0.254c-0.124-0.056-0.271-0.096-0.437-0.096	c-0.168,0-0.655,0.065-0.655,0.686c0,1.055,2.227,0.778,2.227,2.801c0,1.166-0.724,2.162-2.068,2.162	c-0.548,0-0.978-0.147-1.32-0.342c-0.328-0.187-0.414-0.624-0.201-0.937l0.02-0.029c0.184-0.27,0.543-0.382,0.833-0.231	c0.17,0.089,0.379,0.158,0.622,0.158c0.546,0,0.646-0.463,0.646-0.675c0-1.104-2.199-0.72-2.199-2.843	c0-1.211,0.838-2.101,2.04-2.101c0.445,0,0.792,0.092,1.058,0.212C18.829,12.382,18.951,12.856,18.714,13.193L18.714,13.193z"></path>

                        </svg>
                    </span>

                    <h2 className="mt-2 font-bold">Javascript</h2>
                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    </a>

                    <a
                    className="block rounded-xl border border-rose-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-rose-200 focus:outline-none focus:ring"
                    href="/accountant"
                    >
                    <span className="inline-block rounded-lg bg-rose-50 p-3">
                        <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M 10.679688 4.1816406 C 10.068687 4.1816406 9.502 4.3184219 9 4.6074219 C 7.4311297 5.5132122 6.8339651 7.7205462 7.1503906 10.46875 C 4.6127006 11.568833 3 13.188667 3 15 C 3 16.811333 4.6127006 18.431167 7.1503906 19.53125 C 6.8341285 22.279346 7.4311297 24.486788 9 25.392578 C 9.501 25.681578 10.067687 25.818359 10.679688 25.818359 C 11.982314 25.818359 13.48785 25.164589 15 24.042969 C 16.512282 25.164589 18.01964 25.818359 19.322266 25.818359 C 19.933266 25.818359 20.499953 25.681578 21.001953 25.392578 C 22.570814 24.486793 23.167976 22.279432 22.851562 19.53125 C 25.388297 18.431178 27 16.81094 27 15 C 27 13.188667 25.387299 11.568833 22.849609 10.46875 C 23.165872 7.7206538 22.56887 5.5132122 21 4.6074219 C 20.499 4.3174219 19.932312 4.1816406 19.320312 4.1816406 C 18.017686 4.1816406 16.51215 4.8354109 15 5.9570312 C 13.487763 4.8354109 11.981863 4.1816406 10.679688 4.1816406 z M 10.679688 5.9316406 C 11.461321 5.9316406 12.49496 6.3472486 13.617188 7.1171875 C 12.95737 7.7398717 12.311153 8.4479321 11.689453 9.2363281 C 10.681079 9.3809166 9.7303472 9.5916908 8.8496094 9.8554688 C 8.8448793 9.7943902 8.8336776 9.7303008 8.8300781 9.6699219 C 8.7230781 7.8899219 9.114 6.5630469 9.875 6.1230469 C 10.1 5.9930469 10.362688 5.9316406 10.679688 5.9316406 z M 19.320312 5.9316406 C 19.636312 5.9316406 19.9 5.9930469 20.125 6.1230469 C 20.886 6.5620469 21.276922 7.8899219 21.169922 9.6699219 C 21.166295 9.7303008 21.155145 9.7943902 21.150391 9.8554688 C 20.2691 9.5915252 19.317669 9.3809265 18.308594 9.2363281 C 17.686902 8.4480417 17.042616 7.7397993 16.382812 7.1171875 C 17.504962 6.3473772 18.539083 5.9316406 19.320312 5.9316406 z M 15 8.2285156 C 15.27108 8.4752506 15.540266 8.7360345 15.8125 9.0214844 C 15.542718 9.012422 15.274373 9 15 9 C 14.726286 9 14.458598 9.0124652 14.189453 9.0214844 C 14.461446 8.7363308 14.729174 8.4750167 15 8.2285156 z M 15 10.75 C 15.828688 10.75 16.614128 10.796321 17.359375 10.876953 C 17.813861 11.494697 18.261774 12.147811 18.681641 12.875 C 19.084074 13.572033 19.439938 14.285488 19.753906 15 C 19.439896 15.714942 19.084316 16.429502 18.681641 17.126953 C 18.263078 17.852044 17.816279 18.500949 17.363281 19.117188 C 16.591711 19.201607 15.800219 19.25 15 19.25 C 14.171312 19.25 13.385872 19.203679 12.640625 19.123047 C 12.186139 18.505303 11.738226 17.854142 11.318359 17.126953 C 10.915684 16.429502 10.560194 15.714942 10.246094 15 C 10.559972 14.285488 10.915926 13.572033 11.318359 12.875 C 11.737083 12.149909 12.183612 11.499051 12.636719 10.882812 C 13.408289 10.798393 14.199781 10.75 15 10.75 z M 19.746094 11.291016 C 20.142841 11.386804 20.524253 11.490209 20.882812 11.605469 C 20.801579 11.97252 20.702235 12.346608 20.589844 12.724609 C 20.461164 12.483141 20.336375 12.240903 20.197266 12 C 20.054139 11.752196 19.895244 11.529558 19.746094 11.291016 z M 10.251953 11.292969 C 10.103305 11.530776 9.9454023 11.752991 9.8027344 12 C 9.6636666 12.240944 9.5387971 12.483106 9.4101562 12.724609 C 9.29751 12.345829 9.1965499 11.971295 9.1152344 11.603516 C 9.4803698 11.48815 9.86083 11.385986 10.251953 11.292969 z M 7.46875 12.246094 C 7.6794464 13.135714 7.9717297 14.057918 8.3476562 14.998047 C 7.9725263 15.935943 7.6814729 16.856453 7.4707031 17.744141 C 5.7292327 16.903203 4.75 15.856373 4.75 15 C 4.75 14.121 5.701875 13.119266 7.296875 12.322266 C 7.3513169 12.295031 7.4131225 12.272692 7.46875 12.246094 z M 22.529297 12.255859 C 24.270767 13.096797 25.25 14.143627 25.25 15 C 25.25 15.879 24.298125 16.880734 22.703125 17.677734 C 22.648683 17.704969 22.586877 17.727308 22.53125 17.753906 C 22.32043 16.863764 22.030541 15.940699 21.654297 15 C 22.028977 14.062913 22.318703 13.142804 22.529297 12.255859 z M 15 13 C 13.895 13 13 13.895 13 15 C 13 16.105 13.895 17 15 17 C 16.105 17 17 16.105 17 15 C 17 13.895 16.105 13 15 13 z M 9.4101562 17.275391 C 9.5388794 17.516948 9.6655262 17.759008 9.8046875 18 C 9.9476585 18.247625 10.104915 18.470608 10.253906 18.708984 C 9.857159 18.613196 9.4757466 18.509791 9.1171875 18.394531 C 9.1984813 18.02725 9.2976676 17.653633 9.4101562 17.275391 z M 20.589844 17.277344 C 20.702364 17.655759 20.803517 18.02905 20.884766 18.396484 C 20.51963 18.51185 20.13917 18.614014 19.748047 18.707031 C 19.896695 18.469224 20.054598 18.247009 20.197266 18 C 20.336044 17.759557 20.461449 17.518344 20.589844 17.277344 z M 8.8496094 20.144531 C 9.7309004 20.408475 10.682331 20.619073 11.691406 20.763672 C 12.313288 21.552345 12.957085 22.261935 13.617188 22.884766 C 12.495042 23.654481 11.461272 24.070312 10.679688 24.070312 C 10.363687 24.070312 10.1 24.006953 9.875 23.876953 C 9.114 23.437953 8.7230781 22.112031 8.8300781 20.332031 C 8.8337424 20.271023 8.8447938 20.206253 8.8496094 20.144531 z M 21.150391 20.144531 C 21.155182 20.206253 21.166285 20.271023 21.169922 20.332031 C 21.276922 22.112031 20.886 23.436953 20.125 23.876953 C 19.9 24.006953 19.637312 24.070313 19.320312 24.070312 C 18.538728 24.070312 17.504958 23.654609 16.382812 22.884766 C 17.042964 22.261863 17.688542 21.552454 18.310547 20.763672 C 19.318921 20.619083 20.269653 20.408309 21.150391 20.144531 z M 14.1875 20.978516 C 14.457282 20.987578 14.725627 21 15 21 C 15.274373 21 15.542718 20.987578 15.8125 20.978516 C 15.540266 21.263964 15.27108 21.524765 15 21.771484 C 14.72892 21.524749 14.459734 21.263966 14.1875 20.978516 z"></path>

                        </svg>
                    </span>
                    <h2 className="mt-2 font-bold">React js</h2>
                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    </a>

                    <a
                    className="block rounded-xl border border-rose-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-rose-200 focus:outline-none focus:ring"
                    href="/accountant"
                    >
                    <span className="inline-block rounded-lg bg-rose-50 p-3">
                        <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M 11.033203 3.21875 C 10.958186 3.2164238 10.882062 3.2227813 10.804688 3.2382812 L 2.8046875 4.8398438 C 2.3366875 4.9338437 2 5.3433125 2 5.8203125 L 2 18.179688 C 2 18.656688 2.3366875 19.066156 2.8046875 19.160156 L 10.804688 20.761719 C 11.423687 20.885719 12 20.410297 12 19.779297 L 12 4.2207031 C 12 3.6685781 11.558326 3.2350332 11.033203 3.21875 z M 14 5 L 14 7 L 16 7 L 18 7 L 20 7 L 20 9 L 20 11 L 20 13 L 20 15 L 20 17 L 18 17 L 16 17 L 14 17 L 14 19 L 21 19 C 21.552 19 22 18.552 22 18 L 22 6 C 22 5.448 21.552 5 21 5 L 14 5 z M 4.7441406 8 L 7.0625 8 C 7.9585 8 8.6692656 8.2322656 9.1972656 8.6972656 C 9.7252656 9.1632656 9.9882812 9.780875 9.9882812 10.546875 C 9.9882812 11.331875 9.7318438 11.941906 9.2148438 12.378906 C 8.6988437 12.815906 7.9749219 13.033203 7.0449219 13.033203 L 5.5 13.033203 L 5.5 15.244141 C 5.5 15.661141 5.1611406 16 4.7441406 16 C 4.3271406 16 3.9902344 15.661141 3.9902344 15.244141 L 3.9902344 8.7558594 C 3.9892344 8.3388594 4.3261406 8 4.7441406 8 z M 16 8 C 14.895 8 14 8.895 14 10 C 14 11.105 14.895 12 16 12 C 17.105 12 18 11.105 18 10 L 16 10 L 16 8 z M 5.5 9.1875 L 5.5 11.736328 L 6.96875 11.736328 C 7.43575 11.736328 7.7911094 11.629969 8.0371094 11.417969 C 8.2831094 11.205969 8.40625 10.899047 8.40625 10.498047 C 8.40625 10.103047 8.28125 9.7887344 8.03125 9.5527344 C 7.78325 9.3157344 7.4418594 9.1935 7.0058594 9.1875 L 5.5 9.1875 z M 15 13 A 1.0001 1.0001 0 1 0 15 15 L 17 15 A 1.0001 1.0001 0 1 0 17 13 L 15 13 z"></path>
                        </svg>
                    </span>

                    <h2 className="mt-2 font-bold">Power point</h2>
                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    </a>

                    <a
                    className="block rounded-xl border border-rose-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-rose-200 focus:outline-none focus:ring"
                    href="/accountant"
                    >
                    <span className="inline-block rounded-lg bg-rose-50 p-3">
                        <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M23.395 7.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.183-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C16.214 5.688 14.018 4 11 4 8.586 4 7.346 5.239 5.293 7.293 4.902 7.684 4.899 8.32 5.29 8.71 5.67 9.092 6.28 9.104 6.672 8.74c.01-.009.02-.019.03-.028.552-.426 4.03-.012 5.55 1.196C14.511 11.703 16.142 13 18 13c2.659 0 4.879-1.741 5.94-4.658C24.121 7.844 23.882 7.291 23.395 7.081zM18.395 14.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.18-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C11.214 12.688 9.018 11 6 11c-2.414 0-3.654 1.239-5.707 3.293-.391.391-.394 1.027-.003 1.417.38.382.991.395 1.383.03.01-.009.02-.019.03-.028.551-.426 4.031-.012 5.55 1.196C9.511 18.703 11.142 20 13 20c2.659 0 4.879-1.741 5.94-4.658C19.121 14.844 18.882 14.291 18.395 14.081z"></path>

                        </svg>
                    </span>

                    <h2 className="mt-2 font-bold">TailwindCss</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    </a>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}
export default Services