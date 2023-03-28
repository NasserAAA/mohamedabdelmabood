import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
