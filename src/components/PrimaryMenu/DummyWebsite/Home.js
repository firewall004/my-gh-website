import Particles from 'react-particles-js'
import './Home.css'

const Home = () => {
    const particleConfig = {
	    "particles": {
	        "number": {
	            "value": 100,
	            "density": {
	                "enable": true,
	                "value_area": 500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.02,
                "distance": 3,
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.05
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05,
                    "sync": false
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
                "onhover": {
	                "enable": true,
	                "mode": "attract"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 2.5
	            }
	        },
            "resize": true
	    },
	    "retina_detect": true,
        "detectRetina": true,
    };

    const particleStyle = {
                width: '100%',
    };

    return (
        <div>
            <Particles params={particleConfig} style={particleStyle} className="home" />
        </div>
        )
}

export default Home
