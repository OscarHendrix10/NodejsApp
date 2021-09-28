const router = require('express').Router()
const conexion = require('./config/conexion')


//Asignamos todas las rutas
// router.get('/', function(req, res){
//     res.send('Hola desde rutas/inicio');
// });


// Rutas para todas las peticiones
// get conductores
router.get('/', function(req, res){
    let sql = 'SELECT * FROM tb_conductores;';
    conexion.query(sql, (err, rows, files)=>{
        if (err) throw err;
        else {
            res.json(rows);
        }
    })
});

// get conductores
router.get('/:id', function(req, res){
    const {id} = req.params
    let sql = 'SELECT * FROM tb_conductores WHERE id = ?;';
    conexion.query(sql, [id], (err, rows, files)=>{
        if (err) throw err;
        else {
            res.json(rows);
        }
    })
});

// agregar conductores
router.post('/', function(req, res){
    const {nombre, puesto, departmento, edad, tipoLicencia,
         fechaIngreso, antiguedad, ubicacion} = req.body;

    let sql = `INSERT INTO tb_conductores (nombre, puesto, departamento, edad, tipoLicencia, fechaIngreso, antiguedad, ubicacion) 
    VALUES ('${nombre}', '${puesto}', '${departmento}', '${edad}', '${tipoLicencia}', '${fechaIngreso}', '${antiguedad}', '${ubicacion}');`;

    conexion.query(sql, (err, rows, files)=>{
        if (err) throw err;
        else {
            res.json({status: 'Conductor agregado'});
        }
    })
})

// delete conductores
router.delete('/:id', function(req, res){
    const {id} = req.params
    let sql = `DELETE FROM tb_conductores WHERE id = ${id};`;
    conexion.query(sql, [id], (err, rows, files)=>{
        if (err) throw err;
        else {
            res.json(rows);
        }
    })
});

// modificar conductores
router.put('/:id', function(req, res){
    const {id} = req.params;
    const {nombre, puesto, departmento, edad, tipoLicencia,
         fechaIngreso, antiguedad, ubicacion} = req.body;

    let sql = `UPDATE tb_conductores SET 
        nombre ='${nombre}', 
        puesto ='${puesto}', 
        departamento ='${departmento}', 
        edad = ${edad}, 
        tipoLicencia = '${tipoLicencia}', 
        fechaIngreso = '${fechaIngreso}', 
        antiguedad = '${antiguedad}s', 
        ubicacion ='${ubicacion}, 
        El Faro' WHERE id = ${id};`;

    conexion.query(sql, (err, rows, files)=>{
        if (err) throw err;
        else {
            res.json({status: 'Conductor modificado'});
        }
    })
})


module.exports = router;

