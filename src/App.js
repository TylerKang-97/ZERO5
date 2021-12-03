import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './client/Home';
import About from './client/About';
import Login from './client/Login';
import JoinForm from './client/JoinForm';
import MenuBar from './menubar/MenuBar';
import Member from './client/Member';

function App() {
	return (
		<div>
			<BrowserRouter>
			<MenuBar />
				<div>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/member' element={<Member />} />
						<Route path='/login' element={<Login />} />
						<Route path='/joinForm' element={<JoinForm />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
