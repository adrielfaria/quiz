import questions from "../questions/quiz-one-questions/quiz-one-questions.component";
import { useState } from "react";

import { TestContainer, Answer, ButtonQuiz, RightSide, LeftSide, QuestionTitle  } from "./quiz-one.styles";

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

    if (isFinished) {
      if (score < 25) return(
      <main>
            <Answer>A</Answer>
            <ButtonQuiz onClick={() => window.location.href = '/'}> Go to the home page </ButtonQuiz>
      </main> 
      );
      if (score < 32) return(
        <main>
              <Answer>B</Answer>
              <ButtonQuiz onClick={() => window.location.href = '/'}> Go to the home page </ButtonQuiz>
        </main>
        );
        if (score <= 40) return(
          <main>
                <Answer>C</Answer>
                <ButtonQuiz onClick={() => window.location.href = '/'}> Go to the home page </ButtonQuiz>
          </main>
          );
    };

    return (
        <TestContainer>
            <h2>This is the first quiz</h2>
            <LeftSide>
              <div className='questionNumber'>
                  <span>Question {actualQuestion + 1} from</span> {questions.length}
              </div>
              <QuestionTitle>{questions[actualQuestion].title}</QuestionTitle>
            </LeftSide>
              <RightSide>
              {questions[actualQuestion].options.map((respuesta) => (
                  <ButtonQuiz key={respuesta.textoRespuesta} onClick={(event) => handleAnswerSubmit(respuesta.isCorrect, event)}>
                  {respuesta.textoRespuesta}
                  </ButtonQuiz>
          ))}
            </RightSide>
      </TestContainer>
    );
};

export default QuizOne;