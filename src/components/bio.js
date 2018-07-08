import React from 'react';

import {rhythm} from '../utils/typography';
import profilePic from './profile-pic.png';

class Bio extends React.Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					marginBottom: rhythm(2.5)
				}}
			>
				<img
					src={profilePic}
					alt="TASSU"
					style={{
						marginRight: rhythm(1 / 2),
						marginBottom: 0,
						width: rhythm(3),
						height: rhythm(3)
					}}
				/>
				<p>
					<strong>TASSU</strong> is a developer.
					He focuses on Minecraft and Web stuff.{' '}
					<a href="https://github.com/supertassu">
						You should follow him on GitHub.
					</a>
				</p>
			</div>
		);
	}
}

export default Bio;
