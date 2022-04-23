import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import 'bootstrap/dist/css/bootstrap.min.css';
import PdfViewPage from './pages/PdfViewPage';
import PhotoPage from './pages/PhotoPage';
import VideoPage from './pages/VideoPage'
import Homepage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById("root"));


const firebaseConfig = {
  apiKey: "AIzaSyAdTrlKUDL7YRGKmubX7hLrPtNOeqHowfo",
  authDomain: "gage-web.firebaseapp.com",
  projectId: "gage-web",
  storageBucket: "gage-web.appspot.com",
  messagingSenderId: "535587474467",
  appId: "1:535587474467:web:a0709d7388e9f5edea3596",
  measurementId: "G-ER6N84GQDB"
};
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Homepage/>}/>
      <Route path='/pdf_view' element={<PdfViewPage storage = {storage}/>}/>
      <Route path='/photo' element = {<PhotoPage/>}/>
      <Route path='/video' element = {<VideoPage/>}/>
    </Routes>
  </BrowserRouter>
);
