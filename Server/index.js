const express = require('express');
const cors = require('cors');
const {connectDB} = require('./data/config');
const PORT  = 3000;
const taskRoutes = require('./Routes/taskRoutes');

// Iniciar instancia del servidor
const app = express();
app.use(cors());
app.use(express.json());

//Hacer la conexión a la base de datos
connectDB();

//EXPORTAR LOS ENDPOINTS
app.use('/',taskRoutes);

//Defibir la escucha
app.listen(PORT,()=>{
    console.log("Server running in http://localhost:"+PORT)
});