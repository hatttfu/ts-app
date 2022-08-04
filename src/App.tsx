import {useState, useEffect} from 'react';
import Header from './components/header/Header'
import Vocabulary from './pages/Vocabulary';
import Footer from './components/footer/Footer';
import Listening from './pages/Listening';
import LanguageChoice from './components/languageChoice/LanguageChoice';


function App() {

  const [languagesVisible, setLanguagesVisible] = useState<boolean>(false)

  const [activeTask, setTask] = useState<string>('reading')

  return (
    <div className="App">
      <Header setLanguagesVisible={setLanguagesVisible}  />
      <div className="main-content">
        {/* Components should be here */}
        {/* Этот див не удалять, нужен чтобы прижать footer */}
        <LanguageChoice setTask={setTask} activeTask={activeTask} />
        {activeTask == "vocabulary" && <Vocabulary />}
        {activeTask == "listening" && <Listening />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
