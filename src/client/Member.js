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

		/**
		 * 현재 주소가 member인지 판별해 onClick 액션을 다르게.
		 * ./member가 아니다 = home에서 보이는 member탭이기 때문에 바로 member페이지로 이동시켜준다.
		 * */
		if (pathname !== '/member') window.location.href = '/member';
		else {
			members.forEach((mem) => {
				if (id === mem.name) setSelectedMember(mem);
			});

			setId(id);
		}
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
						</Link>
						<div className='team_list_container'>
							{id !== '' ? (
								<MemberInfo memberName={id} member={selectedMember} />
							) : null}
							<div className='team_image_display'>
								{members.map((m) => (
									<div key={m.name} style={{ margin: '2%' }}>
										<span onClick={onclickes} id={m.name}>
											<img
												src={m.profileImg}
												className='team_image'
												alt='profile'
												id={m.name}
												onClick={onclickes}
											/>
											<p className='team_p'>{m.name}</p>
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
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
