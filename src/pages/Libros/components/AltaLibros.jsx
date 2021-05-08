import React,  {useState} from 'react'
import { FormWrapper } from '../../../components/Form'
import { WrapperInput } from '../../../components/Form'
import axios from 'axios'

export const AltaLibros = (props) => {
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
    const [listado, setListado] = React.useState(['']);


    const traerGeneros = async() => {
        try {
            const respuesta = await axios.get('http://localhost:3001/api/libros');
            setListado(respuesta.data);
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
        traerGeneros()
    }, [])



  return (
    <>
    {error? <>Error en la conexión</> : <></>} 
			<FormWrapper>
        <button style={{ alignSelf: 'end', background: '#FFFFFF', color: 'gray', fontSize: '1rem', cursor: 'pointer' }} onClick={props.onClose}>X</button>
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

				<WrapperInput>
					<label for='nombre'>Género</label>
					<select
						required
						name='genero'
						onChange={handleChangeGenero}
					>
            {listado.map((genero) => (
              <option>{genero.nombre}</option>
            )
            )}
          </select>
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
			</FormWrapper>
    </>
  )
}