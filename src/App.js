import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './navigation/navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
