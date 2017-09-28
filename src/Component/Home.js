import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
	render() {
		return (
			<div className='home-container'>
				<div className="HomeTop">
					<p>DISCOVERY</p>
				</div>
				<Link className='button' to='/battle' >
					Go
				</Link>
			</div>
		)
	}
}
