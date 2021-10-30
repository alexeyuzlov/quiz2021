import {Component} from "react";

class Quiz extends Component {
    get question() {
        return this.props.question;
    }

    constructor(props) {
        super(props);

        console.info(props.question)

        this.state = {
            selectedId: null
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const value = this.state.selectedId;
        if (!value) {
            console.info('No value!');
            return;
        }

        this.props.next(value);

        this.setState({
            selectedId: null
        })
    }

    render() {
        return (
            <div className="quiz-form">
                <h2>{this.question.question}</h2>

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    {
                        this.question.answers.map((answer) => {
                            return (
                                <label className={'form-control'} key={answer.id}>
                                    {/*{this.state.selectedId === answer.id ? 'true' : 'false'}*/}

                                    <input
                                        type="radio"
                                        name="answers"
                                        checked={this.state.selectedId === answer.id}
                                        onChange={() => this.setState({selectedId: answer.id})}
                                        value={answer.id}
                                    />
                                    {answer.title}
                                </label>
                            )
                        })
                    }

                    <button className="button button--primary" type="submit">Next</button>
                </form>
            </div>
        );
    }
}

export default Quiz;
