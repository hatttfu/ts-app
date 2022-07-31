import germanFlag from "../../images/GermanFlag.svg";
import closeCross from "../../images/clo.png"
import React from "react";
import "./Modal.css"

export interface modalActive {
  modalActive:boolean;
  openModal(value:boolean):void;
}

export const Modal = (props:modalActive) => {
  return (
      <div className={props.modalActive ? "modal active" : "modal"} onClick={() => {
              props.openModal(false)
      }}>
        <div className="modalContent" onClick={e => e.stopPropagation()}>
          <div>
            <div style={{float:"right"}}>
                <button className="closeModalButton" onClick={()=>props.openModal(false)}>
                    <img style={{width:"16px"}} src={closeCross}/>
                </button>
            </div>
            <div className="modalContent__title"><h2>Premium Content</h2>
                <p>Get access to more content and additional functions for just 1190,00 RUB for 1 year.</p>
                <button className="modalContent__title__button">Find out more</button>
            </div>
            <h3>Content for Premium Members</h3>
            <div className="modalContent__buttons">
                <div>
                  <h4>German</h4>
                  <img className="modalContent__germanFlag" src={germanFlag}/>
                </div>
                <div>
                  <h4>Reading</h4>
                  <p>125</p>
                  <span>Texts</span>
                </div>
                <div>
                  <h4>Listening</h4>
                  <p>66</p>
                  <span>Texts</span>
                </div>
                <div>
                  <h4>Dictation</h4>
                  <p>90</p>
                  <span>Dictations</span>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}
