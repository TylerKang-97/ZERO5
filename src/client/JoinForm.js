import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinForm = () => {
	const navigate = useNavigate();

	const [error, setError] = useState('');
	const [types, setTypes] = useState([
		{
			type: 999,
			name: 'test',
		},
	]);
	const [init, setInit] = useState(false);

	useEffect(() => {
		fetch('http://localhost:3001/getTypes', {
			method: 'post',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(),
		})
			.then((res) => res.json())
			.then((json) => {
				// console.log(json);
				// setTypes(JSON.stringify(json));
				setTypes(json);
			})
			.then(console.log('types: ', types))
			.then(setInit(true));

		// console.log(types);
	}, []);

	const onSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);

		// console.log(data.get('type'));
		// console.log(data.get('name'));
		// console.log(data.get('birthDay'));
		// console.log(data.get('id'));
		// console.log(data.get('password'));
		const joinObj = {
			type: data.get('type'),
			userId: data.get('id'),
			password: data.get('password'),
			name: data.get('name'),
			birthDay: data.get('birthDay'),
		};

		const post = {
			joinObj,
		};

		fetch('http://localhost:3001/join', {
			method: 'post',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(post),
		})
			.then((res) => res.json())
			.then((json) => {
				if (json.result === 'SUCCEED') {
					alert('회원 가입이 성공적으로 되었습니다. 로그인하세요.');
					navigate('/login');
				} else {
					setError('Something Happened!');
				}
			});
		// console.log(joinObj);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				alignItems: 'center',
			}}>
			<h1>JoinForm</h1>
			{init ? (
				<div>
					<form onSubmit={onSubmit}>
						<table>
							<thead>
								<tr>
									<td colSpan='2' style={{ textAlign: 'center' }}>
										정보를 입력하세요.
									</td>
								</tr>
							</thead>
							<tbody style={{ textAlign: 'center' }}>
								<tr>
									<td>구분</td>
									<td>
										<select name='type'>
											{types.map((m) => (
												<option key={m.type} value={m.type}>
													{m.name}
												</option>
											))}
										</select>
									</td>
								</tr>
								<tr>
									<td>이름</td>
									<td>
										<input type='text' name='name' />
									</td>
								</tr>
								<tr>
									<td>생년월일</td>
									<td>
										<input
											type='date'
											name='birthDay'
											placeholder='(YYYY-MM-DD 형식으로 입력)'
										/>
									</td>
								</tr>
								<tr>
									<td>아이디</td>
									<td>
										<input type='text' name='id' />
									</td>
								</tr>
								<tr>
									<td>비밀번호</td>
									<td>
										<input type='password' name='password' />
									</td>
								</tr>
								<tr>
									<td>
										<button type='submit' style={{ width: '100%' }}>
											가입
										</button>
									</td>
									<td>
										<button
											style={{ width: '100%' }}
											onClick={() => navigate(-1)}>
											취소
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
					{error}
				</div>
			) : (
				<div>initializing... plz wait...</div>
			)}
		</div>
	);
};

export default JoinForm;
