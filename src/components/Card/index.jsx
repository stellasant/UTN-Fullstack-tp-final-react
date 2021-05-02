import styled from 'styled-components'

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
	overflow: hidden;
`

export const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 1rem;
`

export const CardItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	> span {
		font-size: 0.7rem;
		text-transform: uppercase;
		color: grey;
		font-weight: lighter;
	}
	> div {
		color: #000000;
		font-weight: bold;
		font-size: 1rem;
	}
`

export const Image = styled.div`
	background: url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80') center center no-repeat;
	object-fit: contain;
	height: 50px;
	padding: 1rem;
	display: flex;
	align-items: center;

	> div {
		transform: scale(130%);
	}
`

export const GridCards = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	padding: 0rem 0rem 5rem;
`