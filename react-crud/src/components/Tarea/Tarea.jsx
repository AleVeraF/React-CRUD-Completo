import { useState } from 'react';

function Tarea({ tarea, onEliminarTarea, onEditarTarea }) {
    const [editando, setEditando] = useState(false);
    const [nuevoTitulo, setNuevoTitulo] = useState(tarea.titulo);
    const [nuevaDescripcion, setNuevaDescripcion] = useState(tarea.descripcion);

    const guardarCambios = () => {
        onEditarTarea(tarea.id, nuevoTitulo, nuevaDescripcion);
        setEditando(false);
    };

    return (
        <div className="border p-3 mb-2 rounded">
            {editando ? (
                <>
                    <input 
                        className="block w-full mb-2 border p-1"
                        value={nuevoTitulo}
                        onChange={(e) => setNuevoTitulo(e.target.value)}
                        maxLength={50}
                    />
                    <input 
                        className="block w-full mb-2 border p-1"
                        value={nuevaDescripcion}
                        onChange={(e) => setNuevaDescripcion(e.target.value)}
                    />
                    <button onClick={guardarCambios} className="bg-green-500 text-white px-2 py-1 mr-2 rounded">
                        Guardar
                    </button>
                    <button onClick={() => setEditando(false)} className="bg-gray-400 text-white px-2 py-1 rounded">
                        Cancelar
                    </button>
                </>
            ) : (
                <>
                    <h3 className="text-lg font-semibold">{tarea.titulo}</h3>
                    <p>{tarea.descripcion}</p>
                    <button onClick={() => setEditando(true)} className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded">
                        Editar
                    </button>
                    <button onClick={() => onEliminarTarea(tarea.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                        Eliminar
                    </button>
                </>
            )}
        </div>
    );
}

export default Tarea;
