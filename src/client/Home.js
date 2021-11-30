import React, { useEffect, useState } from 'react';
import '../css/Home.css';
import Items from '../info/Items';
import About from './About';
import Member from './Member';
import Contact from './Contact';
// import { makeStyles } from '@material-ui/core/styles';

const Home = () => {
	return (
		<div className='container'>
			<div className='container__elements'>
				<Items />
			</div>
			<div className='container__elements'>
				<About />
			</div>
			<div className='container__elements'>
				<Member />
			</div>
			<div className='container__elements'>
				<Contact />
			</div>
		</div>
	);
};

export default Home;
