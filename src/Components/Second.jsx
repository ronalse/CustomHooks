import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import "../Index.css"
import { SecondEndpoint } from '../fetch/FetchEndpoints';
import { motion } from "framer-motion"
import {useSecondQuestion} from "../Hooks/CustomHooks"
import { useLanguage } from './LanguageContext.jsx';


export const Second = ({setIdSubcategory, idCategory}) => {
    const {SecondQuestion} = useSecondQuestion({idCategory});
    const {id} = useParams();
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);
    const { language, translations } = useLanguage();

    const handleSubcategoryClick = (id, name) => {
        setFadeOut(true);
        setTimeout(() => {
        setIdSubcategory({id, name});
        console.log(id, name)
        navigate(`/color/${id}`);
        }, 500);
    };
    const handleBack = () => {
        navigate("/");
};

  return (
      <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}>
      <div className="container">
      <h1>{translations[language].selectOption} {idCategory.name}</h1>
          <Button className='BotonFinal'
                  variant="contained"
                  onClick={handleBack}
              >
                 {translations[language].back}
          </Button>
      <Fade in={!fadeOut} timeout={500}>
        <ul>
          {SecondQuestion.length > 0 ? (
               SecondQuestion.map((optionTwo) => (
                  <li key={optionTwo.id}>
                      <Button className='Botones'
                      key={optionTwo.id}
                      variant="contained"
                      onClick={() => handleSubcategoryClick(optionTwo.id, optionTwo.name)}>
                          {optionTwo.name}
                      </Button>
                  </li>
          ))) : (
              <Box sx={{ display: 'flex' }}>
              <CircularProgress />
              </Box>
          )
      }
        </ul>
        </Fade>
      </div>
      </motion.div>
  );
};