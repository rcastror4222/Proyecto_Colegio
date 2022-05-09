const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");


//Creando el servidor
const app = express();

//Conectamos a la base de datos
conectarDB();
app.use(cors())
app.use(express.json());
app.use('/api/estudiante', require('./routes/estudiante'));



app.listen(4000, ()=>{
    console.log('El servidor está funcionando correctamente')
})

//npm run dev Para iniciar el servidor