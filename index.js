// console.log('nodejs');

require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

const cors = require('cors');

// express
const app = express();

app.use(cors({
    origin: '*'
}));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

// admitir
app.use(express.json());

//config
app.set('port', port);

//rutas
app.use('/api', require('./rutas'));

//Iniciamos express
app.listen(app.get('port'), (error)=>{
    if (error) {
        console.log('Error al iniciar servidor: ' + error);
    } else {
        console.log('Servidor iniciado en el puerto: ' + port);
    }
});
