import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import '../css/Team.css';
import { db, dbStorage } from '../fBase';

import MemberInfo from '../info/MemberInfo';

const Member = () => {
	const [id, setId] = useState('');
	const [members, setMembers] = useState([{}]);
	const [init, setInit] = useState(false);
	const { pathname } = useLocation();

	useEffect(async () => {
		const querySnapshot = await getDocs(collection(db, 'members'));
		let tmpObj = [];
		querySnapshot.forEach((doc) => {
			if (doc.data().name.length > 1) tmpObj.push(doc.data());
		});

		setMembers(tmpObj);
		setInit(true);
	}, []);

	const onclickes = (e) => {
		let id = e.target.id;
		console.log(e.target.id);

		setId(id);
	};

	return (
		<>
			{init ? (
				<>
					<div className='team_background'>
						<Link
							to='/member'
							style={{ textDecoration: 'none', color: 'black' }}>
							<h1 className='team_h1'>Member</h1>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-around',
								}}>
								{members.map((m) => (
									<span onClick={onclickes} id={m.name}>
										<img
											src={m.profileImg}
											style={{
												width: '10vw',
												height: '10vw',
												borderRadius: '70%',
											}}
											alt='profile'
											id={m.name}
											onClick={onclickes}
										/>

										<h3 id={m.name} onClick={onclickes}>
											{m.role}
										</h3>
										{m.name}
									</span>
								))}
							</div>
						</Link>
					</div>
					{pathname === '/member' ? <MemberInfo id={id} /> : null}
				</>
			) : (
				<div className='team_background'>
					<h1 className='team_h1'>Member</h1>
					<h2>loading...</h2>
				</div>
			)}
		</>
	);
};

export default Member;
