import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function capitalizeWords(string) {
    return string
        .split(' ')
        .map(word => capitalizeFirstLetter(word))
        .join(' ')
}

const CardPizza = ({ pizza }) => {
    return (
        <Card style={{ width: '18rem' }} className="mb-3">
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
            </Card.Body>
        </Card>
    )
}

export default CardPizza
