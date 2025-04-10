import Tarea from '../Tarea/Tarea.jsx';

function ListaTareas({ tareas, onEliminarTarea, onEditarTarea }) {
    return (
        <section>
            <h2 className="text-xl font-bold mb-2">Lista de tareas</h2>
            {tareas.length === 0 ? (
                <p>No hay tareas.</p>
            ) : (
                tareas.map(tarea => (
                    <Tarea 
                        key={tarea.id} 
                        tarea={tarea} 
                        onEliminarTarea={onEliminarTarea} 
                        onEditarTarea={onEditarTarea}
                    />
                ))
            )}
        </section>
    );
}

export default ListaTareas;
