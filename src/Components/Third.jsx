import React, {useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import "../Index.css"
import { motion } from "framer-motion"
import { useThirdQuestion } from '../Hooks/CustomHooks';


export const Third = ({setIdColor , idSubcategory}) =>{
    const {ThirdQuestion} = useThirdQuestion({idSubcategory})
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);

const handleColorClick = (id, name) => {
    setFadeOut(true);
    setTimeout(() => {
    setIdColor({id, name});
    navigate(`/recomendations`); 
    }, 500)
  };
  const handleBack = (id) => {
    console.log("el regreso es" ,id)
    navigate(`/subcategory/${id}`);
};
  return (
    <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}>
    <div>
      <h1>Elije un color de {idSubcategory.name}</h1>
      <Button className='BotonFinal'
                variant="contained"
                onClick={() =>handleBack(idSubcategory.id)}
            >
                Regresa al inicio 
        </Button>
      <Fade in={!fadeOut} timeout={500}>
      <ul> 
        {ThirdQuestion.length > 0 ? (
          ThirdQuestion.map((optionThree) => (
            <li key={optionThree.id}>
              <Button className='Botones'
              key={optionThree.id}
              variant="contained"
              onClick={() => handleColorClick(optionThree.id, optionThree.name)}>
                {optionThree.name}
              </Button>
            </li>
          ))
        ) : (
            <Box sx={{ display: 'flex' }}>
            <CircularProgress />
            </Box>
        )}
      </ul>
      </Fade>
    </div>
    </motion.div>
  );
};
