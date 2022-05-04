import React from 'react'

import person from '../images/me.jpg'
import mail from '../images/icons/Mail.png'
import linkedin from '../images/icons/linkedin.png'

export default function Info() {
	return (
		<div className="card--info">
			<img className="card-info_profile-image" src={person} />
			<h1 className="card--info_name center">Ben Amin</h1>
			<h2 className="card--info_carrer center">Frontend Developer</h2>
			<p className="card--info_website center">Amin.website</p>
			<div className="card--info_button">
				<a href="#" className="card--info_button_light button">
					<img src={mail} />
					<span>Email</span>
				</a>
				<a href="#" className="card--info_button_blue button">
					<img src={linkedin} />
					<span>Linkedin</span>
				</a>
			</div>
		</div>
	)
}

