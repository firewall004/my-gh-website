import './App.css';
import Navbar from './components/Navbar/Navbar'
import { PrimaryMenuItems } from './components/Navbar/MenuItems'
import About from './components/PrimaryMenu/About'
import Index from './components/PrimaryMenu/DummyWebsite/Index'
import InvalidRoute from './components/InvalidRoute'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar menuItems={PrimaryMenuItems}/>
        <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/dummy-website" component={Index} />
            <Route component={InvalidRoute} />
          </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
