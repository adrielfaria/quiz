import Directory from '../../components/directory/directory.component';
import QuizLinks from '../quiz-links/quiz-links.component';

import { HomeContainer } from './home.styles';

const Home = () => {
    return (
        <HomeContainer>
            <Directory />
            <QuizLinks />
        </HomeContainer>
    );
};

export default Home;