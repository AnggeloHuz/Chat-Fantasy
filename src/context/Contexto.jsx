import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

export const Contexto = createContext()

export function ContextoProvider(props) {
    const [usuarios, setUsuarios] = useState('')
    const [sesion, setSesion] = useState('')

    useEffect(() => {

        let sesionLogin = JSON.parse(localStorage.getItem('sesion'))

        if (sesionLogin != null) {
            setSesion(sesionLogin)
        }

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
            Swal.fire({
                title: 'SignIn Correcto',
                text: 'Has iniciado sesion correctamente',
                icon: 'success',
                color: '#ffffff',
                background: '#034159',
                confirmButtonColor: '#038C3E'
            })
        } else {
            Swal.fire({
                title: 'SignIn Erroneo',
                text: 'Ingresa correctamente los datos para iniciar sesion',
                icon: 'error',
                color: '#ffffff',
                background: '#034159',
                confirmButtonColor: '#038C3E'
            })
        }
    }

    const alertaRecuperar = (tipo) => {
        if (tipo) {
            Swal.fire({
                title: 'Recuperación Realizada',
                text: 'Se ha cambiado la clave correctamente',
                icon: 'success',
                color: '#ffffff',
                background: '#034159',
                confirmButtonColor: '#038C3E'
            })
        } else {
            Swal.fire({
                title: 'Error de Recuperación',
                text: 'No existe el usuario del cual deseas recuperar la clave',
                icon: 'warning',
                color: '#ffffff',
                background: '#034159',
                confirmButtonColor: '#038C3E'
            })
        }
    }

    const alertaCrear = (tipo) => {
        if (tipo) {
            Swal.fire({
                title: 'Cuenta Creada con Éxito',
                text: 'Se ha creado la cuenta correctamente',
                icon: 'success',
                color: '#ffffff',
                background: '#034159',
                confirmButtonColor: '#038C3E'
            })
        } else {
            Swal.fire({
                title: 'Error de Registro',
                text: 'El usuario que ingresaste ya existe',
                icon: 'warning',
                color: '#ffffff',
                background: '#034159',
                confirmButtonColor: '#038C3E'
            })
        }
    }


    function RegistrarUsuario(usuario) {
        if (usuarios === '') {
            setUsuarios([usuario])
        } else {
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

        if (login) {
            setSesion({ status: 'Loguiado', usuario });
            localStorage.setItem('sesion', JSON.stringify({ status: 'Loguiado', usuario }))
            alertaLogin(true)
        } else {
            setSesion({ status: 'NoLoguiado' })
            localStorage.setItem('sesion', JSON.stringify({ status: 'NoLoguiado' }))
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

    function cerrarSesion() {
        setSesion({ status: 'NoLoguiado' });
        localStorage.setItem('sesion', JSON.stringify({ status: 'NoLoguiado' }))

        Swal.fire({
            title: 'Has Cerrado la Sesión',
            text: 'Vuelve Pronto a Chat Fantasy',
            icon: 'success',
            color: '#ffffff',
            background: '#034159',
            confirmButtonColor: '#038C3E'

        })
    }

    return (
        <Contexto.Provider value={{
            usuarios, setUsuarios, RegistrarUsuario, IniciarSesion, sesion, setSesion, RecuperarClave, cerrarSesion
        }}>
            {props.children}
        </Contexto.Provider>
    )
}