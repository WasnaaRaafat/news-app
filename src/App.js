import './App.css';
import Nav from './components/Nav.js';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  withRouter,
} from 'react-router-dom';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Artical from './components/Artical.js';
import Sport from './components/Sport.js';
import NotFound from './components/NotFound';
import Health from './components/Health';
import Business from './components/Business';
function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path={('/Home', '/')} component={withRouter(Home)} />
          <Route exact path='/Sport' component={withRouter(Sport)} />
          <Route exact path='/Artical' component={withRouter(Artical)} />
          <Route exact path='/Health' component={withRouter(Health)} />
          <Route exact path='/Business' component={withRouter(Business)} />
          <Route path='*' component={withRouter(NotFound)} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
