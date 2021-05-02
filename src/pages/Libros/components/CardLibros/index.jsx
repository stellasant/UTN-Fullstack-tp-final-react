import React from 'react'
import { CardWrapper, CardItem, Image, CardBody } from '../../../../components/Card'

export const CardLibros = (props) => {
  return (
    <>
      <CardWrapper>
        <Image>
          <CardItem>
            <span>ID</span>
            <div>{props.id ? props.id : '-'}</div>
          </CardItem>
          </Image>
        <CardBody>

         <CardItem>
          <span>Nombre</span>
          <div>{props.nombre ? props.nombre : '-'}</div>
        </CardItem>
         <CardItem>
          <span>Descripción</span>
          <div>{props.descripcion ? props.descripcion : '-'}</div>
        </CardItem>
         <CardItem>
          <span>ID de categoría</span>
          <div>{props.categoria_id ? props.categoria_id : '-'}</div>
        </CardItem>
         <CardItem>
          <span>ID de persona a la que se prestó</span>
          <div>{props.persona_id ? props.persona_id : '-'}</div>
        </CardItem>
        </CardBody>
      </CardWrapper>
    </>
  )
}