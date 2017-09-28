import * as React from 'react';
import { NavLink } from 'react-router-dom';
function Nav () {
	return (
		<div className='nav-container'>
			<ul className="nav">
				<li>
					<NavLink exact activeClassName="active" to='/' >
						主页
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to='/battle' >
						云打印
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to='/popular' >
						Echarts图表
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to='/douban' >
						豆瓣读书
					</NavLink>
				</li>
			</ul>
		</div>
	)
}  
module.exports = Nav;
