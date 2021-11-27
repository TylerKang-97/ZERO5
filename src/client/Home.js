import React, { useEffect, useState } from 'react';
import Items from '../info/Items';
import About from './About';
// import { makeStyles } from '@material-ui/core/styles';

const Home = () => {
	const [keyword, setKeyword] = useState('');

	const handleValue = (e) => {
		setKeyword(e.target.value);
	};

	const submit = (e) => {
		e.preventDefault();
	};
	const getAward = () => {
		fetch('http://localhost:3001/callbody', {
			method: 'post',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(),
		})
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
			});
	};
	return (
		<>
		<div>
			<Items />
			<About />
			{/*<button onClick={getAward}>getAward</button> */}
		</div>
		</>
	);
};

export default Home;
