import questions from "../questions/quiz-one-questions/quiz-one-questions.component";
import { useState } from "react";

const QuizTwo = () => {
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

    if (isFinished) {
      if (score < 25) return(
      <main>
            <span className='respuesta'>A</span>
            <button onClick={() => window.location.href = '/'}> Go to the home page </button>
      </main> 
      );
      if (score < 32) return(
        <main>
              <span className='respuesta'>B</span>
              <button onClick={() => window.location.href = '/'}> Go to the home page </button>
        </main>
        );
        if (score <= 40) return(
          <main>
                <span className='respuesta'>C</span>
                <button onClick={() => window.location.href = '/'}> Go to the home page </button>
          </main>
          );
    };

    return (
        <div className='test-container'>
            <h2>This is the second quiz</h2>
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

export default QuizTwo;