import styled from 'styled-components'

export const Form = styled.form`
  padding: 4rem 5rem;
	display: flex;
	flex-direction: column;
	width: 400px;
	background-color: #ffffff;
	box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;

  label {
	text-transform: uppercase;
	margin-bottom: 3px;
	font-size: 12px;
	font-family: 'Poppins', sans-serif;
	font-weight: 200;
	color: #777777;
}

  input,
  select {
    border: none;
    border-bottom: 1px solid #555555;
    padding: 0.5rem;
    font-size: 16px;
    color: #333333;
  }

  input:focus {
    border-bottom: 1px solid #bf2000;
  }


  button {
    background-color: #bf2000;
    padding: 1rem;
    box-shadow: none;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    text-transform: uppercase;
  }

  button:hover {
    background-color: #8f1800;
  }
`

export const WrapperInput = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`