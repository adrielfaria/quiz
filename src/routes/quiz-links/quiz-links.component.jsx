import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { LinkContainer, LinksContainer } from "./quiz-links.styles";

const QuizLinks = () => {
    return (
      <Fragment>
        <LinksContainer>
          <LinkContainer to="quiz-one">
                <h2>Go to quiz one</h2>
            </LinkContainer>
            <LinkContainer to="quiz-two">
                <h2>Go to quiz two</h2>
            </LinkContainer>
            
        </LinksContainer>
        <Outlet />
      </Fragment>
    );
  };
export default QuizLinks;