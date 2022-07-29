import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const QuizLinks = () => {
    return (
      <Fragment>
        <div>
          <Link to="quiz-one">
                <h2>Go to quiz one</h2>
            </Link>
            <Link to="quiz-two">
                <h2>Go to quiz two</h2>
            </Link>
        </div>
        <Outlet />
      </Fragment>
    );
  };
export default QuizLinks;