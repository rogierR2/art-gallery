import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from '../Footer/Footer';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Navbar from '../Navbar/Navbar';
import About from '../pages/About';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/about' component={About} />
          </Switch>
          <Footer />
        </Router>
      </div>

    );
  }
}

export default App;