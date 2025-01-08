import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "../Index.css";
import { useFinalQuestion } from '../Hooks/CustomHooks';
import { motion } from "framer-motion"
import { useLanguage } from './LanguageContext.jsx';
// is_free_shipping : name for free delivery

export const Four = ({ idCategory, idSubcategory, idColor }) => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState(true)
    const { finalQuestion } = useFinalQuestion({ idCategory, idSubcategory, idColor, filter });
    const { language, translations } = useLanguage();

    const handleBack = () => {
            navigate("/");
    };
    console.log(finalQuestion)

    
    const HandleFilter = () => {
        setFilter(!filter)
        console.log(filter)
    }

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
            <h1 className='title'>{translations[language].recommendations} {idCategory.name}: {idSubcategory.name} {translations[language].color} {idColor.name}</h1>
            <br></br>
            <h2>{translations[language].selectOne}</h2>
            </>) : (
                <span>{translations[language].goBack}</span>
            )}
            
            <Button className='BotonFinal'
                variant="contained"
                onClick={handleBack}
            >
                {translations[language].back} 
            </Button>
            <span>{translations[language].filterFreeShipping}</span>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                    onClick={HandleFilter}
            />
            <div className="row InfiniteScrollContainer">
            {finalQuestion.length > 0 ? (
                    finalQuestion.map((optionFour) => (
                        <div className="col col-md-4 col-xl-4" key={optionFour.id} style={{height: 'auto'}}>
                            <div className="card mb-3 mx-auto" style={{ width: '300px', height: '300px'}}>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{optionFour.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        {translations[language].price}: {optionFour.price} euros
                                    </h6>
                                    <p className="card-text">
                                        {translations[language].shipping}: {optionFour.is_free_shipping ? translations[language].yes : translations[language].no} <br />
                                        {translations[language].available}: {optionFour.stock_quantity}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <Box sx={{ display: 'flex' }}>
                        <p>{translations[language].error}</p>
                        <CircularProgress />
                    </Box>
                )}
            </div>
        </div>
        </motion.div>
    );
}
