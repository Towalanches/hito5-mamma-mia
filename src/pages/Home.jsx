import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardPizza from '../components/CardPizza'

const Home = () => {
    const [pizzas, setPizzas] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pizzas')
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`)
                }
                const data = await response.json()
                setPizzas(data)
            } catch (error) {
                console.error('Error fetching pizzas:', error)
                setError('Hubo un problema al cargar las pizzas.')
            }
        }

        fetchPizzas()
    }, [])

    return (
        <Container>
            {error && <p>{error}</p>}
            <Row>
                {pizzas.map(pizza => (
                    <Col key={pizza.id} md={4}>
                        <CardPizza pizza={pizza} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Home
