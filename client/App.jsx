import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Main_Container from './containers/Main_Container';
import Visualizer from './components/Visualizer';
import Alerts from './components/Alerts';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='appCont' id='app'>
          {/* <Dashboard /> */}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/cluster' component={Main_Container} />
            <Route exact path='/visualizer' component={Visualizer} />
            <Route exact path='/alerts' component={Alerts} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
