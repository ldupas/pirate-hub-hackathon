import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Treasure from './pages/Treasure';
import Recruitment from './pages/Recruitment';
import RhumSelection from './pages/RhumSelection';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/accueil" component={Home} />
            <Route path="/tresors" component={Treasure} />
            <Route path="/recrutement" component={Recruitment} />
            <Route path="/rhums" component={RhumSelection} />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
