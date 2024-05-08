/* Módulo OMDBWrapper*/
import axios from "axios";
const APIKEY = "75e13b6e"; // Poné tu APIKEY, esta no funciona.
const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
        };
// hacer
return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };
// hacer
return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };
// hacer
return returnObject;
};

let respuesta = await Test();
console.log('respuesta', respuesta);
const Test = async (searchText) => {
    const requestString = `https://www.omdbapi.com/?apikey=7c62gb5e&s=cars`;
    const apiResponse = await axios.get(requestString);
    return apiResponse.data;
};
// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};















