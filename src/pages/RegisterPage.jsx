import React, { useState } from 'react'

const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()

        if (!email || !password || !confirmPassword) {
            alert('Todos los campos son obligatorios')
            return
        }
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres')
            return
        }
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden')
            return
        }

        alert('Registro exitoso')
    }

    return (
        <div className='registro'>
            <h2>Registro</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default RegisterPage
