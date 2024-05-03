import { createElement } from 'react';
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiGitlab,
  FiChrome,
  FiTwitter,
  FiYoutube,
  FiPhone,
  FiMail,
  FiGlobe,
} from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';

const ICONS_LIST = {
  FacebookIcon: FiFacebook,
  InstagramIcon: FiInstagram,
  LinkedinIcon: FiLinkedin,
  GithubIcon: FiGithub,
  GitlabIcon: FiGitlab,
  ChromeIcon: FiChrome,
  YoutubeIcon: FiYoutube,
  TwitterIcon: FiTwitter,
  PhoneIcon: FiPhone,
  MailIcon: FiMail,
  LocationIcon: SlLocationPin,
  GlobeIcon: FiGlobe,
};

const createReactIcon = (icon) => {
  if (ICONS_LIST[icon] !== undefined) return createElement(ICONS_LIST[icon]);
  else return createElement(ICONS_LIST['GlobeIcon']);
};

export default createReactIcon;
