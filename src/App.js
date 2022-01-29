import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Photos from './pages/Photos';
import Projects from './pages/Projects';

function App() {
  return (
    <Routes>
        {/* home page */}
        <Route exact path='/' element={
            <Home/>
        }/>

        <Route exact path='/projects' element={
            <Projects/>
        }/>

        <Route exact path='/photos' element={
            <Photos/>
        }/>
    </Routes>
  );
}

export default App;
