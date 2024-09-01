import React, { useState, useEffect } from 'react'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function capitalizeWords(string) {
    return string
        .split(' ')
        .map(word => capitalizeFirstLetter(word))
        .join(' ')
}

const Cart = () => {
    const [cart, setCart] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pizzas')
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`)
                }
                const data = await response.json()


                const pizzasWithCapitalization = data.map(pizza => ({
                    ...pizza,
                    name: capitalizeWords(pizza.name)
                }))

                const pizzasWithCount = pizzasWithCapitalization.map(pizza => ({ ...pizza, count: 1 }))
                setCart(pizzasWithCount)
            } catch (error) {
                console.error('Error fetching pizzas:', error)
                setError('Hubo un problema al cargar las pizzas.')
            }
        }

        fetchPizzas()
    }, [])

    const increaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        )
        setCart(updatedCart)
    }

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, count: item.count > 0 ? item.count - 1 : 0 } : item
        ).filter(item => item.count > 0)
        setCart(updatedCart)
    }

    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0)

    return (
        <div className="container">
            <h2>Carrito de Compras</h2>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul className="list-group">
                    {cart.map((pizza) => (
                        <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <img src={pizza.img} alt={pizza.name} width="50" />
                            <span>{pizza.name}</span>
                            <span>${pizza.price}</span>
                            <div>
                                <button onClick={() => decreaseQuantity(pizza.id)} className="btn btn-danger">-</button>
                                <span className="mx-2">{pizza.count}</span>
                                <button onClick={() => increaseQuantity(pizza.id)} className="btn btn-success">+</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${total}</h3>
            <button className="btn btn-primary">Pagar</button>
        </div>
    )
}

export default Cart
