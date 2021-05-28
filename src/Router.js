import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { PrimaryMenuItems } from './components/Navbar/MenuItems'
import About from './components/PrimaryMenu/About'
import More from './components/PrimaryMenu/MoreItems/More'
import Index from './components/PrimaryMenu/DummyWebsite/Index'
import InvalidRoute from './components/InvalidRoute'
import { BrowserRouter , Switch, Route } from "react-router-dom"

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar menuItems={PrimaryMenuItems}/>
                <div>
                    <Switch>
                        <Route path="/" component={About} />
                        <Route path="/about" component={About} />
                        <Route path="/more" component={More} />
                        <Route path="/dummy-website" component={Index} />
                        <Route component={InvalidRoute} />
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Router
