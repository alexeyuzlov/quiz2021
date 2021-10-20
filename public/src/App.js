import './App.css';
import Quiz from "./Quiz";

function App() {
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
                    <Quiz/>

                    <div className="hide">Вы ответили правильно на X из X вопросов</div>
                </main>
            </div>
            <footer className="footer page__footer">
                Alexey Uzlov, 2021
            </footer>
        </div>
    );
}

export default App;
