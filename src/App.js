import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import QuizOne from './components/quiz-one/quiz-one.component';
import Navigation from './routes/navigation/navigation.component';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element = {<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path='quiz-one' element={<QuizOne/>} />         
        </Route>
      </Routes>
    </div>
  );
};

export default App;
