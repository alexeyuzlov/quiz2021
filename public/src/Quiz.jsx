import {Component} from "react";

class Quiz extends Component {
    get question() {
        return this.props.question;
    }

    constructor(props) {
        super(props);

        console.info(props.question)
    }

    select(e) {
        this.props.next(e.target.value);
    }

    render() {
        return (
            <div className="quiz-form">
            <h2>{this.question.question}</h2>

                <form action="">
                    {this.question.answers.map((answer) => {
                        return (
                            <label className={'form-control'} key={answer.id}>
                                <input
                                    type="radio"
                                    name="answers"
                                    value={answer.id}
                                    onChange={(e) => this.select(e)}
                                />
                                {answer.title}
                            </label>
                        )
                    })}
                </form>
            </div>
        );
    }
}

export default Quiz;
