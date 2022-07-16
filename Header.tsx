import logo from "./img/logo.gif"
import './Header.css';

export let Header = () => {
    return (
        <div>
            <header>
                <div className="blockWithLogo">
                    <img className="logo" src={logo}/>
                </div>
                <div className="blockWithButtonsLog">
                    <button className="buttonMyAccount">My account</button>
                    <button className="buttonLog">Log out</button>
                </div>
            </header>
        </div>
    )
}