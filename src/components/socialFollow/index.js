import React from 'react';
import './SocialFollow.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYelp
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="top-padding-10em">
      <a
        href="https://www.facebook.com/crawfishkingseattle"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://twitter.com/search?f=tweets&q=crawfishkingsea&src=typd"
        className="twitter social"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/crawfishkingseattle/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.yelp.com/biz/crawfish-king-seattle-2"
        className="yelp social"
      >
        <FontAwesomeIcon icon={faYelp} size="2x" />
      </a>
    </div>
  );
}