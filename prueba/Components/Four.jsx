import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "../Index.css";
import { FourEndpoint } from './FetchEndpoints';
import { motion } from "framer-motion"


export const Four = ({ idCategory, idSubcategory, idColor }) => {
    const [FourQuestion, setFourQuestion] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(idCategory && idSubcategory && idColor).length > 0 ) {
            FourEndpoint(idCategory.id, idSubcategory.id, idColor.id).then(setFourQuestion);
        } else {
            console.log("error");
        }
    }, [idCategory, idSubcategory, idColor]);

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
        <div>
            {idCategory.name ? (
            <>
            <h1 className='title'>Recomendaciones de {idCategory.name}: {idSubcategory.name} color {idColor.name}</h1>
            <br></br>
            <h2>Selecciona uno</h2>
            </>) : (
                <span>regresa al inicio</span>
            )}
            
            <Button className='BotonFinal'
                variant="contained"
                onClick={handleBack}
            >
                Regresar 
            </Button>
            <div className="row InfiniteScrollContainer">
            {FourQuestion.length > 0 ? (
                    FourQuestion.map((optionFour) => (
                        <div className="col col-md-4 col-xl-4" key={optionFour.id} style={{height: 'auto'}}>
                            <div className="card mb-3 mx-auto" style={{ width: '300px', height: '300px'}}>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{optionFour.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Precio: {optionFour.price} euros
                                    </h6>
                                    <p className="card-text">
                                        Envio: {optionFour.is_free_shipping ? "Si" : "No"} <br />
                                        Disponibles: {optionFour.stock_quantity}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <Box sx={{ display: 'flex' }}>
                        <p>algo salio mal, intentalo mas tarde</p>
                        <CircularProgress />
                    </Box>
                )}
            </div>
        </div>
        </motion.div>
    );
}
