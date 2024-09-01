import React, { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()

        if (!email || !password) {
            alert('Todos los campos son obligatorios')
            return
        }
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres')
            return
        }

        alert('Login exitoso')
    }

    return (
        <div className='acceso'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage
