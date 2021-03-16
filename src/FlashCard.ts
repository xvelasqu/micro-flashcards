/* eslint-disable no-unused-vars */
export enum FlashCardDifficulty {
  EASY = 1,
  MEDIUM = 3,
  MEDIUM_HARD = 5,
  HARD = 8,
  VERY_HARD = 10
}

export enum FlashCardType {
  VOCABULARY = 'vocabulary'
}

export type FlashCardContents = {
  id : number
  frontText : string
  backText : string
  type: FlashCardType
  difficulty : FlashCardDifficulty
}
