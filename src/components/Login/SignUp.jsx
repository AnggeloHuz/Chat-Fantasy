import logo from '../../assets/LOGO.png'
import { Link } from "react-router-dom";
import { Contexto } from "../../context/Contexto";
import { useContext, useState } from "react";

function SignUp() {

    const { RegistrarUsuario } = useContext(Contexto)

    const [correo, setCorreo] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    function OrdenarUsuario(correo, usuario, password) {

        const Usuario = {
            correo, usuario, password
        }

        RegistrarUsuario(Usuario)
    }

    const mensajeError = validacion(correo, usuario, password)

    function validacion(correo, usuario, password) {
        if (correo.trim().length == 0) return "Error"
        if (usuario.trim().length == 0) return "Error"
        if (password.trim().length == 0) return "Error"

        return
    }

    return (
        <>
            <main className="min-h-[100vh] h-auto w-full bg-Login bg-cover bg-no-repeat bg-center flex justify-center items-center">
                <section className="xl:w-2/5 w-3/4 h-auto border-[3px] border-primary">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 backdrop-blur-lg ">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-24 w-auto rounded-full bg-white"
                                src={logo}
                                alt="Chat Fantasy"
                            />
                            <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-blanco">
                                REGISTRATE
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6"
                                onSubmit={e => {
                                    e.preventDefault();
                                    setCorreo('');
                                    setUsuario('');
                                    setPassword('');

                                    OrdenarUsuario(correo, usuario, password)
                                }}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold leading-6 text-negro">
                                        Correo Electrónico
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={correo}
                                            onChange={e => { setCorreo(e.target.value) }}
                                            required
                                            className="block w-full rounded-md border-0 bg-opaco p-3 text-blanco shadow-sm ring-1 ring-inset ring-opaco placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="usuario" className="block text-sm font-bold leading-6 text-negro">
                                        Usuario
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="usuario"
                                            name="usuario"
                                            type="text"
                                            value={usuario}
                                            onChange={e => { setUsuario(e.target.value) }}
                                            required
                                            className="block w-full rounded-md border-0 bg-opaco p-3 text-blanco shadow-sm ring-1 ring-inset ring-opaco placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-bold leading-6 text-negro">
                                            Contraseña
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={password}
                                            onChange={e => { setPassword(e.target.value) }}
                                            required
                                            className="block w-full rounded-md border-0 bg-opaco p-3 text-blanco shadow-sm ring-1 ring-inset ring-opaco placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={mensajeError}
                                        className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-negro transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign Up
                                    </button>
                                </div>

                                <p className="mt-10 text-center text-sm text-negro">
                                    ¿Ya tienes cuenta?{' '}
                                    <Link to="/" className="font-semibold leading-6 text-blanco hover:text-primary">
                                        Iniciar Sesión
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default SignUp