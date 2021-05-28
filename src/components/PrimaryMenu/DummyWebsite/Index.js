import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from '../../Navbar/Navbar'
import { DummyWebsiteMenuItems } from '../../Navbar/MenuItems'
import About from '../About'
import Home from './Home'
import InvalidRoute from '../../InvalidRoute'

const Index = () => {
    return (
        <div>
            <Router>
                <Navbar menuItems={DummyWebsiteMenuItems}/>
                <div>
                    <Switch>
                        <Route path="/dummy-website/about" component={About} />
                        <Route path="/dummy-website/" component={Home} />
                        <Route component={InvalidRoute} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Index
