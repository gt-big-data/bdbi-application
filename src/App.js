import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import SecondComp from './SecondComp';
import Events from './Events';
import Projects from './Projects'
import About from './About'
import Sponsors from './Sponsors.js'
import Contact from './Contact.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/events" component={Events}/>
        </Switch>

    </div>
    </Router>
  );
}

export default App;
