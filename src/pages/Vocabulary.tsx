import "../components/vocabulary/Vocabulary.css";
import englishFlag from "../images/english-flag.png";

function Vocabulary() {
  return (
    <div className="vocabulary">
        <div className="container">
            <h1 className="vocabulary__title">
                Learn German to English vocabulary
            </h1>
            <div className="vocabulary__nav timer">
                <button className="vocabulary__choice vocabulary__choice_inactive">
                    passive vocabulary
                </button>
                <button className="vocabulary__choice vocabulary__choice_active timer">
                    <div className="timer">active vocabulary</div>
                </button>
            </div>
            <div className="vocabulary__panel panel">
                <div className="vocabulary__task task">
                    <h3 className="task__title">
                        <span className="task__word">
                            klein
                        </span>
                        <span className="task__word-info">
                            (adjective)
                        </span>
                    </h3>
                    <p className="task__explanation">
                        <span className="task__flag"><img src={englishFlag} alt="English flag" /></span>
                        <span className="task__flag"><img src={englishFlag} alt="English flag" /></span>
                        <span className="task__explanation-text">is translated to English:</span>
                    </p>
                    <div className="task__wrapper">
                        <div className="task__container">
                            <div className="task__text">
                            <span className="task__number">1</span>
                            <div className="task__answer">answer</div>
                            </div>
                        </div>
                        <div className="task__container">
                            <div className="task__text">
                            <span className="task__number">2</span>
                            <div className="task__answer">answer</div>
                            </div>
                        </div>
                        <div className="task__container">
                            <div className="task__text">
                            <span className="task__number">3</span>
                            <div className="task__answer">answer</div>
                            </div>
                        </div>
                        <div className="task__container">
                            <div className="task__text">
                            <span className="task__number">4</span>
                            <div className="task__answer">answer</div>
                            </div>
                        </div>
                        <div className="task__container">
                            <div className="task__text">
                            <span className="task__number">5</span>
                            <div className="task__answer">answer</div>
                            </div>
                        </div>
                    </div>
                    <div className="task__prompts">
                        <div className="task__propmpts-keybord">
                            <span>Without a mouse: Select with keys 1 to 6!</span>
                        </div>
                        <div className="task__propmpts-send">
                            <span>Something is wrong? <a href="#">Report error</a></span>
                        </div>
                    </div>
                </div>
                <div className="vocabulary__statistics statistics">
                    <h5 className="statistics__title">Statistics</h5>
                    <p className="statistics__attempts"><span>3</span> attempts</p>
                    <div className="statistics__display">
                        <div className="statistics__bar"></div>
                        <span className="statistics__percent">20</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vocabulary