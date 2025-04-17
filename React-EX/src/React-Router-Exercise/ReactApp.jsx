import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageRouter from './HomePageRouter';
import PageElement1 from './pages/PageElement1.jsx'
import PageElement2 from './pages/PageElement2.jsx'
import MainSecondPage from './pages/MainPages/MainSecondPage.jsx' 

export default function ReactAppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePageRouter />} >
            <Route path='element1' element={<PageElement1/>}/>
            <Route path='element2'element={<PageElement2/>}/>
          </Route>
          <Route path='second-main-page' element={<MainSecondPage/>}/>
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}
