import './App.css';
import Quiz from "./Quiz";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isStarted: true
        }
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
                        list
                    </aside>
                    <main className="main__content">
                        {this.state.isStarted ? 'true' : 'false'}

                        {
                            this.state.isStarted
                                ?
                                <Quiz title={'Сколько пальцев на руке?'} oneMore={'123'}/>
                                :
                                <div>Вы ответили правильно на X из X вопросов</div>
                        }

                        <button type="button" onClick={() => this.toggle()}>Toggle</button>
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
