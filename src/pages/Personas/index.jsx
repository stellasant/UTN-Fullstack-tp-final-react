import React, { useState } from 'react'
import { Titulo } from '../../components/Titulo'
import { Section } from '../../components/Section'
import { ActionsSection, FilterSection, AddButton, FilterWrapper } from '../../components/ActionsSection'
import { AltaPersonas } from './components/AltaPersonas'
import { ListadoPersonas } from './components/ListadoPersonas'
import { Modal } from '../../components/Modal'
import { GridCards } from '../../components/Card'

export const Personas = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <>
      <Titulo nombre='Personas' />
      <Section>
        <ActionsSection>
          <FilterSection>
            <FilterWrapper>
                <label for='buscar-nombre'>Buscar nombre</label>
                <input type='search' placeholder='Filtrar nombre' name='buscar-nombre' />
            </FilterWrapper>
            <FilterWrapper>
                <label for='libros-prestados'>Filtrar por</label>
                <select placeholder='Filtrar nombre' name='libros-prestados'>
                  <option value="">Libros prestados</option>
                  <option value="0">SI</option>
                  <option value="1">NO</option>
                </select>
            </FilterWrapper>
          </FilterSection>
          <AddButton onClick={() => setIsOpenModal(true)}>+ Agregar Persona</AddButton>
        </ActionsSection>
        {isOpenModal && <AltaPersonas onClose={() => setIsOpenModal(false)} />}
        <GridCards>
          <ListadoPersonas />
        </GridCards>
      </Section>
    </>
  )
}