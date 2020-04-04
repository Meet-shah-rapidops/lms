import React from 'react';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routing/Routing'


function App() {
  return (
    <div className="App">
      <Router>
        <Routing />
      </Router>
    </div>
  );
}

export default App;
