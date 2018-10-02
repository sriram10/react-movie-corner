import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Movie from './components/Movie/Movie';
import Navigation from './components/Navigation/Navigation';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <header className="App-header">
            <h1 className="App-title">Movies Corner</h1>
            <Navigation />
          </header>
            <Route path="/" exact component={Home}/>
          <Switch>
            <Route path="/trending" render={() => <h1>TRENDING</h1>} />
            <Route path="/contact" render={() => <h1>CONTACT</h1>} />
            
            <Route path="/about/a/b/c" render={() => <h2>Some Other Component 3</h2>} />
            <Route path="/about/a/b" render={() => <h2>Some Other Component 2</h2>} />
            <Route path="/about/a" render={() => <h2>Some Other Component 1</h2>} />
            <Route path="/about" component={About} />

            <Route path="/movie/:movieid" component={(routeObj) => <Movie text="SOME PROPS" {...routeObj} />} />

            <Redirect from="/home" to="/" />
            {/* <Redirect from="*" to="/" /> */}

            <Route render={() => <h1>404: Page Not Found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
