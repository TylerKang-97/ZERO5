import React, { useState, useEffect } from 'react';

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

	const goToJoin = () => {
		console.log('회원가입하기 버튼');
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
						<button onClick={goToJoin}>회원가입</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
