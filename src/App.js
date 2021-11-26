import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './client/Home';
import About from './client/About';
import Login from './client/Login';
import JoinForm from './client/JoinForm';

function App() {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/login' element={<Login />} />
						<Route path='/joinForm' element={<JoinForm />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
