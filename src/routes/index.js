const express = require('express');
const router = express.Router();
const usuario = require('../models/usuario.js');

router.get('/',(req,res) => {
    res.render('index.ejs');
});

router.get('/add', async (req,res)=>{
    console.log();
    const Usuario = new usuario({
        nombre: "Alejandro",
        cc: "1.193.439.772",
        luz: [22,31,55,7,21,45]
    });
    await Usuario.save();

});

router.post('/data',async(req,res)=>{

    const obj = JSON.parse(JSON.stringify(req.body)); //Transforma el vector en json
    //console.log(obj);
    str_luz = obj.luz; 
    num_luz = str_luz.match(/\d+(?:\.\d+)?/g).map(Number); // Transformar vector de strings en floats.
    //console.log(num_luz[1] + 2);
    
    
    if (obj){
        
        const Usuario = new usuario({
            nombre: obj.nombre,
            cc: obj.cc,
            luz: num_luz});
        res.send('Datos insertados');
        await Usuario.save();
        
    }
    else
    {
        res.send('Datos no insertados');
    }

});

router.get('/show', async (req,res) =>{
    const info = await usuario.find();
    res.send(info);
});

module.exports = router;