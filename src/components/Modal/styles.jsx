import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalCard = styled.div`
  position: relative;
  margin: 0 24px;
  padding: 24px;
  background-color: '#FFFFFF';
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.15);
  z-index: 9000;
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

export const CloseIcon = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  padding: 6px;
  color: gray;
  border-radius: 50%;
  transition: background-color 0.35s ease;
`