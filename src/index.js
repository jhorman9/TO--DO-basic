import express from 'express';
import db from './utils/database.js';
import cors from 'cors';
import Task from './models/task.model.js';
import 'dotenv/config';

Task;

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT ?? 8080;

db.authenticate()
  .then(() => console.log('Autenticado con exito'))
  .catch(error => console.log(error));

db.sync()
  .then(() => console.log('Todos los modelos han sido sincronizados'))
  .catch(error => console.log(error));

app.get('/', ( req, res ) => {
    res.json('Bienvenido al servidor');
});

app.get('/todo', async (req, res) => {
    try {
        const ToDo = await Task.findAll();
        res.status(200).json(ToDo);
    } catch (error) {
        res.status(400).json(error);
    }
});

app.get('/todo/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const ToDo = await Task.findByPk(id);
        res.status(200).json(ToDo);
    } catch (error) {
        res.status(400).json(error);
    }
});

app.post('/todo', async (req, res) => {
    try {
        const { body } = req;
        const ToDo = await Task.create(body);
        res.status(201).json({ message: ' Usuario creado ', ToDo });
    } catch (error) {
        res.status(400).json(error);
    }
});

app.put('/todo/:id', async (req, res) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const ToDo = await Task.update(body, {
          where: { id: id },
        });
        res.status(200).json({ message: ' Cambio con exito ' });
    } catch (error) {
        res.status(400).json(error);
    }
});

app.delete('/todo/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const ToDo = await Task.destroy({
        where: { id: id },
    });
    res.status(200).json({ message: 'Tarea eliminada con exitos', CantidadEliminada: ToDo })
} catch (error) {
    res.status(400).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor conectado en el puerto ${PORT}`)
});