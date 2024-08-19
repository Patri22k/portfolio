import profilePicture from "../assets/Profile-picture-without-me.jpg";
import facebookIcon from '../assets/Logos/facebook-logo.svg';
import instagramIcon from '../assets/Logos/instagram-logo.svg';
import twitterIcon from '../assets/Logos/twitter-logo.svg';
import githubIcon from '../assets/Logos/github-logo.svg';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-text-wrapper">
                <p>© 2024 All Rights Reserved</p>
                <img className="" src={profilePicture} alt="Profile picture"></img>
                <p>Designed with Precision</p>
            </div>
            <div className="footer-social-media-wrapper">
                <div className="link-block">
                    <img className="w-[50px] h-[50px]" src={facebookIcon} alt="Facebook Icon"></img>
                </div>
                <div className="link-block">
                    <img className="w-[50px] h-[50px]" src={instagramIcon} alt="Instagram Icon"></img>
                </div>
                <div className="link-block">
                    <img className="w-[50px] h-[50px]" src={twitterIcon} alt="Twitter Icon"></img>
                </div>
                <div className="link-block">
                    <img className="w-[50px] h-[50px]" src={githubIcon} alt="GitHub Icon"></img>
                </div>
            </div>
        </div>
    );
};

export default Footer;