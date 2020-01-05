import React from 'react';
import './SocialFollow.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faYelp
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
	return (
		<div className="top-padding-10em">
			<a
				href="https://www.facebook.com/crawfishkingseattle"
				className="social"
			>
				<FontAwesomeIcon icon={faFacebookSquare} size="2x" />
			</a>
			<a
				href="https://twitter.com/search?f=tweets&q=crawfishkingsea&src=typd"
				className="social"
			>
				<FontAwesomeIcon icon={faTwitterSquare} size="2x" />
			</a>
			<a
				href="https://www.instagram.com/crawfishkingseattle/"
				className="social"
			>
				<FontAwesomeIcon icon={faInstagram} size="2x" />
			</a>
			<a
				href="https://www.yelp.com/biz/crawfish-king-seattle-2"
				className="social"
			>
				<FontAwesomeIcon icon={faYelp} size="2x" />
			</a>
		</div>
	);
}