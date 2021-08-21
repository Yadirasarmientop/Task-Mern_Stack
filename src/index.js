// archivo de servidor o de Node Js, nos va a permitir podercrear nuestro servidor
//gracias a este archivo vamos a arrancar nuestro servidor

const express = require('express');
const app = express(); // servidor

app.listen(3000,()=>{
    console.log('server on port 3000')

})