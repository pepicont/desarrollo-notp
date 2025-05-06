/*EJERCICIO 1
let miArray = [1,2,3,4,5,6,7,8,9,10];
for (let i=0;i<miArray.length;i++){
  console.log(miArray[9-i]);
}*/

/*EJERCICIO 2
const funcEj2 = (arrayPalabras, cadenaString) => {
    let cont = 0;
   
    // Recorrer el array con forEach
    arrayPalabras.forEach(element => {
        if (element.includes(cadenaString)) {
            cont++;
        }
    });
   
    // Imprimir el resultado
    console.log(`La palabra "${cadenaString}" se encuentra ${cont} veces.`);
}

const palabras = [`hola`, `holanda`, `ada`,`holagavria`];
funcEj2(palabras, `hola`);  // Salida: La palabra "hola" se encuentra 2 veces.
*/

/*EJERCICIO 2
let cadena= `abaaacbdeiiioeeaaabbcduaabbbbbbcbecdabdddioeuaaaiiiibebeeecdbdddciiioeuee`;
let letra=[`a`,`b`,`c`,`d`,`e`,`i`,`u`,`o`];
let cont2=0;
console.log(`la cantidad de símbolos que hay son ${cadena.length}`);
for(let j=0;letra.length>j;j++){
    let cont=0;
    for (let i=0;i<cadena.length;i++){
        if(letra[j]==cadena[i])
            cont++;
}
cont2+=cont;
console.log(`la letra ${letra[j]} se encuentra ${cont} veces`);
}
console.log(`verificación: ${cont2}`);*/

/*EJERCICIO 3 
const funcion = (arrayMultiple, cadena) => {
  let array = [];
  arrayMultiple.forEach(element => {
    if(typeof element === cadena)
      array.push(element);
  });
return array;
}
const arrayMultiple=["hola",2,["hola, yo"], null, true, undefined,{a:2}];
const cadena="number";
let arrayCondicion = funcion(arrayMultiple,cadena);
console.log(arrayCondicion);*/

/*EJERCICIO 4 

const funcion = (array, cadena) => {
  let posicion = array.indexOf(cadena);
  if (posicion === -1){
    array.push(cadena);
    posicion = array.length - 1;
  }
  return posicion;
}

const array=["hola",2,["hola, yo"], null, true, undefined,{a:2}];
const cadena="hola amigos de youtube";
let posicion = funcion(array,cadena);
console.log(posicion);*/

/*EJERCICIO 5 
let frase = "materias aprobadas 0 habiendo rendido 0 veces"
function aprobar(){
  let match = frase.match(/materias aprobadas (\d+) habiendo rendido (\d+) veces/);
  if (match){
    let aprobadas = parseInt(match[1]);
    let rendidas = parseInt(match[2]);
    aprobadas++;
    rendidas++;
    frase= `materias aprobadas ${aprobadas} habiendo rendido ${rendidas} veces`;
  } 
}

function reprobar(){
  let match = frase.match(/materias aprobadas (\d+) habiendo rendido (\d+) veces/);
  if (match){
    let aprobadas = parseInt(match[1]);
    let rendidas = parseInt(match[2]);
    rendidas++;
    frase= `materias aprobadas ${aprobadas} habiendo rendido ${rendidas} veces`;
  } 
}
console.log(frase);
aprobar();
console.log(frase);
reprobar();
console.log(frase);*/

/*EJERCICIO 1 DE OBJS 
let grades = [
	{ studentId: 66666, grade: 6 },
	{ studentId: 12345, grade: 9 },
	{ studentId: 66666, grade: 8 },
	{ studentId: 12345, grade: 1 },
];
const calcularPromedio = (grades) =>{
  const acumuladores={}
  grades.forEach(({studentId, grade}) => { //desestructurar, los nombres aquí deben ser los mismos que en el objeto
    if (!acumuladores[studentId]){
      acumuladores[studentId] = {suma: 0, cantidad: 0};
    }
    acumuladores[studentId].suma+= grade;
    acumuladores[studentId].cantidad++;
  });
  
  const resultado = [];
  
  for (const studentId in acumuladores){ //foreach sobre un obj sería
    const {suma, cantidad} = acumuladores[studentId];
    resultado.push({
      studentID: Number(studentId),
      average: suma / cantidad
    });
  }
  return resultado;
}
console.log(calcularPromedio(grades));*/

/*EJERCICIO 2 DE OBJS
function Persona(firstName,lastName){
  this.firstName=firstName;
  this.lastName=lastName;
}
function Estudiante(firstName,lastName){
  Persona.call(this,firstName,lastName);
}
Estudiante.prototype=Object.create(Persona.prototype) //creamos un persona.prototype y se lo asignamos como prototypo de estudiante.prototype
Estudiante.prototype.constructor= Estudiante; //agregamos de nuevo el constructor porque se puso Persona como constructor de estudiante con lo de arriba

function Alumno3k03(firstName,lastName){
  Estudiante.call(this,firstName,lastName);
}
Alumno3k03.prototype=Object.create(Estudiante.prototype);
Alumno3k03.prototype.constructor=Alumno3k03;

const Pepi = new Alumno3k03("Stefano","Conti");

const mostrarNombres = (objeto) =>{
  console.log(`Los datos del alumno son:\nNombre: ${objeto.firstName}\nApellido: ${objeto.lastName}`);
  let prototipo = Object.getPrototypeOf(objeto);
  console.log();
  console.log("Aquí sus prototipos: ");
  while(prototipo!=null){
    console.log(`→ ${prototipo.constructor.name}`); //esto porque sino muestra el objeto y yo quiero que muestre el nombre del constructor
    prototipo = Object.getPrototypeOf(prototipo);
  }
}
mostrarNombres(Pepi);*/