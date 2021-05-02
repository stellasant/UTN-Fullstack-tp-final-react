import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Personas } from './pages/Personas'
import { Libros } from './pages/Libros'
import { Generos } from './pages/Generos'
import { Switch, Route } from 'react-router-dom'


function App() {
  let menuLinks = [
			{
				item: 'Home',
				path: '/',
				component: Home,
			},
			{
				item: 'Personas',
				path: '/personas',
				component: Personas,
			},
			{
				item: 'Libros',
				path: '/libros',
				component: Libros,
			},
			{
				item: 'Géneros',
				path: '/generos',
				component: Generos,
			},
		]
  return (
    <div className='App'>
				<div className='container'>
					<Header items={menuLinks} />

					<main className='main'>
						<Switch>
							{menuLinks.map((link, index) => (
								<Route key={index} path={link.path} component={link.component} exact />
							))}
						</Switch>
					</main>
				</div>
				<footer>My Books - 2021</footer>
			</div>
  );
}

export default App;
