import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function PostsListado(){

    const [listado,setListado]= useState([]);

    const hacerPeticion = async()=>{
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setListado(respuesta.data);
    }
       useEffect( ()=>{
        hacerPeticion();
    },[]);

    return(
       <div>
            <h1>Listado de posteos</h1>
            <p>Ejemplo de paso de parámetros por medio de una ruta/URL a otro componente</p>
            <div>
                <ul>
                        {listado.map((unPost)=> ( <li>
                        <Link to={'/posts/' + unPost.id}>{unPost.title}</Link>
                    </li>
                    ))}
                </ul>
            </div>
       </div>  
    )
}