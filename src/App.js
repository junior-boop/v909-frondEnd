import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Container from './page/container';

function App() {
  return (
    <BrowserRouter>
      <Container />
    </BrowserRouter>
  );
}

export default App;
