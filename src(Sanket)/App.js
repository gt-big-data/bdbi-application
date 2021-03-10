import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import SecondComp from './SecondComp';
import Events from './Events';
import Projects from './Projects'
import About from './About'
import Sponsors from './Sponsors.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={SecondComp}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/events" component={Events}/>
        </Switch>
        <Sponsors/>
    </div>
    </Router>
  );
}

export default App;
