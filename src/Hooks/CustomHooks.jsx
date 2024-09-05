import { FirstEndPoint, SecondEndpoint, ThirdEndpoint, FourEndpoint } from "../fetch/FetchEndpoints";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const useFirstQuestion = () =>{
    const [FirstQuestion, setFirstQuestion] = useState({});
    useEffect(() => {
        FirstEndPoint().then(setFirstQuestion);
    }, []);

    return{
        FirstQuestion
    }
}


export const useSecondQuestion = ({idCategory}) =>{
    const navigate = useNavigate();
    const [SecondQuestion, setSecondQuestion] = useState({});
    const {id} = useParams();
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

return {SecondQuestion }
}

export const useThirdQuestion = ({idSubcategory}) =>{
    const [ThirdQuestion, setThirdQuestion] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
      if (id && Object.keys(idSubcategory).length > 0) {
          ThirdEndpoint(id).then(setThirdQuestion);
          console.log(idSubcategory);
      } else {
          console.error("Error: id no encontrado o idSubcategory es un array vacío", id);
          navigate("/");
          alert("Error: No se encontraron subcategorías válidas.");
          
      }
  }, [id, idSubcategory])
  return {
    ThirdQuestion
  }
  }

  export const useFourQuestion = ({ idCategory, idSubcategory, idColor }) => {
    const [FourQuestion, setFourQuestion] = useState({});  // Cambié a un array

    useEffect(() => {
        console.log(idCategory, " primer", idSubcategory, "segundo", idColor, "tercero");
        if (idCategory && idSubcategory && idColor) {
            FourEndpoint(idCategory.id, idSubcategory.id, idColor.id).then(setFourQuestion);
        } else {
            console.log("Error: faltan datos.");
        }
    }, [idCategory, idSubcategory, idColor]);

    return {
        FourQuestion
    };
};

export const useFinalQuestion = ({ idCategory, idSubcategory, idColor, filter }) => {
    const { FourQuestion } = useFourQuestion({ idCategory, idSubcategory, idColor });
    const [finalQuestion, setFinalQuestion] = useState({});

    useEffect(() => {
        if (FourQuestion.length > 0) {
            if (filter === true) {
                const result = FourQuestion.filter((envio) => envio.is_free_shipping === true);
                setFinalQuestion(result);
            } else {
                setFinalQuestion(FourQuestion);
            }
        } else {
            console.log("No se encontraron preguntas.");
        }
    }, [filter, FourQuestion]);

    return {
        finalQuestion,
        filter
    };
};