import germanFlag from "../../images/GermanFlag.svg"
import redTriangle from "../../images/redTriangle.png"
import {useState} from "react";
import "./LanguageChoice.css"
import {ToggleMenuLanguages} from "../toggleMenuLanguages/toggleMenuLanguages";


const LanguageChoice = () => {
    const [menuIsOpen, setMenuOpen] = useState<boolean>(false)

    const [activeTask, setTask] = useState<String>('reading')

    return (
        <div className="blockAllContent__listeningMainPage">
            <div className="blockAllContent__listeningMainPage__description">
                <div className="blockAllContent__listeningMainPage__logo"
                     onClick={() => {
                         {menuIsOpen ? setMenuOpen(false) : setMenuOpen(true)}
                     }}>
                    <div style={{display:"flex"}}>
                        <img className={"germanFlagTrue"} src={germanFlag}/>
                        <div><span style={{fontSize: "20px", paddingRight: "5px"}}>German</span>
                            <img className="redTriangle" src={redTriangle}/></div>
                    </div>
                </div>
                <div className="blockAllContent__listeningMainPage__buttons">
                    <button className={activeTask == "reading" ? "buttonReading button_active" : "buttonReading"} onClick={() => setTask('reading')}>Reading</button>
                    <button className={activeTask == "listening" ? "buttonListening button_active" : "buttonListening"} onClick={() => setTask('listening')}>Listening</button>
                    <button className={activeTask == "dictation" ? "buttonDictation button_active" : "buttonDictation"} onClick={() => setTask('dictation')}>Dictation</button>
                    <button className={activeTask == "vocabulary" ? "buttonVocabulary button_active" : "buttonVocabulary"} onClick={() => setTask('vocabulary')}>Vocabulary</button>
                </div>
            </div>
            <ToggleMenuLanguages menuIsOpen={menuIsOpen}/>
        </div>
    )
}

export default LanguageChoice;