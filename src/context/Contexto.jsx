import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

export const Contexto = createContext()

export function ContextoProvider(props) {
    const [usuarios, setUsuarios] = useState('')
    const [sesion, setSesion] = useState('')

    useEffect(() => {
        const data_usuarios = JSON.parse(localStorage.getItem("usuarios"));
        if (data_usuarios === null) {
            return
        } else {
            setUsuarios(data_usuarios)
        }
    }, [])

    useEffect(() => {
        if (usuarios != '') {
            localStorage.setItem('usuarios', JSON.stringify(usuarios))
        }
    }, [usuarios])

    const alertaLogin = (tipo) => {
        if (tipo) {
            Swal.fire('SignIn Correcto', 'Has iniciado sesion correctamente', 'success')
        } else {
            Swal.fire('SignIn Erroneo', 'Ingresa correctamente los datos para iniciar sesion', 'error')
        }
    }

    const alertaRecuperar = (tipo) => {
        if (tipo) {
            Swal.fire('Recuperación Realizada', 'Se ha cambiado la clave correctamente', 'success')
        } else {
            Swal.fire('Error de Recuperación', 'No existe el usuario del cual deseas recuperar la clave', 'warning')
        }
    }

    const alertaCrear = (tipo) => {
        if (tipo) {
            Swal.fire('Cuenta Creada con Éxito', 'Se ha creado la cuenta correctamente', 'success')
        } else {
            Swal.fire('Error de Registro', 'El usuario que ingresaste ya existe', 'warning')
        }
    }


    function RegistrarUsuario(usuario) {
        if (usuarios === '') {
            setUsuarios([usuario])
        }else{
            let validamos = true
            
            usuarios.forEach(user => {
                if (user.usuario === usuario.usuario) {
                    validamos = false
                }
            });

            if (validamos) {
                setUsuarios([...usuarios, usuario])
                alertaCrear(true)
            } else {
                alertaCrear(false)
            }
        }
    }

    function IniciarSesion(usuario, password) {
        let login = false

        usuarios.forEach(user => {
            if (user.usuario === usuario && user.password === password) {
                login = true
            }
        });

        if(login){
            setSesion({status: 'Loguiado', usuario});
            alertaLogin(true)
        } else {
            setSesion({status: 'NoLoguiado'})
            alertaLogin(false)
        }
    }

    function RecuperarClave(usuario, newPassword) {
        let validacion = false

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].usuario === usuario) {
                usuarios[i].password = newPassword
                localStorage.setItem('usuarios', JSON.stringify(usuarios))
                validacion = true
            }
        }

        (validacion ? alertaRecuperar(true) : alertaRecuperar(false))
    }

    return (
        <Contexto.Provider value={{
            usuarios, setUsuarios, RegistrarUsuario, IniciarSesion, sesion, setSesion, RecuperarClave
            }}>
            {props.children}
        </Contexto.Provider>
    )
}