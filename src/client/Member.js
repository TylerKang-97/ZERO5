import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import personImg from '../img/personImg.jpg';
import { collection, doc, getDocs } from 'firebase/firestore';
import '../css/Team.css';
import { db, dbStorage } from '../fBase';

const Member = () => {
	const [members, setMembers] = useState([{}]);
	const [init, setInit] = useState(false);
	useEffect(async () => {
		const querySnapshot = await getDocs(collection(db, 'members'));
		let tmpObj = [];
		querySnapshot.forEach((doc) => {
			if (doc.data().name.length > 1) tmpObj.push(doc.data());
		});

		setMembers(tmpObj);
	}, []);
	const { pathname } = useLocation();

	const addMember = async (event) => {
		event.preventDefault();
		const data = new FormData(event.target);
		const storageRef = dbStorage;
		console.log(storageRef);
		const memObj = {
			key: data.get('key'),
			name: data.get('name'),
			role: data.get('role'),
		};
		console.log(data.get('profileImg'));
		console.log(data.get('key').length >= 2);
		try {
			// const docRef = await addDoc(collection(db, 'members'), memObj);
			// console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};
	return (
		<div className='team_background'>
			<Link to='/member' style={{ textDecoration: 'none', color: 'black' }}>
				<h1 className='team_h1'>Member</h1>
				<p>강신영 고영일 김찬영 송주영 김도영 김광현 김혜린 정도원 이유진</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
					}}>
					{members.map((m) => (
						<div>
							<h2>{m.name}</h2>
							<img
								src={m.profileImg}
								style={{
									width: '10vw',
									height: '10vw',
									borderRadius: '70%',
								}}
								alt='profile'
							/>
							<h3>{m.role}</h3>
						</div>
					))}
				</div>
			</Link>
		</div>
	);
};

export default Member;
