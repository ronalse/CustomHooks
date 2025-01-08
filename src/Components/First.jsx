import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import "../Index.css"
import { FirstEndPoint } from "../fetch/FetchEndpoints";
import { motion } from "framer-motion"
import { useFirstQuestion } from "../Hooks/CustomHooks";
import { useLanguage } from './LanguageContext.jsx';

const iconMap = {
    'Electrónica': 'fa-microchip',
    'Ropa': 'fa-tshirt', 
    'Hogar': 'fa-home', 
    'Deportes': 'fa-running' 
};


export const First = ({ setIdCategory }) => {
    const {FirstQuestion} = useFirstQuestion();
    const [fadeOut, setFadeOut] = useState(false);
    const navigate = useNavigate();
    const { language, translations } = useLanguage();
    const handleCategoryClick = (id, name) => {
        setFadeOut(true); 
        setTimeout(() => {
            setIdCategory({id, name});
            navigate(`/subcategory/${id}`);
        }, 500); 
    };

    const Titulo = translations[language].title;
    return ( 
        <motion.div
		onClick={(e) => e.stopPropagation()}
		initial={{ y: -50, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		exit={{ y: 50, opacity: 0 }}
		transition={{ duration: 0.5 }}>
        <div className="container">
            <h1>{Titulo}</h1>
            <h1>{translations[language].selectOption}</h1>
        <Fade in={!fadeOut} timeout={500}>
            <ul>
                {FirstQuestion.length > 0 ? (
                    FirstQuestion.map((option) => (
                        <li key={option.id}>
                            <Button className="Botones"
                                variant="contained"
                                onClick={() => handleCategoryClick(option.id, option.name)}
                                startIcon={<i className={`fas ${iconMap[option.name]}`} />}
                            >
                                {option.name}
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
