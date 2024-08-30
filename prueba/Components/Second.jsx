import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import "../Index.css"
import { SecondEndpoint } from './Endpoints';
import { motion } from "framer-motion"

export const Second = ({setIdSubcategory, idCategory}) => {
    const {id} = useParams();
    const [SecondQuestion, setSecondQuestion] = useState([]);
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);

    useEffect( ()=>{
            if (id && Object.keys(idCategory).length > 0){
                SecondEndpoint(id).then(setSecondQuestion)
                console.log(idCategory)
            }else{
                console.log("error id no encontrado", id);
                alert("error no se encontro nada");
                navigate("/");
                console.log(idCategory)
            }
    },[id, idCategory])

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
          <h1>Selecciona una opcion de {idCategory.name} para seguir adelante</h1>
          <Button className='BotonFinal'
                  variant="contained"
                  onClick={handleBack}
              >
                  Regresar 
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