import React, { useState } from 'react'
import { Titulo } from '../../components/Titulo'
import { Section } from '../../components/Section'
import { AltaLibros } from './components/AltaLibros'
import { ActionsSection, FilterSection, AddButton, FilterWrapper } from '../../components/ActionsSection'
import { GridCards } from '../../components/Card'
import { ListadoLibros } from './components/ListadoLibros'


export const Libros = (props) => {
	 const [isOpenForm, setIsOpenForm] = useState(false)
  return (
    <>
    <Titulo nombre='Libros' />
    <Section>
			<h3>Agregar Libro</h3>
			<ActionsSection>
				<div />
				<AddButton onClick={() => setIsOpenForm(true)}>+ Agregar Libro</AddButton>
			</ActionsSection>
			 
			{isOpenForm && <AltaLibros onClose={() => setIsOpenForm(false)} />}
			<h3>Listado de Libros</h3>
			<GridCards>
				<ListadoLibros />
			</GridCards>
		</Section>
    </>
  )
}