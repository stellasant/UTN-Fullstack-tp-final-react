import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ComentariosAlta(props){

    const [nombre,setNombre] = useState('');
    const [email,setEmail] = useState('');
    const [contenido,setContenido] = useState('');
    const [error, setError] = useState('');

    //Vamos a hacer 3 funciones para actualizar el estado de cada uno

    useEffect(()=>{
       const curso =  sessionStorage.getItem('curso');
       console.log(curso);
    },[])

    const handleNombre = (e) =>{
        setNombre(e.target.value);
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handleContenido = (e)=>{
        setContenido(e.target.value);
    }

    const handleSave = async()=>{

        try{
            const body = {
                name: nombre,
                email: email,
                body: contenido
            }

            //sessionStorage.setItem('curso','diplomatura ReactJS')


        const respuesta = await axios.post('https://jsonplaceholder.typicode.com/comments',body)
        console.log(respuesta);
        //if(respuesta.status== 201 || respuesta.status== 200){
            props.history.push('/posts') //Si esta todo ok lo puedo redireccionar a otra página
         
        }catch(e){
            setError('No se pudo establecer la conexión con el servidor');
        }


    }

    return(
        <div>
            <div>
                {error}
            </div>
        <div>
            <input type="text" name="nombre" placeholder="nombre" value={nombre} onChange={handleNombre}/>
        </div>
        <div>
            <input type="text" name="email" placeholder="email" value={email} onChange={handleEmail}/>
        </div>
         <div>
            <input type="text" name="body" placeholder="contenido" value={contenido} onChange={handleContenido} />
        </div>
        <div>
            <button onClick={handleSave}>Guardar</button>
        </div>
       </div>
        
    )
   
}