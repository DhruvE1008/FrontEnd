import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageRouter from './Router';
import NavBar from './NavigationBar';
import './App.css';

const App: React.FC = () => {

  return (
    <Router>
      <div className ="App">
        <header> 
          <div className = "text-container">
            <h1>Ice Cream Store</h1>
          </div> 
          <NavBar /> 
        </header>
        <main>
          <PageRouter />
        </main>
      </div>
    </Router>
  );
};

export default App;
