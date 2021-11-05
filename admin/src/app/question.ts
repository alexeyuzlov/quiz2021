export interface Question {
  id: number;
  question: string
  answers: Answer[];
  correct: number[];
}

export interface Answer {
  id: number;
  title: string;
}
