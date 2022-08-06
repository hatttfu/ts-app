import {ActiveTypes} from './types'

function Active({data, activeWord, insertedWord, setInsertWord, checkAnswer, germanLetters}: ActiveTypes) {

  //в ts надо писать вот так...
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if( !event.currentTarget.value.match(/[0-9]/)) {
      setInsertWord(event.currentTarget.value)
    }
  }

  const handleLetter = (event: React.FormEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.value)
    setInsertWord(insertedWord+event.currentTarget.value)
  }

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
        checkAnswer(insertedWord)
    } else {
        germanLetters.map((letter: string, index: number) => {
        if(index+1 === parseInt((event.key))) {
            setInsertWord(insertedWord+letter)
        }
        })
    }
  }

  return (
    <div className='vocabulary__active active'>
        <div className="active__wrapper">
        <input
            style={{width: `${data[activeWord].word.length  * 17.5 + data[activeWord].word.length / 2 * 16}px`}}
            className={data[activeWord].info === "noun" ? "active__insert_wrapper active__insert_noun" : "active__insert_wrapper"}
            maxLength={data[activeWord].word.length}
        />
        <input
            style={{width: `${data[activeWord].word.length  * 17.5 + data[activeWord].word.length / 2 * 16 + 15}px`}}
            type="text" className="active__insert"
            maxLength={data[activeWord].word.length}
            value={insertedWord}
            onChange={handleChange}
            onKeyDown={handleKey}
        />
        <button type="button" className="active__check task__text" onClick={() => checkAnswer(insertedWord)}>check</button>
        </div>
        <div className="active__letters-block">
        <div className="active__title"><span>Special letters</span> (click or insert code)</div>
        <div className="active__letters">
            {germanLetters.map((letter:string, index:number) => {
                return(
                <button type="button" key={index} className="active__letter task__text" onClick={handleLetter} value={letter}>{letter}
                    <span className="letter__number">{index+1}</span>
                </button>
                )
                })
            }
        </div>
        </div>
    </div>
  )
}

export default Active