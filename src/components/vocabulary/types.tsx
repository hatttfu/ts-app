export interface NavTypes  {
    vocabularyType: number,
    setVocabularyType: (arg: number) => void
}

export interface StatisticsTypes extends NavTypes {
    activeWord: number,
    points: number
}

export interface ActiveTypes {
    data: Word[],
    insertedWord: string,
    setInsertWord: (arg: string) => void,
    checkAnswer: (arg: string) => void,
    germanLetters: string[],
    activeWord: number
}

export interface Word {
    word: string,
    answers: string[],
    answer: string,
    info: string
}