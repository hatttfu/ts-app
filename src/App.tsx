import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Vocabulary from './components/vocabulary/Vocabulary';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Vocabulary />
      <Footer />
    </div>
  );
}

export default App;
