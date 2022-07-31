import {useState} from 'react';
import "./Header.css"
import englishFlag from "../../images/english-flag.png"
import user from "../../images/user.png"
import logo from "../../images/logo.gif"

type HeaderProps = {
    setLanguagesVisible: (arg: boolean) => void
}

const Header = ({setLanguagesVisible}: HeaderProps) => {

    const [activeMenu, setActiveMenu] = useState<boolean>(false)

    return (
        <header className="header">
            <div className="container container_header">
                <div className="header__container">
                    <div className="header__logo">
                        <a href="#">
                            <img src={logo}/>
                        </a>
                    </div>
                    <div className="header__buttons">
                        <button className="header__buttons-log">My account</button>
                        <button className="header__buttons-log">Log out</button>
                    </div>
                    <div className="header__buttons_small">
                        <button className="header__buttons-log header__buttons-log_small">
                            <img src={user}/>
                        </button>
                        <button className={
                            //add "change" classname to the icon крч крестик кривой добавляю
                            activeMenu
                                ? "header__buttons-log header__buttons-log_small header__buttons-log_menu change"
                                : "header__buttons-log header__buttons-log_small header__buttons-log_menu"
                        }
                        onClick={() => activeMenu ?setActiveMenu(false):setActiveMenu(true)}>
                            <div className="menu__div menu__div_first"></div>
                            <div className="menu__div menu__div_second"></div>
                            <div className="menu__div menu__div_third"></div>
                        </button>
                    </div>
                </div>
            </div>
            <div className={activeMenu ?"menu_small active" : "menu_small"}>
                <ul className="menu__list">
                    <div className="activities__language activities__language_small" onClick={() => setLanguagesVisible(true)}>
                        <img className="language__flag" src={englishFlag}/>
                            <span>English</span>
                    </div>
                    <li className="menu__item menu__item_active">Reading</li>
                    <li className="menu__item">Listening</li>
                    <li className="menu__item">Vocabulary</li>
                </ul>
            </div>
        </header>
    )
}

export default Header