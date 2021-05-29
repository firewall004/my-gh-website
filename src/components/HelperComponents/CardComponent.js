import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Pulse from 'react-reveal/Pulse';
import './CardComponent.css'

const CardComponent = ({ Items }) => {
    const renderCard = (card, index) => {
        return (
            <Link to={card.url} key={index}>
                <Pulse>
                    <Card className="box mb-4">
                        <Card.Img variant="top" src={card.image} className="card-image" />
                        <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                        </Card.Body>
                    </Card>
                </Pulse>
            </Link>
        );
    };

  return <div className="grid">{Items.map(renderCard)}</div>;
}

export default CardComponent
