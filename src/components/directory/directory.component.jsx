import QuizOne from "../quiz-one/quiz-one.component";
import QuizTwo from "../quiz-two/quiz-two.component";
import { Link } from 'react-router-dom'

const Directory = () => {
    return (
        <div>
            <h1>Test quizes page</h1>
            <Link to="quiz-one">
                <h2>Go to quiz one</h2>
            </Link>
        </div>
    );
};

export default Directory