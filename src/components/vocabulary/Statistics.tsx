
import {StatisticsTypes} from './types'

function Statistics({activeWord, points, vocabularyType, setVocabularyType}: StatisticsTypes) {
  return (
    <div className="vocabulary__statistics statistics">
        <div className="statistics__block">
        <h5 className="statistics__title">Statistics</h5>
        <p className="statistics__attempts"><span>{activeWord}</span> attempts</p>
        {activeWord ? <div className="statistics__display">
            <div className="statistics__bar">
                <div style={{width: `${Math.floor(points/activeWord*100)}%`}} className={points === activeWord ? "statistics__bar-content statistics__bar-content_full" : "statistics__bar-content"}></div>
            </div>
            <span className="statistics__percent">{Math.floor(points/activeWord*100)}</span>
        </div>
        : ""}
        </div>
        <div className="statistics__block">
        <h5 className="statistics__title">Words</h5>
        <div className="statistics__words">Words in total: <span>{activeWord}</span>
            <ul className="statistics__review">
            <li>last right: <span>{points}</span></li>
            <li>last wrong: <span>{activeWord - points}</span></li>
            <li>newly learned words: <span>0</span></li>
            </ul>
        </div>
        </div>
        <div className="statistics__block">
        <h5 className="statistics__title">change direction</h5>
        <button className="statistics__direction task__text" onClick={() => vocabularyType === 0 ? setVocabularyType(1) : setVocabularyType(0)}><span>{vocabularyType === 0 ? 'active' : "passive"} vocabulary</span></button>
        </div>
    </div>

  )
}

export default Statistics