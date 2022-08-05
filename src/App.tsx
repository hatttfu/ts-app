import {useState, useEffect} from 'react';
import Header from './components/header/Header'
import Vocabulary from './pages/Vocabulary';
import Footer from './components/footer/Footer';
import Listening from './pages/Listening';
import LanguageChoice from './components/languageChoice/LanguageChoice';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { ToggleMenuLanguages } from './components/toggleMenuLanguages/toggleMenuLanguages';

function App() {

  const [languagesVisible, setLanguagesVisible] = useState<boolean>(false)
  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  const [activeTask, setTask] = useState<string>('reading')

  return (
    <div className="App">
        <Router>
            <Header setLanguagesVisible={setLanguagesVisible} setActiveMenu={setActiveMenu} activeMenu={activeMenu} />

            <div onClick={() => setActiveMenu(false)} className="main-content">{/* Этот див не удалять, нужен чтобы прижать footer */}
                <LanguageChoice />
                {languagesVisible && <ToggleMenuLanguages menuIsOpen={languagesVisible}  /> }
                <Routes>
                    {/* <Route path="/reading" element={<Reading />}></Route> */}
                    <Route path="/listening" element={<Listening />}></Route>
                    {/* <Route path="/dictation" element={<Dictation />}></Route> */}
                    <Route path="/vocabulary" element={<Vocabulary />}></Route>
                </Routes>
            </div>

        </Router>

      <Footer />
    </div>
  );
}

export default App;
