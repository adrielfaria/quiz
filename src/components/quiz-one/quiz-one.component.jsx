import questions from "../questions/quiz-one-questions/quiz-one-questions.component";
import { useState } from "react";

const QuizOne = () => {
    const [actualQuestion, setActualQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    function handleAnswerSubmit(isCorrect, event){
        if (isCorrect) setScore(score + isCorrect);
          
          if(actualQuestion === questions.length - 1) {
            setIsFinished(true);
          }else{
            setActualQuestion(actualQuestion + 1);
          };
    };

    return (
        <div className='test-container'>
            <h2>This is the first quiz</h2>
            <div className='left-side'>
                <div className='question-number'>
                    <span>Question {actualQuestion + 1} from</span> {questions.length}
                </div>
                <div className='question-title'>{questions[actualQuestion].title}</div>
                </div>
                <div className='right-side'>
                {questions[actualQuestion].options.map((respuesta) => (
                    <button key={respuesta.textoRespuesta} onClick={(event) => handleAnswerSubmit(respuesta.isCorrect, event)}>
                    {respuesta.textoRespuesta}
                    </button>
            ))}
            </div>
      </div>
    );
};

export default QuizOne