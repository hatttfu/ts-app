import redTriangle from "../images/redTriangle.png"
import girl from "../images/germanListeningPhotoGirl.jpg"
import "../components/listening/Listening.css"
import {Modal} from "../components/modal/Modal";
import {createRef, useState} from "react";
import {ListOfTexts} from "../components/listening/listOfTexts";


const Listening = () => {

    let myRef:any = createRef()
    let ref = () => {
        window.scrollTo({ behavior: 'smooth', top:myRef.current.offsetTop })
    }

    const [modalActive, openModal] = useState<boolean>(false)
    return (
        <div className="container">
            <div className="containerListeningDescription">
                <div className="listeningDescription">
                    <h2>German Listening Comprehension</h2>
                    <img className="photoGirl" src={girl}/>
                    <p>Are your German listening skills good enough to understand a native speaker? Try our online exercises,
                        practice listening comprehension, and test your ability to translate.</p>
                    <button onClick={()=>{ref()}} className="listeningDescription__button" style={{marginRight:"5px"}}>
                        <img style={{paddingRight:"3px"}} className="redTriangle" src={redTriangle}/>
                        10 free texts
                    </button>
                    <button onClick={()=>openModal(true)} className="listeningDescription__button">
                        <img style={{paddingRight:"3px"}}   className="redTriangle" src={redTriangle}/>
                        Premium: 56 texts
                    </button>
                    <p>
                        Our voice recordings, paired with comprehension questions, adequately prep you
                        to have smooth conversations in German.
                        Gain confidence and feel ready for your next interaction with a German speaker.
                    </p>
                    <h3>How to Practice Your Listening Skills in German</h3>
                    <ul className="listening-list">
                        <li>Select a text. There are a variety of topics, with varying levels of difficulty, to choose from.</li>
                        <li>Start the audio file. Make sure to listen closely and concentrate on the content spoken.</li>
                        <li>When finished listening, answer the questions regarding comprehension of the
                            material. Did you understand everything correctly?</li>
                    </ul>
                </div>
            </div >
            <div ref={myRef}><ListOfTexts/></div>
        <Modal modalActive={modalActive} openModal={openModal}/>
        </div>
    )
}

export default Listening