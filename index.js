import Alumno from "./src/models/alumno.js"
import {sumar, restar, multiplicar, dividir} from "./src/modules/matematica.js"
/*import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from
"./modules/omdb-wrapper.js"*/
import express from "express"; // hacer npm i express 
import cors from "cors"; // hacer npm i cors

// NO HACER OMDB, TERMINAR ALUMNO Y ENTREGAR

const app = express();
const port = 3000; // El puerto 3000 (http://localhost:3000)
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON
//
// EndPoints
//
app.get('/', (req, res) => { // EndPoint "/"
    res.send('Ya estoy respondiendo!');
    res.status(200).send;
}) 
app.get('/saludar/:nombre', (req, res) => {
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
//        || ||                          || ||
//        || ||                          || ||
//      Endpoints utilizando modulo Matematica.js
//        || ||                          || ||
//        \/ \/                          \/ \/
                                           
app.get('/matematica/sumar', (req,res) => { // ?n1={numero}&n2={numero}
   let result = sumar(+(req.query.n1),+(req.query.n2));
   result = result.toString()
    res.status(200).send(result);

}) // 20 + 30 = 50
app.get('/matematica/restar', (req,res) => { // ?n1={numero}&n2={numero}
    let result = restar(+(req.query.n1),+(req.query.n2));
    result = result.toString()
    res.status(200).send(result);
 
 }) // 40 - 30 = 10
 app.get('/matematica/multiplicar', (req,res) => { // ?n1={numero}&n2={numero}
    let result = multiplicar(+(req.query.n1),+(req.query.n2));
    result = result.toString()
    res.status(200).send(result);
 
 }) // 4 * 3 = 12
 app.get('/matematica/dividir', (req,res) => { // ?n1={numero}&n2={numero}
    if (+(req.query.n2) == 0 || +(req.query.n1) == 0) {
        res.status(400).send('El divisor no puede ser 0');
    } else {
        let result = dividir(+(req.query.n1),+(req.query.n2))
    result = result.toString()
    res.status(200).send(result);
    } // 40%5 = 8
 })
//        || ||                      || ||
//        || ||                      || ||
//      Endpoints utilizando modulo Alumno.js
//        || ||                      || ||
//        \/ \/                      \/ \/
const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido" , "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao" , "32623391", 18));

app.get('/alumnos', (req,res) => { // Funciona
    const result = alumnosArray
    res.status(200).send(result);
})
app.get('/alumnos/:dni', (req,res) => { // Funciona con los tres
    const result = alumnosArray.find(alumnosArray => alumnosArray.DNI == req.params.dni)
    res.status(200).send(result);
})
app.post('/alumnos', (req,res) => {
    alumnosArray.push(new Alumno(req.body))
    res.status(201).send;
})
app.delete('/alumnos', (req,res) => {
/*if (){

}*/
})

//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
    console.log(`TP03 app listening on port ${port}`)
})



/* getIntegerOrDefault
// ParseInt para validar numero sea si o si numero y que se haya mandado
// con simbolo de pregunta se valida si es invalido o no
// "node index.js" para iniciar en consola node
*/