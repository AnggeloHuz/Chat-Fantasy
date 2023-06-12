import { useContext, useState } from "react";
import { Contexto } from "../context/Contexto";

function Chat() {

    const { cerrarSesion } = useContext(Contexto)

    return (
        <>
            <main className="">
                <button 
                className="bg-primary p-4 hover:bg-secondary transition-all"
                onClick={() => {
                    cerrarSesion()
                }}>
                    Cerrar Sesion</button>
                <h1>Hola </h1>
            </main>
        </>
    )
}

export default Chat