import './App.css';
import Quiz from "./Quiz";
import {Component} from "react";

class App extends Component {
    get current() {
        return this.state.questions[this.state.index];
    }

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            isStarted: true,
            questions: [],
            index: 0
        }
    }

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        this.setState({
            loading: true
        });

        fetch("http://localhost:3000/questions")
            .then((res) => console.info(res))
            .then(res => res.json())
            .then(
                (result) => {
                    console.info('it works');

                    this.setState({
                        loading: false,
                        questions: result
                    });
                },
                (error) => {
                    console.info(error);
                    this.setState({
                        loading: false,
                        // error: true
                    });
                }
            )
    }

    next(answerId) {
        if (!this.state.questions[this.state.index + 1]) {
            this.toggle();
            return;
        }

        console.info('it works', answerId);
        this.setState((state) => ({
            index: state.index + 1
        }))
    }

    toggle() {
        this.setState((state) => ({
            isStarted: !state.isStarted
        }))
    }

    render() {
        return (
            <div className="page">
                <header className="header page__header">
                    <h1>Quiz</h1>
                </header>

                <div className="page__content main">
                    <aside className="main__sidebar sidebar">
                        {
                            this.state.questions.map((item) => {
                                return (
                                    <div key={item.id}>
                                        {item.question}
                                    </div>
                                )
                            })
                        }
                    </aside>

                    <main className="main__content">
                        {
                            this.state.loading ? 'Загрузка...' :
                                this.current
                                    ?
                                    <Quiz question={this.current} next={(answerId) => this.next(answerId)}/>
                                    :
                                    <div>Вы ответили правильно на X из {this.state.questions.length} вопросов</div>
                        }
                    </main>
                </div>

                <footer className="footer page__footer">
                    Alexey Uzlov, 2021
                </footer>
            </div>
        );
    }
}

export default App;
