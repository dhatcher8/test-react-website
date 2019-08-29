import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Welcome from './components/Welcome';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <>
     <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
     </Router>
    </>
    
  );
}

export default App;
