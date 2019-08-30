import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Welcome from './components/Welcome';
import Welcome from './components/Welcome';

import './App.css';

function App() {
  return (
    <>
     <Router>
        <div>
          <Route exact path="/" component={Welcome} />
        </div>
     </Router>
    </>
    
  );
}

export default App;
