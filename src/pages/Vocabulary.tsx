import {useState, useEffect} from 'react';
import "../components/vocabulary/Vocabulary.css";
import englishFlag from "../images/english-flag.png";

function Vocabulary() {
  const [vocabularyType, setVocabularyType] = useState(0);

  const [data, setData] = useState<any[]>([]);
  const [activeWord, setActiveWord] = useState(0);

  const [points, setPoints] = useState(0);
  const [feedbackVisible, setFeedbackvisible] = useState(false);
  const [isCorrect, setCorrect] = useState(false);

  ///needs optimization
  useEffect(() => {
    fetch("http://localhost:3000/mock-db/vocabulary.json")
      .then(db => db.json())
      .then(db => {
        console.log(db.vocabulary);
        setData(db.vocabulary);
      })
  }, [])

  function checkAnswer(answer: string) {
    setFeedbackvisible(true);
    if(answer === data[activeWord].answer) {
      setCorrect(true);
    }
    else {
      setCorrect(false);
    }
    setActiveWord(activeWord+1)
  }

  return (
      data[0] &&
      <div className="vocabulary">
        <div className="container">
            <h1 className="vocabulary__title">
                Learn vocabulary!
            </h1>
            <div className="vocabulary__nav">
                <button className={vocabularyType == 0 ? "vocabulary__choice vocabulary__choice_active" : "vocabulary__choice vocabulary__choice_inactive"} onClick={() => setVocabularyType(0)}>
                    passive vocabulary
                </button>
                <button className={vocabularyType == 1 ? "vocabulary__choice vocabulary__choice_active" : "vocabulary__choice vocabulary__choice_inactive"} onClick={() => setVocabularyType(1)}>
                    active vocabulary
                </button>
            </div>
            <div className="vocabulary__panel panel">
                <div>
                {feedbackVisible && <div className="vocabulary__feedback feedback">
                  <span className={isCorrect ? "feedback__info feedback__info_correct" : "feedback__info feedback__info_wrong"}>{isCorrect ? "correct" : "wrong"}!</span>

                  (<span className="feedback__word">{data[activeWord].word}</span><span className="feedback__answer">{data[activeWord].answer}</span>)
                </div>}
                <div className="vocabulary__task task">
                    <h3 className="task__title">
                        <span className="task__word">
                          {data[activeWord].word}
                        </span>
                        <span className="task__word-info">
                            ({data[activeWord].info})
                        </span>
                    </h3>
                    <p className="task__explanation">
                        <span className="task__flag"><img src={englishFlag} alt="English flag" /></span>
                        <span className="task__flag"><img src={englishFlag} alt="English flag" /></span>
                        <span className="task__explanation-text">is translated to English:</span>
                    </p>
                    <div className="task__wrapper">
                      {data[activeWord].answers.map((answer:string, index:number) => {
                        return(
                        <div className="task__container">
                            <div className="task__text" onClick={() => checkAnswer(answer)}>
                              <span className="task__number">{index+1}</span>
                              <div className="task__answer">{answer}</div>
                            </div>
                        </div>
                        )
                    })
                  }
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