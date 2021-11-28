import React, { useEffect, useState } from 'react';
import Items from '../info/Items';
import About from './About';
import Member from './Member';
import Contact from './Contact';
// import { makeStyles } from '@material-ui/core/styles';

const Home = () => {

	return (
		<>
		<div>
			<Items />
			<About />
			<Member />
			<Contact />
		</div>
		</>
	);
};

export default Home;
