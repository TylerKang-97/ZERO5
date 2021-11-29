import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import '../css/Team.css';
import { db, dbStorage } from '../fBase';

import MemberInfo from '../info/MemberInfo';

const Member = () => {
	const [id, setId] = useState('');
	const [members, setMembers] = useState([{}]);
	const [selectedMember, setSelectedMember] = useState({});
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

		members.forEach((mem) => {
			if (id === mem.name) setSelectedMember(mem);
		});

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
							<div className="team_image_display">
								{members.map((m) => (
									<span onClick={onclickes} id={m.name}>
										<img
											src={m.profileImg}
											style={{
												width: '12vw',
												height: '12vw',
												borderRadius: '70%',
												
											}}
											alt='profile'
											id={m.name}
											onClick={onclickes}
										/>

										<h3 id={m.name} onClick={onclickes} className="team_h3">
											{m.role}
										</h3>
										<p className="team_p">{m.name}</p>
									</span>
								))}
							</div>
						</Link>
					</div>
					{pathname === '/member' ? (
						<MemberInfo memberName={id} member={selectedMember} />
					) : null}
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
