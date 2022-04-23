import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PdfViewPage from './pages/PdfViewPage';
import PhotoPage from './pages/PhotoPage';
import VideoPage from './pages/VideoPage'
import Homepage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Homepage/>}/>
      <Route path='/pdf_view' element={<PdfViewPage/>}/>
      <Route path='/photo' element = {<PhotoPage/>}/>
      <Route path='/video' element = {<VideoPage/>}/>
    </Routes>
  </BrowserRouter>
);
