import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardLibros } from './CardLibros'

export const GetLibros = () => {
    const [listado, setListado] = useState([])
    const [error, setError] = useState('')

   const traerlistado = async() => {
        try {
            const respuesta = await axios.get('http://localhost:3001/api/libros')
            setListado(respuesta.data.respuesta_db)
            setError('')
        }
        catch (e) {
            setError('Error')
        }
    }
    useEffect(() => {
        traerlistado()
    }, [])

    return(
      <>
        {error ? <span>Error en la conexión</span> : <></>}
        {listado.map((libro) => (
            <CardLibros key={libro.id} id={libro.id} nombre={libro.nombre} descripcion={libro.descripcion} />
        )
        )}
      </>
    )
}