import React from "react";
import "./toggleMenuStyle.css"

interface menuIsOpen {
    menuIsOpen?:boolean;
}

export const ToggleMenuLanguages = ({menuIsOpen}:menuIsOpen) => {


    return (
        <div>
            <div className={menuIsOpen ? "menu active" : "menu"}>
                <div className={menuIsOpen ? "choiceOfLanguage active" : "choiceOfLanguage"}>
                    <h3 style={{padding: "30px 0 30px 20px", fontSize: "22px"}}>Which language do you want to
                        learn?</h3>
                    <button className="button__choiceOfLanguage eng">English</button>
                    <button className="button__choiceOfLanguage ger">German</button>
                </div>
            </div>
        </div>
    )
}