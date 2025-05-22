import http from 'node:http'
import { fileURLToPath } from 'node:url'; //sacar el path del sistema
import fs from 'node:fs'; //para leer y escribir archivos
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url)); //sacar path hasta acá


const server = http.createServer((req, res) => {
 
  const method = req.method //nos traemos método y url de la request
  
  if (method!=="GET"){
    res.writeHead(405, { 'Content-Type': 'text/plain' }); // error + tipo de contenido
    let mensaje = "Error, no usaste el GET"; //p mandarlo al log dsp
    res.end(mensaje); //mensaje
    console.log("Usa el GET, gato");

    logRequest(req,res,mensaje); //agregamos func para el log después de cada request
    
    return //para cortar y que no se ejecute nada mas (seguridad mas que nada)

    //EN CMD
    //curl -X POST http://localhost:3000
    // salida: Error, no usaste el GET. Validado, funciona
  }

  let url = req.url //mostraría todo luego del dominio "hostname "y puerto. en caso localhost3000/index.html --> index.html mostraría 

  //requerimiento de enrutamiento:
  if (url === "/" || url === "/home" || url === "/home.html" || url === "/index"){
    url= "/index.html";
  }

  const urlCompleta = path.join(__dirname,'static',url) //hace la ruta completa para redireccionar

  //ahora función para leer el archivo (página que pidió en este caso)
  fs.readFile(urlCompleta, (err, data) => { //fs.readFile(path, callback)
    if (err) { //si al leer da error
      if (err.code === 'ENOENT') { //del tipo ErrorNOENTry
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        let mensaje = 'Página no encontrada'; //p mandarlo al log dsp
        res.end(mensaje);
        console.log("Error, no encontramos la página")
        logRequest(req,res,mensaje); //agregamos func para el log después de cada request. Esta se ejecuta sea cual sea el error, por eso abajo acá
        
      } else { //otro tipo de error al leer
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        let mensaje = '500 Internal Server Error. Anda a saber qué pasó'; //p mandarlo al log dsp
        res.end(mensaje);
        console.error('Error al leer archivo:', err); //muestra el error por consola
        logRequest(req,res,mensaje); //agregamos func para el log después de cada request. Esta se ejecuta sea cual sea el error, por eso abajo acá
      }

      return;
    }
    //NO HUBO ERROR
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data); //Manda pagina
    console.log(`entramos a ${urlCompleta}`) //validar por consola
    let mensaje="Entramo a la pagina muchachoooo"; //p mandarlo al log dsp
    logRequest(req,res,mensaje); //agregamos func para el log después de cada request

  });

  function logRequest(req, res,mensaje) { //funcion para manejar todos los logs 
    const timestamp = new Date().toISOString(); //te traes una instantanea del momento
    const logMessage = `[${timestamp}] ${req.method} ${req.url} - ${res.statusCode} - ${mensaje} \n`; //armas un mensaje con fechatiempo,metodo,url,statusCode

    fs.appendFile('mycoolserver.log', logMessage, (err) => { //al archivo mycoolserver.log le agregamos al final el mensaje y en caso de error mostramos el mismo x consola
      if (err) {
        console.error('❌ No se pudo escribir en el log');
      }
    });
  }

});

  








server.listen(3000, () => console.log("Hola! Servidor escuchando en http://localhost:3000"));



