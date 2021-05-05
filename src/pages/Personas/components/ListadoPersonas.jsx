import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from '../../../components/Card'
import {Link} from 'react-router-dom'

export const ListadoPersonas = () => {
  const [listado, setListado] = useState([]);
  const [error,setError] = useState('');  //Manejo de error

  
  //Conexión con back end
  const traerPersonas = async () => {
        const respuesta = await axios.get("http://localhost:3001/api/personas")
        .then(res => setListado(res.data.respuesta))
        .catch(e => console.log(`en el catch ${e}`))
    }
    
    useEffect(() => {
        traerPersonas()
    }, []);

  return (
    <>
      {error ? <>Error en la conexión</> : <></>}
      {listado.length > 0 && listado.map(persona => (
        <Card.Wrapper key={persona.id}>
          <Card.Image>
            <Card.Item>
              <Card.Label>ID</Card.Label>
              <Card.Value>{persona.id ? persona.id : '-'}</Card.Value>
            </Card.Item>
            </Card.Image>
          <Card.Body>
          <Card.Item>
            <Card.Label>Nombre</Card.Label>
            <Card.Value>{persona.nombre ? persona.nombre : '-'}</Card.Value>
          </Card.Item>
          <Card.Item>
            <Card.Label>Apellido</Card.Label>
            <Card.Value>{persona.apellido ? persona.apellido : '-'}</Card.Value>
          </Card.Item>
          <Card.Item>
            <Card.Label>Email</Card.Label>
            <Card.Value>{persona.mail ? persona.mail : '-'}</Card.Value>
          </Card.Item>
          <Card.Item>
            <Card.Label>Alias</Card.Label>
            <Card.Value>{persona.alias ? persona.alias : '-'}</Card.Value>
          </Card.Item>
          </Card.Body>
        </Card.Wrapper>
        )
      )}
    </>
  )
}
