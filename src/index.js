// archivo de servidor o de Node Js, nos va a permitir podercrear nuestro servidor
//gracias a este archivo vamos a arrancar nuestro servidor

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express(); // servidor
const {mongoose} = require('./models/database');


//Settings ==> Seccion de configuración 
app.set('port', process.env.port || 3000);


//MiddLewares ==> funciones que se ejecutan antes de que lleguen a las rutas
app.use(morgan('dev'));
app.use(express.json());


//Routes ==> rutas o urls que podrá tener el servidor 
app.use('/api/tasks', require('./routes/task_routes'));


//Static files ==> archivos estaticos, es para decirle a express en donde irán mis archivos estaticos
app.use(express.static(path.join(__dirname,'public')))


// Stating the server ==> inicio del servidor

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})