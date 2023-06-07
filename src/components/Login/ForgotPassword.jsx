import logo from '../../assets/LOGO.png'

function ForgotPassword() {

    return (
        <>
            <section className="xl:w-2/5 w-3/4 h-4/5 border-[3px] border-primary">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 backdrop-blur-lg ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-24 w-auto rounded-full bg-white"
                            src={logo}
                            alt="Chat Fantasy"
                        />
                        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-opaco">
                            RECUPERAR CLAVE
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-negro">
                                    Correo Electrónico
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 bg-opaco p-3 text-secondary shadow-sm ring-1 ring-inset ring-opaco placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-negro">
                                        Nueva Contraseña
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="block w-full rounded-md border-0 bg-opaco p-3 text-secondary shadow-sm ring-1 ring-inset ring-opaco placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-negro transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Restablecer Contraseña
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-negro">
                            ¿No estas Registrado todavia?{' '}
                            <a href="#" className="font-semibold leading-6 text-blanco hover:text-primary">
                                Crea tu cuenta aquí
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgotPassword