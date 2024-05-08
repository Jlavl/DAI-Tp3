import Alumno from "./src/models/alumno.js"
import {sumar, restar, multiplicar, dividir} from "./src/modules/matematica.js"
/*import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from
"./modules/omdb-wrapper.js"*/
import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors


const app = express();
const port = 3000; // El puerto 3000 (http://localhost:3000)
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON
//
// Aca pongo todos los EndPoints
//
app.get('/', (req, res) => { // EndPoint "/"
    res.send('Ya estoy respondiendo!');
    res.status(200).send;
}) 
app.get('/saludar/:nombre', (req, res) => { // EndPoint "/saludar"
    res.send('Hola ' + req.params.nombre);
    res.status(200).send;
})
app.get('/validarfecha/:ano/:mes/:dia', (req,res)  => {
    let ms = Date.parse(req.params.ano, req.params.mes + 1, req.params.dia + 1)
    console.log(ms)
    if (ms != null){
        res.status(200).send;
    } else {
        res.status(400).send;
    }

})
// || ||                            || ||
// || ||                            || ||
// Endpoints utilizando modulo Matematica.js
// || ||                            || ||
// \/ \/                            \/ \/


//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// getIntegerOrDefault
// ParseInt para validar numero sea si o si numero y que se haya mandado
// con simbolo de pregunta se valida si es invalido o no
// node index.js para iniciar