import React from 'react';

import '../css/Team.css';

const MemberInfo = ({ member }) => {
	return (
		<div className='team_info_background'>
			{member === {} ? null : (
				<>
					<h1 className='team_h1'>{member.name}</h1>
					<div>
						<h2>{member.role}</h2>
						<h3>
							<img
								src={member.profileImg}
								style={{ width: '20vw', height: '20vw' }}
							/>
						</h3>
					</div>
				</>
			)}
		</div>
	);
};
export default MemberInfo;
