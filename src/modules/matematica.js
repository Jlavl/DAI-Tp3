/* Este es el módulo "matematicas" */
const PI = 3.14;
function sumar(x, y) {
let rtnvalue = x + y;
return rtnvalue;
}
function restar(x,y) {
    let rtnvalue = x - y;
    return rtnvalue;
}
const multiplicar = (a, b) => a*b;
const dividir = (a, b) => a/b;

// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {PI, sumar, restar, multiplicar, dividir};
