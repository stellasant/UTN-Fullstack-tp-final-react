import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from '../../../components/Card'

export const ListadoLibros = () => {
/*     const [listado, setListado] = useState([])
    const [error, setError] = useState('') */

  /* const traerPersonasConLibros = async () => {
        try {
            const personas = await axios.get('http://localhost:3001/api/personas');
            const listadoPersonas = personas.data.respuesta;
            const libros = await axios.get('http://localhost:3001/api/libros');
            const listadoLibros = libros.data.respuesta;
            const newListado = listadoLibros.data.map(libro => {
                const personaAsociada = listadoPersonas.find(persona => persona.id === libro.persona_id);
                
                const personaConLibro = JSON.parse(JSON.stringify(libro));
                personaConLibro.persona = personaAsociada
                    ? personaAsociada.nombre + ' ' + personaAsociada.apellido
                    : '';
                return personaConLibro;
            });
            setListado(newListado);
            setError('');
        } catch (e) {
            if (e.message === 'Network error') {
                setError('No me pude conectar con el servidor');
            } else {
                setError('Otro mensaje que venga del server');
            }
        }
    }

    React.useEffect(() => {
        traerPersonasConLibros();
    }, []); */

        const [listalibros, setListaLibros] = useState([]);
    const [personaprestar, setPersonaPrestar] = useState([]);
    const [libroprestar, setLibroPrestar] = useState([])
    const [selectpersona, setselectPersona] = useState(false);

    const [personaAPrestar, setpersonaAPrestar] = useState({
        "id_persona": null
    });

    const [error, setError] = useState('')

     const TraerLibros = async () => {
        try{
        const respuestaPersonas = await axios.get("http://localhost:3001/api/personas")
        const respuestaLibros = await axios.get("http://localhost:3001/api/libros")
        const respuestaCategoria = await axios.get("http://localhost:3001/api/categorias")
        const newListado = respuestaLibros.data.respuesta.map(unLibro => {
            const personaAsociada = respuestaPersonas.data.respuesta.find(unaPersona => unaPersona.id == unLibro.id_persona)
            unLibro.persona = personaAsociada
            return unLibro;
        })
        const newListadoAll = newListado.map(unLibro => {
            const categoriaAsociada = respuestaCategoria.data.respuesta.find(unaCategoria => unaCategoria.id == unLibro.id_genero)
            unLibro.categoria = categoriaAsociada;
            return unLibro;
        })
        setListaLibros(newListadoAll);
        
        }
        catch(e){
            console.log(e);
        }
    }

    
    useEffect(() => {
        TraerLibros();
    }, [])


    return (
      <>
        {error ? <span>Error en la conexión</span> : <></>}
        {listalibros && listalibros.map((libro) => (
            <Card.Wrapper key={libro.id}>

                <Card.Body>

                <Card.Item>
                <Card.Label>Nombre</Card.Label>
                <Card.Value>{libro.nombre}</Card.Value>
                </Card.Item>
                <Card.Item>
                <Card.Label>Descripción</Card.Label>
                <Card.Value>{libro.descripcion}</Card.Value>
                </Card.Item>
                <Card.Item>
                <Card.Label>ID de categoría</Card.Label>
                <Card.Value>{libro.categoria_id}</Card.Value>
                </Card.Item>
                <Card.Item>
                <Card.Label>ID de persona a la que se prestó</Card.Label>
                <Card.Value>{libro.persona}</Card.Value>
                </Card.Item>
                </Card.Body>
            </Card.Wrapper>
        )
        )}
    </>
    )
}