import penguin from '../../assets/penguin.png'
import Tada from 'react-reveal/Tada';
import Flash from 'react-reveal/Flash';
import './About.css'

const About = () => {
    return (
        <div className="about">
            <Flash>
                <h2 className="mb-3">Hi!</h2>
            </Flash>
            <Tada>
                <img src={penguin} alt="Logo" />
            </Tada>
        </div>
    )
}

export default About
