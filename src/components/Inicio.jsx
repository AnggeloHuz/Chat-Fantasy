import ForgotPassword from "./Login/ForgotPassword"
import SignIn from "./Login/SignIn"
import SignUp from "./Login/SignUp"

function Inicio() {
    
    return ( 
        <>
            <main className="h-[100vh] w-full bg-Login bg-cover bg-no-repeat bg-center flex justify-center items-center">
                <ForgotPassword />
            </main>
        </>
    )
}

export default Inicio