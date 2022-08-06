
import {NavTypes} from "./types";

function Nav({vocabularyType, setVocabularyType}: NavTypes) {
  return (
    <div className="vocabulary__nav">
        <button className={vocabularyType === 0 ? "vocabulary__choice vocabulary__choice_active" : "vocabulary__choice vocabulary__choice_inactive"} onClick={() => setVocabularyType(0)}>
            passive vocabulary
        </button>
        <button className={vocabularyType === 1 ? "vocabulary__choice vocabulary__choice_active" : "vocabulary__choice vocabulary__choice_inactive"} onClick={() => setVocabularyType(1)}>
            active vocabulary
        </button>
    </div>
  )
}

export default Nav