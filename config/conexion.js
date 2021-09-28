const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5440645',
    password: 'UacVi6ZcLa',
    port:'3306',
    database: 'sql5440645'
});

conexion.connect((err)=>{
    if(err){
        console.log('ha ocurrido un error :'+ err)
    }
    else
    {console.log(' la base de datos se conecto!!!')}
});

module.exports = conexion