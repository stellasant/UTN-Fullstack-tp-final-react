import React, { useState } from 'react'
import { Wrapper, ModalCard, CloseIcon, Overlay } from './styles'

export const Modal = (props) => {  
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }
  
  const {
    children,
  } = props

  return (
    <>
      {isOpen && (
        <Wrapper>
          <ModalCard>
            <CloseIcon onClick={props.onClose}>
              X
            </CloseIcon>
            <div className='Modal__content'>
              {children}
            </div>
          </ModalCard>
          <Overlay />
        </Wrapper>
      )}
    </>  
  )
}
