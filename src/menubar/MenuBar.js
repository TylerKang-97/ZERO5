import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Menubar.css';

import MenuItem from './MenuItem';

function MenuBar() {
	const pathName = useLocation().pathname; // url의 path값

	const menus = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Login', path: '/login' },
	];

	return (
		<div className='menubars'>
			{menus.map((menu, index) => {
				return (
					<div className='menuitems'>
						<Link
							to={menu.path}
							key={index}
							style={{ textDecoration: 'none', color: 'white' }}>
							<MenuItem
								menu={menu}
								isActive={pathName === menu.path ? true : false}
							/>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default MenuBar;
