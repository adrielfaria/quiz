import styled from 'styled-components';

export const TestContainer = styled.div`
    background-color: #252d4a ;
    max-width: 100%;
    min-width: 450px;
    height: min-content;
    min-height: 200px;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
    justify-content: space-evenly;
    img{
        width: 200px;
    }   
`;

export const LeftSide = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 30px;
    color: #fff;
`;

export const QuestionTitle = styled.div`
    margin-top: 5px;
    margin-bottom: 20px;
`;

export const RightSide = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ButtonQuiz = styled.button`
    width: 100%;
    font-size: 20px;
    color: #ffffff;
    background-color: #252d4a;
    border-radius: 15px;
    display: flex;
    padding: 15px;
    margin-bottom: 10px;
    justify-content: flex-start;
    align-items: center;
    border: 5px solid #234668;
    cursor: pointer;

    &:hover {
        background-color: #234668 ;
    }
`;

export const Answer = styled.div`
    font-size: 30px;
    color: #fff;
    margin-bottom: 20px;
`;

