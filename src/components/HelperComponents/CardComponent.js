import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import './CardComponent.css'

const CardComponent = ({ Items }) => {
    const renderCard = (card, index) => {
        return (
            <Link to={card.url}>
                <Card key={index} className="box mb-4">
                    <Card.Img variant="top" src={card.image} className="card-image" />
                    <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        );
    };

  return <div className="grid">{Items.map(renderCard)}</div>;
}

export default CardComponent
