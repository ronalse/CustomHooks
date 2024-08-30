
const apiKey = "d919a40d-32b3-4107-a974-df10a34297a6"

export const FirstEndPoint = async () => {
    const myHeaders = new Headers();
    myHeaders.append("X-API-Key", apiKey);
    
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    
    const firstApi = "https://technicalproof.lisdatasolutions.com/api/v1/recommender/category"
    try {
        const response = await fetch(firstApi, requestOptions);
        const result_1 = await response.json();
        return result_1
    } catch (error) {
        return console.error(error);
    }

};



export const SecondEndpoint = async (id) =>{
    const myHeaders = new Headers();
    myHeaders.append("X-API-Key", apiKey);
    
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    
    const secondApi = `https://technicalproof.lisdatasolutions.com/api/v1/recommender/category/${id}/subcategory`
      try {
        const response = await fetch(secondApi, requestOptions)
        const result_2 = await response.json()
        return result_2
      } catch (error){
        return console.log(error)
      }
      
}

export const ThirdEndpoint = async (id) =>{
    const myHeaders = new Headers();
    myHeaders.append("X-API-Key", apiKey);
    
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    
    const thirdApi = `https://technicalproof.lisdatasolutions.com//api/v1/recommender/subcategory/${id}/color`
    try{
        const response = await fetch(thirdApi, requestOptions)
        const result_3 = await response.json()
        return result_3
    }catch (error){
        console.log(error)
    }
    
}

export const FourEndpoint = async (idCategory, idSubcategory, idColor) => {
    const myHeaders = new Headers();
    myHeaders.append("X-API-Key", apiKey);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    const url = `https://technicalproof.lisdatasolutions.com/api/v1/recommender/product?id_category=${idCategory}&id_subcategory=${idSubcategory}&id_color=${idColor}`;

    try{
        const response = await fetch(url, requestOptions)
        const result_4 = await response.json()
        return result_4
    }catch (error){
        console.log(error)
    }

};