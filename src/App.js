import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Route , Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Posts from './components/posts';
import Home from './components/home';
import Contact from './components/contactus';
import './App.css';

function App() {
  return (
    <div>
        <AppBar color="primary" position="static">
          <NavBar />
        </AppBar>

        <Switch>
          <Route path="/posts" component={Posts}/>
          <Route path="/" exact component={Home}/>
          <Route path="/contact-us" component={Contact} />
        </Switch>

      </div>
  );
}

export default App;
