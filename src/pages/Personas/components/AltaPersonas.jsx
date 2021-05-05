import React, { useState } from 'react'
import { FormWrapper } from '../../../components/Form'
import { WrapperInput } from '../../../components/Form'
import axios from 'axios'

export const AltaPersonas = (props) => {
  const[ error, setError ] = useState('');

    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        mail:'',
        alias: ''
    })

    const handleChangeNombre = (e) => {
        // e.target.value
        const nuevoState = JSON.parse(JSON.stringify(form));
        nuevoState.nombre = e.target.value;
        setForm(nuevoState);
    }

    const handleChangeApellido = (e) => {
        // e.target.value
        const nuevoState = JSON.parse(JSON.stringify(form));
        nuevoState.apellido = e.target.value;
        setForm(nuevoState);
    }
    const handleChangeMail = (e) => {
        // e.target.value
        const nuevoState = JSON.parse(JSON.stringify(form));
        nuevoState.mail = e.target.value;
        setForm(nuevoState);
    }
    
    const handleChangeAlias = (e) => {
        // e.target.value
        const nuevoState = JSON.parse(JSON.stringify(form));
        nuevoState.alias = e.target.value;
        setForm(nuevoState);
    }


    const guardar = async() => {
        // form 
        await axios.post('https:/localhost:3000/api/personas', form);
        props.history.push('/');
    }
  return (
    <FormWrapper>
      <button style={{ alignSelf: 'end', background: '#FFFFFF', color: 'gray', fontSize: '1rem', cursor: 'pointer' }} onClick={props.onClose}>X</button>
      {error? <>Error en la conexión</> : <></>} 
				<WrapperInput>
					<label for='nombre'>Nombre</label>
					<input
						type='text'
						required
						name='nombre'
						value={form.nombre}
						onChange={handleChangeNombre}
					/>
				</WrapperInput>

				<WrapperInput>
					<label for='apellido'>Apellido</label>
					<input
						type='text'
						required
						name='apellido'
						value={form.apellido}
						onChange={handleChangeApellido}
					/>
				</WrapperInput>

				<WrapperInput>
					<label for='mail'>Email</label>
					<input
						type='email'
						required
						name='mail'
						value={form.mail}
						onChange={handleChangeMail}
					/>
				</WrapperInput>

				<WrapperInput>
					<label for='alias'>Alias</label>
					<input
						type='text'
						required
						name='alias'
						value={form.alias}
						onChange={handleChangeAlias}
					/>
				</WrapperInput>

				<button type='submit' onClick={()=>guardar()}>Agregar Persona</button>
			</FormWrapper>
  )
}