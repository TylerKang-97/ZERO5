import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');

	const handleIdChange = (e) => {
		setId(e.target.value);
		console.log(`id: ${id}`);
	};
	const handlePwChange = (e) => {
		setPassword(e.target.value);
		console.log(`password: ${password}`);
	};

	const login = (e) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				alignItems: 'center',
			}}>
			<h1>login Page</h1>
			<div>
				<form onSubmit={login}>
					<div>
						<input type='text' onChange={handleIdChange} />
					</div>
					<div>
						<input type='password' onChange={handlePwChange} />
					</div>
					<div>
						<button type='submit'>로그인</button>

						<Link
							to='/joinForm'
							key='0'
							style={{ textDecoration: 'none', color: 'white' }}>
							<button>회원가입</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
