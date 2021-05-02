import React from 'react'
import Person from '../../images/man.png'
import Books from '../../images/book.svg'
import Generos from '../../images/magic-book.svg'
import { Link } from 'react-router-dom'
import './style.css'

export const Home = () => {
  return (
    <>
			<section className='slider'>
				<div className='hero-img' />
			</section>
			<section className='info'>
        <Link to= "/persona">
				<div className='info-item'>
					<img src={Person} alt='personas-icon' height='70px' />
					<p>Personas</p>
				</div>
        </Link>
        <Link to= "/libros">
        <div className='info-item'>
					<img src={Books} alt='personas-icon' height='70px' />
					<p>Libros</p>
				</div>
        </Link>
        <Link to= "/generos">
        <div className='info-item'>
					<img src={Generos} alt='personas-icon' height='70px' />
					<p>Géneros</p>
				</div>
        </Link>
			</section>
		</>
  )
}