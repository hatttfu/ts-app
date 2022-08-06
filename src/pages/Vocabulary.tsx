import {useState, useEffect} from 'react';
import "../components/vocabulary/Vocabulary.css";
import englishFlag from "../images/english-flag.png";
import germanFlag from "../images/german-flag.png";

import Statistics from '../components/vocabulary/Statistics';
import Nav from '../components/vocabulary/Nav';
import Active from '../components/vocabulary/Active';
import {Word} from '../components/vocabulary/types';

function Vocabulary() {
  const [vocabularyType, setVocabularyType] = useState(0);

  const [data, setData] = useState<Word[]>([{
    word: "",
    answers: [],
    answer: "",
    info: ""
  }]);

  const [germanLetters, setGermanLetters] = useState<string[] | any[]>([]);

  const [activeWord, setActiveWord] = useState(0);
  const [previousWord, setPreviousWord] = useState(-1);

  const [points, setPoints] = useState(0);
  const [dataLeft, setDataLeft] = useState(true);
  const [feedbackVisible, setFeedbackvisible] = useState(false);
  const [isCorrect, setCorrect] = useState(false);

  const [insertedWord, setInsertWord] = useState("");

  ///needs optimization
  useEffect(() => {
    fetch("http://localhost:3000/mock-db/vocabulary.json")
      .then(db => db.json())
      .then(db => {
        console.log(db.vocabulary);
        setData(db.vocabulary);
        setGermanLetters(db.german);
      })
  }, [])

  function checkAnswer(answer: string) {
    if(answer === insertedWord) {
      checkInput(insertedWord)
    }
    else {
      checkTest(answer)
    }
    setPreviousWord(previousWord+1);
    setFeedbackvisible(true);
    checkDataLeft()
  }

  function checkInput(insertedWord: string) {
    if(insertedWord === data[activeWord].word) {
      setCorrect(true);
      setPoints(points+1)
    }
    else {
      setCorrect(false);
    }
    setInsertWord("");
  }

  function checkTest(answer: string) {
    if(answer === data[activeWord].answer) {
      setCorrect(true);
      setPoints(points+1)
    }
    else {
      setCorrect(false);
    }
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

  //не работает...
  const handleTestKeys = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log('bla')
    console.log(event.key)
    data[activeWord].answers.map((answer: string, index: number) => {
      if(index+1 === parseInt((event.key))) {
        checkAnswer(answer)
      }
    })

  }

  return (
      data[0] &&
      <div className="vocabulary">
        <div className="container">
            <h1 className="vocabulary__title">
                Learn vocabulary!
            </h1>
            <Nav vocabularyType={vocabularyType} setVocabularyType={setVocabularyType} />
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
                            {vocabularyType === 0 ? data[activeWord].word : data[activeWord].answer}
                          </span>
                          <span className="task__word-info">
                              ({data[activeWord].info})
                          </span>
                      </h3>
                      <p className="task__explanation">
                          <span className="task__flag"><img src={vocabularyType === 0 ? englishFlag : germanFlag} alt="English flag" /></span>
                          <span className="task__flag"><img src={vocabularyType === 0 ? germanFlag : englishFlag} alt="English flag" /></span>
                          <span className="task__explanation-text">is translated to {vocabularyType === 0 ? "English" : "German"}:</span>
                      </p>
                      {vocabularyType === 0
                        ? <div className="task__wrapper" onKeyDown={handleTestKeys}>
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
                      : <Active data={data} activeWord={activeWord} insertedWord={insertedWord} setInsertWord={setInsertWord} checkAnswer={checkAnswer} germanLetters={germanLetters} />
                      }
                  </div>
                  : <div className="vocabulary__task task">
                      <h3 className="task__title">
                        There're no more words...
                      </h3>
                    </div>}
                  <div className="task__prompts">
                      {vocabularyType === 0 && <div className="task__propmpts-keybord">
                          <span>Without a mouse: Select with keys 1 to {data[activeWord].answers.length}!</span>
                      </div>}
                      <div className="task__propmpts-send">
                          <span>Something is wrong? <a target="_blank" href="https://vk.com/write172800562">Report error to Fedya not me</a></span>
                      </div>
                  </div>
                </div>
                <Statistics activeWord={activeWord} points={points} vocabularyType={vocabularyType} setVocabularyType={setVocabularyType} />
            </div>
        </div>
    </div>
  )
}

export default Vocabulary