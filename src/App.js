import { Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import QuizOne from './components/quiz-one/quiz-one.component';
import QuizTwo from './components/quiz-two/quiz-two.component';
import Navigation from './routes/navigation/navigation.component';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element = {<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path='quiz-one' element={<QuizOne/>} />         
          <Route path='quiz-two' element={<QuizTwo/>} />   
        </Route>
      </Routes>
    </div>
  );
};

export default App;
