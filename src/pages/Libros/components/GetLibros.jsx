import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from '../../../components/Card'

export const GetLibros = () => {
    const [listado, setListado] = useState([])
    const [error, setError] = useState('')

  //Conexión con back end
  const traerLibros = async () => {
    try{
        const respuesta = await axios.get('http://localhost:3001/api/libros');
        setListado(respuesta.data.respuesta_db);
        setError(''); //Lo seteo en el valor inicial, indica que no hay error.
    }catch(e){
        if(e.message === 'Network error'){
            setError('No se pudo conectar con el servidor');
        }else{
            setError('Podemos poner otro mensaje que venga del Servidor');
        }   
    }
  }

  useEffect(() => {
      traerLibros() //Necesito que se llame a la función la 1era vez que  cargue
  },[])

    return (
      <>
        {error ? <span>Error en la conexión</span> : <></>}
        {listado.length > 0 && listado.map((libro) => (
            <Card.Wrapper key={libro.id}>
                <Card.Image>
                <Card.Item>
                    <Card.Label>ID</Card.Label>
                    <Card.Value>{libro.id ? libro.id : '-'}</Card.Value>
                </Card.Item>
                </Card.Image>
                <Card.Body>

                <Card.Item>
                <Card.Label>Nombre</Card.Label>
                <Card.Value>{libro.nombre ? libro.nombre : '-'}</Card.Value>
                </Card.Item>
                <Card.Item>
                <Card.Label>Descripción</Card.Label>
                <Card.Value>{libro.descripcion ? libro.descripcion : '-'}</Card.Value>
                </Card.Item>
                <Card.Item>
                <Card.Label>ID de categoría</Card.Label>
                <Card.Value>{libro.categoria_id ? libro.categoria_id : '-'}</Card.Value>
                </Card.Item>
                <Card.Item>
                <Card.Label>ID de persona a la que se prestó</Card.Label>
                <Card.Value>{libro.persona_id ? libro.persona_id : '-'}</Card.Value>
                </Card.Item>
                </Card.Body>
            </Card.Wrapper>
        )
        )}
    </>
    )
}