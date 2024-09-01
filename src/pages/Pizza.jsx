import React, { useState, useEffect } from 'react'
import { Card, ListGroup, ListGroupItem, Button, Spinner } from 'react-bootstrap'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function capitalizeWords(string) {
    return string
        .split(' ')
        .map(word => capitalizeFirstLetter(word))
        .join(' ')
}

const Pizza = () => {
    const [pizza, setPizza] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pizzas/P001')
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`)
                }
                const data = await response.json()
                setPizza(data)
            } catch (error) {
                console.error('Error fetching pizza:', error)
                setError('Hubo un problema al cargar la pizza.')
            } finally {
                setLoading(false)
            }
        }

        fetchPizza()
    }, [])

    if (loading) {
        return <Spinner animation="border" />
    }

    return (
        <div className="container mt-4">
            {error ? (
                <p>{error}</p>
            ) : (
                pizza && (
                    <div className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="mb-3 mx-auto">
                            <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
                            <Card.Body>
                                <Card.Title>{capitalizeWords(pizza.name)}</Card.Title>
                                <Card.Text>{pizza.desc}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                {pizza.ingredients.map((ingredient, index) => (
                                    <ListGroupItem key={index}>{capitalizeWords(ingredient)}</ListGroupItem>
                                ))}
                            </ListGroup>
                            <Card.Body>
                                <Card.Text><strong>Precio: </strong>${pizza.price}</Card.Text>
                                <Button variant="primary">Añadir al carrito</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            )}
        </div>
    )
}

export default Pizza
