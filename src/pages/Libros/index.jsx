import React, { useState } from 'react'
import { Titulo } from '../../components/Titulo'
import { Section } from '../../components/Section'
import { Form } from '../../components/Form'
import { WrapperInput } from '../../components/Form'
import { GridCards } from '../../components/Card'
import { GetLibros } from './components/GetLibros'
import axios from 'axios'

export const Libros = (props) => {

    const[error,setError]=useState('')

    const [form, setForm] = useState({
        nombre: '',
        descripcion: '',
        genero:'',
        persona_id: ''
    })

    const handleChangeNombre = (e) => {
        // e.target.value
        const nuevoState = JSON.parse(JSON.stringify(form))
        nuevoState.nombre = e.target.value
        setForm(nuevoState)
    }

    const handleChangeDescripcion = (e) => {
        // e.target.value
        const nuevoState = JSON.parse(JSON.stringify(form))
        nuevoState.descripcion = e.target.value
        setForm(nuevoState)
    }
    const handleChangeGenero = (e) => {
        // e.target.value
        const nuevoState = JSON.parse(JSON.stringify(form))
        nuevoState.genero = e.target.value
        setForm(nuevoState)
    }
    
    const handleChangePersonaId = (e) => {
        // e.target.value
        const nuevoState = JSON.parse(JSON.stringify(form))
        nuevoState.persona_id = e.target.value
        setForm(nuevoState)
    }


    const guardar = async() => {
        // form 
        await axios.post('https:/localhost:3000/api/libros', form)
        props.history.push('/')
    }

  return (
    <>
    <Titulo nombre='Libros' />
    <Section>
			<h3>Agregar Libro</h3>
			{error? <>Error en la conexión</> : <></>} 
			<Form id='login'>
				<WrapperInput>
					<label for='nombre'>Nombre*</label>
					<input
						type='text'
						required
						name='nombre'
						value={form.nombre}
						onChange={handleChangeNombre}
					/>
				</WrapperInput>

				<WrapperInput>
					<label for='descripcion'>Descripción</label>
					<input
						type='text'
						required
						name='descripcion'
						value={form.descripcion}
						onChange={handleChangeDescripcion}
					/>
				</WrapperInput>

				{/* Traer Géneros en un select */}
				<WrapperInput>
					<label for='nombre'>Género</label>
					<input
						type='text'
						required
						name='genero'
						value={form.genero}
						onChange={handleChangeGenero}
					/>
				</WrapperInput>

				<WrapperInput>
					<label for='persona'>Persona que lo posee</label>
					<input
						type='text'
						required
						name='persona'
						value={form.persona}
						onChange={handleChangePersonaId}
					/>
				</WrapperInput>

				<button type='submit' onClick={()=>guardar()}>Agregar Libro</button>
			</Form>
			<h3>Listado de Libros</h3>
			<GridCards>
				<GetLibros />
			</GridCards>
		</Section>
    </>
  )
}