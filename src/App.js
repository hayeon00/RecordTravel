import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import IntroPage from './pages/IntroPage';
import TravelPage from './pages/TravelPage';
import MyPage from './pages/MyPage';
import AddPage from './pages/AddPage';

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='IntroPage' element={<IntroPage/>} />
                <Route path='TravelPage' element={<TravelPage/>} />
                <Route path='MyPage' element={<MyPage/>} />
                <Route path='AddPage' element={<AddPage/>} />
            </Routes>
        </BrowserRouter>

        
    )
}

export default App;
