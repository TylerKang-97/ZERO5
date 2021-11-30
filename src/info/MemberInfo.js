import React from 'react';

import '../css/Team.css';

const MemberInfo = ({ member }) => {
	return (
		<div className='team_info_background'>
			{member === {} ? null : (
				<div className='team_info_detail'>
					<h2>{member.role}</h2>
					<h1 className='team_h1'>{member.name}</h1>
					<div>
						<img src={member.profileImg} className='team_info_detail__img' />
						<h3>"{member.comment}"</h3>
					</div>
				</div>
			)}
		</div>
	);
};
export default MemberInfo;
