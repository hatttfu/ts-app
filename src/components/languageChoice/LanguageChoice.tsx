import germanFlag from "../../images/GermanFlag.svg"
import redTriangle from "../../images/redTriangle.png"
import {useState} from "react";
import "./LanguageChoice.css"
import {ToggleMenuLanguages} from "../toggleMenuLanguages/toggleMenuLanguages";

import {
    Link
  } from 'react-router-dom';

const LanguageChoice = () => {
    const [menuIsOpen, setMenuOpen] = useState<boolean>(false)

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
                    {/* вот так не работает в инете пока не нашла */}
                    {/* <Link className={(navigationData) => navigationData.isActive ? "buttonReading button_active" : "buttonReading"} to="/reading"><button>Reading</button></Link> */}

                    <Link className="buttonReading" to="/reading"><button>Reading</button></Link>
                    <Link className="buttonListeningy button_active" to="/listening"><button>Listening</button></Link>
                    <Link className="buttonDictationy button_active" to="/dictation"><button>Dictation</button></Link>
                    <Link className="buttonVocabulary button_active" to="/vocabulary"><button>Vocabulary</button></Link>
                </div>
            </div>
            <ToggleMenuLanguages menuIsOpen={menuIsOpen}/>
        </div>
    )
}

export default LanguageChoice;