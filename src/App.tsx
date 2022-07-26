import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Vocabulary from './components/vocabulary/Vocabulary';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        {/* Components should be here */}
        {/* Этот див не удалять, нужен чтобы прижать footer */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
