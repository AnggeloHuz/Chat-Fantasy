import ForgotPassword from "./Login/ForgotPassword"
import SignIn from "./Login/SignIn"
import SignUp from "./Login/SignUp"
import { Route, Routes } from "react-router-dom";

function Inicio() {
    
    return ( 
        <>
            <main className="min-h-[100vh] h-auto w-full bg-Login bg-cover bg-no-repeat bg-center flex justify-center items-center">
            <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/recuperar" element={<ForgotPassword />} />
                </Routes>
            </main>
        </>
    )
}

export default Inicio