export interface Question {
    id?: number;
    question: string
    answers: string[];
    correct: number[];
}

export interface QuestionEdit {
    id: number;
    question: string;
    answers: AnswerEdit[];
}

export interface AnswerEdit {
    answer: string;
    correct: boolean;
}

export function newAnswerEdit(): AnswerEdit {
    return {
        answer: '',
        correct: false
    }
}

export function toQuestionEdit(question: Question): QuestionEdit {
    return {
        id: question.id,
        question: question.question,
        answers: question.answers.map((answer, index) => {
            return {
                answer,
                correct: question.correct.includes(index)
            }
        })
    }
}

export function fromQuestionEdit(question: QuestionEdit): Question {
    return {
        question: question.question,
        answers: question.answers.map((answerGroup) => answerGroup.answer),
        correct: question.answers
            .map((answerGroup, index) => ({index, correct: answerGroup.correct}))
            .filter(({index, correct}) => correct)
            .map((data) => data.index),
    }
}
