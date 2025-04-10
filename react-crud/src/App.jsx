import { useState } from 'react';
import FormularioTarea from './components/FormularioTarea/FormularioTarea.jsx';
import ListaTareas from './components/ListaTareas/ListaTareas.jsx';

function App() {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (titulo, descripcion) => {
        const nuevaTarea = {
            id: Date.now(), // identificador único
            titulo,
            descripcion,
        };
        setTareas([ ...tareas, nuevaTarea ]);
    };

    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id));
    };

    const editarTarea = (id, nuevoTitulo, nuevaDescripcion) => {
        const tareasEditadas = tareas.map(tarea => 
            tarea.id === id 
            ? { ...tarea, titulo: nuevoTitulo, descripcion: nuevaDescripcion }
            : tarea
        );
        setTareas(tareasEditadas);
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <div>
              <h1>PROYECTO LISTA DE TAREAS</h1>
            </div>
            <FormularioTarea onAgregarTarea={agregarTarea} />
            <ListaTareas 
                tareas={tareas} 
                onEliminarTarea={eliminarTarea} 
                onEditarTarea={editarTarea} 
            />
          <footer className="text-center mt-4">
            <p>Desarrollado por: Alejandro Vera</p>
            <p>2025</p>
          </footer>
        </div>
    );
}

export default App;
