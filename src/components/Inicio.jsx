import Chat from "./Chat";
import ForgotPassword from "./Login/ForgotPassword"
import SignIn from "./Login/SignIn"
import SignUp from "./Login/SignUp"
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Contexto } from "../context/Contexto";

function Inicio() {

    const { sesion } = useContext(Contexto)

    return (
        <>
            <Routes>
                <Route path="/login" element={sesion.status === 'Loguiado' ? (<Navigate to='/' />) : (<SignIn />)} />
                <Route path="/register" element={sesion.status === 'Loguiado' ? (<Navigate to='/' />) : (<SignUp />)} />
                <Route path="/recuperar" element={sesion.status === 'Loguiado' ? (<Navigate to='/' />) : (<ForgotPassword />)} />
                <Route path="/" element={sesion.status === 'Loguiado' ? (<Chat />) : (<Navigate to='/login' />)} />
            </Routes>
        </>
    )
}

export default Inicio