import {useState, useEffect} from 'react';
import Header from './components/header/Header'
import Vocabulary from './pages/Vocabulary';
import Footer from './components/footer/Footer';
import Listening from './pages/Listening';
import LanguageChoice from './components/languageChoice/LanguageChoice';


function App() {

  const [languagesVisible, setLanguagesVisible] = useState<boolean>(false)

  return (
    <div className="App">
      <Header setLanguagesVisible={setLanguagesVisible}  />
      <div className="main-content">
        {/* Components should be here */}
        {/* Этот див не удалять, нужен чтобы прижать footer */}
        <LanguageChoice />
        <Vocabulary />
      </div>

      <Footer />
    </div>
  );
}

export default App;
