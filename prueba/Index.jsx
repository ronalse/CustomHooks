import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import {First} from './Components/First.jsx';
import {Second} from './Components/Second.jsx';
import {Third} from './Components/Third.jsx';
import {Four} from './Components/Four.jsx';
import "./Index.css"


export const Index = () => {
  const [idCategory, setIdCategory] = useState({});
  const [idSubcategory, setIdSubcategory] = useState({});
  const [idColor, setIdColor] = useState({});

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<First setIdCategory={setIdCategory} />} />
        <Route path="/subcategory/:id" element={<Second setIdSubcategory={setIdSubcategory} idCategory={idCategory} />} />
        <Route path="/color/:id" element={<Third setIdColor={setIdColor} idSubcategory={idSubcategory} />} />
        <Route path="/recomendations" element={<Four idCategory={idCategory} idSubcategory={idSubcategory} idColor={idColor} />} />
      </Routes>
    </Router>

  );
};
