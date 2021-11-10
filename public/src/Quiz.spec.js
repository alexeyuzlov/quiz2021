import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Quiz from "./Quiz";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('Quiz', () => {
    it("should bind title correctly", () => {
        act(() => {
            let question = {
                question: 'Новый вопрос',
                answers: []
            };

            render(<Quiz question={question} />, container);
        });

        let header = container.querySelector('h2');

        expect(header.textContent).toBe("Новый вопрос");
    });

    it("should render answers correctly", () => {
        act(() => {
            let question = {
                question: 'Новый вопрос',
                answers: [
                    {
                        id: 1,
                        title: 'Новый ответ'
                    },
                    {
                        id: 2,
                        title: 'Ещё ответ'
                    }
                ]
            };

            render(<Quiz question={question} />, container);
        });

        let answers = container.querySelectorAll('input[type=radio]');
        expect(answers.length).toBe(2);
    });

    it("should submit form", () => {
        const nextFn = jest.fn();

        act(() => {
            let question = {
                question: 'Новый вопрос',
                answers: [
                    {
                        id: 1,
                        title: 'Новый ответ'
                    },
                    {
                        id: 2,
                        title: 'Ещё ответ'
                    }
                ]
            };

            render(<Quiz question={question} next={nextFn} />, container);
        });

        let answers = container.querySelectorAll('input[type=radio]');
        let answer = answers.item(0);
        act(() => {
            answer.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        let button = container.querySelector('button');
        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        expect(nextFn).toHaveBeenCalledWith(1);
    });
});
