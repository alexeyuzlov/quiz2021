import {Component} from "react";

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: ''
        }
    }

    save(e) {
        this.setState({answer: e.target.value});
    }

    render() {
        return (
            <div className="quiz-form">
                <h2>{this.props.title}</h2>

                <form action="">
                    <input
                        value={this.state.answer}
                        type="text"
                        onChange={(e) => this.save(e)}
                    />
                    <button type="submit">Отправить</button>
                </form>
            </div>
        );
    }
}

export default Quiz;
