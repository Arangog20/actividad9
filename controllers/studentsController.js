const Estudiantes = require("../models/studentsModels");

const userController = {
  // Obtener todos los usuarios
  getAllUsers: async (req, res) => {
    try {
      const users = await Estudiantes.find();
      res.json(users);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  getUsersById: async (req, res) => {
    //se obtiene primero los parametros despues hace la busqueda dentro del try
    const userId = req.params.id;
    try {
      const userFound = await Estudiantes.findById(userId);
      res.json(userFound);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  getUsersByName: async (req, res) => {
    const name = req.params.nombre;
    try {
      const userFound = await Estudiantes.find({ nombre: name });
     res.status(200).json(userFound);

    } catch (error) {
      console.log("Error al obtener usuarios:", error);
      res.status(500).json({
        ok: false,
        message: "Error interno del servidor",
        data: null,
      });
    }
  },

  
  getStudentsByNote: async (req, res) => {
    const note = req.params.nota;
    try {
      const studentNote = await Estudiantes.find({ nota: note });
      res.json(studentNote)
    }catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  getAllnotes : async (req, res) =>{
    try{
      const allNotes = await Estudiantes.find({}, {nota: 1, _id: 0});	
      res.json(allNotes);
    }catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  
  // Crear un nuevo usuario
  createUser: async (req, res) => {
    const userData = req.body;
    try {
      const newUser = new Estudiantes(userData);
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Otros métodos para manejar otras solicitudes relacionadas con los usuarios (actualizar, eliminar, etc.)
};



module.exports = userController;
