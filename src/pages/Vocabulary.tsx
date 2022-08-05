import {useState, useEffect} from 'react';
import "../components/vocabulary/Vocabulary.css";
import englishFlag from "../images/english-flag.png";

function Vocabulary() {
  const [vocabularyType, setVocabularyType] = useState(0);

  const [data, setData] = useState<any[]>([]);
  const [activeWord, setActiveWord] = useState(0);
  const [previousWord, setPreviousWord] = useState(-1);

  const [points, setPoints] = useState(0);
  const [dataLeft, setDataLeft] = useState(true);
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
    setPreviousWord(previousWord+1);
    setFeedbackvisible(true);
    if(answer === data[activeWord].answer) {
      setCorrect(true);
      setPoints(points+1)
    }
    else {
      setCorrect(false);
    }
    checkDataLeft()
  }

  function checkDataLeft(){
    if(data.length > activeWord + 1) {
      setActiveWord(activeWord+1)
    }
    else {
      setDataLeft(false)
      setActiveWord(activeWord+1)
    }
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
                <div className="panel__main">
                  {feedbackVisible && <div className="vocabulary__feedback feedback">
                    <span className={isCorrect ? "feedback__info feedback__info_correct" : "feedback__info feedback__info_wrong"}>{isCorrect ? "correct" : "wrong"}!</span>

                    (<span className="feedback__word">{data[previousWord].word}</span><span className="feedback__answer">{data[previousWord].answer}</span>)
                  </div>}
                  {dataLeft ?
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
                      {vocabularyType == 0
                        ? <div className="task__wrapper">
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
                      : <div className='vocabulary__active active'>
                          <div className="active__wrapper">
                            {/* {data[activeWord].word.length} */}
                            {`${data[activeWord].word.length  * 25 + 16}px`}
                            <input style={{width: `${data[activeWord].word.length  * 25 + 41}px`}} type="text" className="active__insert"  />
                            {/* <p className="active__letters">
                              {data[activeWord].word.split("").map((letter: string, index: number) => {
                                return letter == " " ? <span className="active__letter active__letter_gap" key={index}>{0} </span>: <input className="active__letter" key={index} />
                              })}
                            </p> */}
                          </div>
                        </div>
                      }
                  </div>
                  : <div className="vocabulary__task task">
                      <h3 className="task__title">
                        There're no more words...
                      </h3>
                    </div>}
                  <div className="task__prompts">
                      {vocabularyType == 0 && <div className="task__propmpts-keybord">
                          <span>Without a mouse: Select with keys 1 to 6!</span>
                      </div>}
                      <div className="task__propmpts-send">
                          <span>Something is wrong? <a href="#">Report error</a></span>
                      </div>
                  </div>
                </div>
                <div className="vocabulary__statistics statistics">
                    <div className="statistics__block">
                      <h5 className="statistics__title">Statistics</h5>
                      <p className="statistics__attempts"><span>{activeWord}</span> attempts</p>
                      {activeWord ? <div className="statistics__display">
                          <div className="statistics__bar">
                            <div style={{width: `${Math.floor(points/activeWord*100)}%`}} className={points == activeWord ? "statistics__bar-content statistics__bar-content_full" : "statistics__bar-content"}></div>
                          </div>
                          <span className="statistics__percent">{Math.floor(points/activeWord*100)}</span>
                      </div>
                      : ""}
                    </div>
                    <div className="statistics__block">
                      <h5 className="statistics__title">Words</h5>
                      <p className="statistics__words">Words in total: <span>{activeWord}</span>
                        <ul className="statistics__review">
                          <li>last right: <span>{points}</span></li>
                          <li>last wrong: <span>{activeWord - points}</span></li>
                          <li>newly learned words: <span>0</span></li>
                        </ul>
                      </p>
                    </div>
                    <div className="statistics__block">
                      <h5 className="statistics__title">change direction</h5>
                      <button className="statistics__direction task__text" onClick={() => vocabularyType == 0 ? setVocabularyType(1) : setVocabularyType(0)}><span>{vocabularyType == 0 ? 'active' : "passive"} vocabulary</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vocabulary