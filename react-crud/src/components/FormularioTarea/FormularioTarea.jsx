import { useState } from 'react';

function FormularioTarea({ onAgregarTarea }) {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (titulo.trim() && descripcion.trim()) {
            onAgregarTarea(titulo, descripcion);
            setTitulo('');
            setDescripcion('');
        }
    };

    const formularioInvalido = titulo.trim() === '' || descripcion.trim() === '';

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <label htmlFor="titulo">Título</label>
            <input
                type="text"
                id="titulo"
                name="titulo"
                maxLength={50}
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="block w-full mb-2 border p-2"
            />
            <label htmlFor="descripcion">Descripción</label>
            <input
                type="text"
                id="descripcion"
                name="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="block w-full mb-2 border p-2"
            />
            <button type="submit" disabled={formularioInvalido} className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50">
                Agregar Tarea
            </button>
        </form>
    );
}

export default FormularioTarea;
