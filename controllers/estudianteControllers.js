
const { findOneAndDelete, findOneAndRemove } = require("../models/Estudiante");
const Estudiante = require("../models/Estudiante");

exports.crearEstudiante = async (req,res)=> {
   try {
    let estudiante;
    //Creamos nuevo Estudiane    
   estudiante = new Estudiante(req.body);

   await estudiante.save();
   res.send(estudiante);


   } catch (error) {
       console.log(error);
       res.status(500).send('Hubo un error');
   }
}

exports.obtenerEstudiantes = async (req,res)=>{
    try {

        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarEstudiantes = async(req,res)=>{
    try {
        const {nombre, notas, estado} = req.body;
        let estudiante = await Estudiante.findById(req.params.id);

        if(!estudiante){
            res.status(404).json({msg:'No se encontró el estuduante seleccionado'})
        }
        estudiante.nombre = nombre;
        estudiante.notas = notas;
        estudiante.estado = estado;
      
        estudiante = await Estudiante.findOneAndUpdate({_id: req.params.id}, estudiante, {new: true} )
        res.json( estudiante);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerEstudiante = async(req,res)=>{
    try {
       
        let estudiante = await Estudiante.findById(req.params.id);

        if(!estudiante){
            res.status(404).json({msg:'No se encontró el estuduante seleccionado'})
        }

        res.json( estudiante);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarEstudiante = async(req,res)=>{
    try {
       
        let estudiante = await Estudiante.findById(req.params.id);

        if(!estudiante){
            res.status(404).json({msg:'No se encontró el estuduante seleccionado'})
        }
        await Estudiante.findOneAndRemove({_id:req.params.id})
        res.json({msg: 'Estudiante eliminado con éxito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}