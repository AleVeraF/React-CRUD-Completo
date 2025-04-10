import { useState, useEffect } from 'react';
import FormularioTarea from './components/FormularioTarea/FormularioTarea';
import ListaTareas from './components/ListaTareas/ListaTareas';

const LOCAL_STORAGE_KEY = "task-list";

function App() {
    // Inicia el estado con las tareas cargadas desde localStorage si existen
    const [tareas, setTareas] = useState(() => {
        const tareasGuardadas = localStorage.getItem(LOCAL_STORAGE_KEY);
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    });

    // Guardar las tareas en localStorage cada vez que cambian
    useEffect(() => {
        console.log('Guardando en localStorage:', tareas);  // Depuración
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tareas));
    }, [tareas]); // Este efecto solo se ejecutará cuando las tareas cambien

    const agregarTarea = (titulo, descripcion) => {
        const nuevaTarea = {
            id: Date.now(),
            titulo,
            descripcion,
        };
        console.log('Agregando tarea:', nuevaTarea);  // Depuración
        setTareas([...tareas, nuevaTarea]);  // Añadir la nueva tarea al estado
    };

    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id));  // Eliminar tarea por id
    };

    const editarTarea = (id, nuevoTitulo, nuevaDescripcion) => {
        const tareasEditadas = tareas.map(tarea =>
            tarea.id === id
                ? { ...tarea, titulo: nuevoTitulo, descripcion: nuevaDescripcion }
                : tarea
        );
        setTareas(tareasEditadas);  // Actualizar las tareas
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
