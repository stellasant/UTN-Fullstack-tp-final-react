import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from '../../../components/Card'
import {Link} from 'react-router-dom'
import { ErrorPlaceholder } from '../../../components/ErrorPlaceholder'
import NoConexion from '../../../assets/placeholders/error-not-found.svg'
import NoData from '../../../assets/placeholders/error-no-data.svg'

export const ListadoPersonas = () => {
  const [listado, setListado] = React.useState([]);
    const [error, setError] = React.useState('');

    const traerPersonas = async() => {
        try {
            const respuesta = await axios.get('http://localhost:3001/api/personas');
            setListado(respuesta.data.respuesta);
            setError('');
        } catch(e) {
            if (e.message=='Network error') {
                setError('No me pude conectar con el servidor');
            } else {
                setError('Otro mensaje que venga del server');
            }
        }
    }

    React.useEffect(() => {
        traerPersonas();
    }, [])

    const borrarPersona = async(idPersonaABorrar) => {
        try {
            await axios.delete('http://localhost:3001/api/personas' + idPersonaABorrar)
            traerPersonas();
        } catch(e) {

        }
    }

  return (
    <>
      {error ? 'Error en la conexión' : <></>}
      {listado.length > 0 && listado.map(persona => (
        <Card.Wrapper key={persona.id}>
          <Card.Body>
          <Card.Item>
            <Card.Label>Nombre</Card.Label>
            <Card.Value>{persona.nombre}</Card.Value>
          </Card.Item>
          <Card.Item>
            <Card.Label>Apellido</Card.Label>
            <Card.Value>{persona.apellido}</Card.Value>
          </Card.Item>
          <Card.Item>
            <Card.Label>Email</Card.Label>
            <Card.Value>{persona.mail}</Card.Value>
          </Card.Item>
          <Card.Item>
            <Card.Label>Alias</Card.Label>
            <Card.Value>{persona.alias}</Card.Value>
          </Card.Item>
          </Card.Body>
        </Card.Wrapper>
        )
      )}
    </>
  )
}
