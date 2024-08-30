import { DiscordOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Navbar from "../../components/Navbar/Navbar";
import profilePicture from "../../assets/Profile-picture-without-me.jpg";

// TODO: change navbar links
// TODO: responsive design
// TODO: maybe add text to my profile icon in the footer

function ContactPage() {
    return (
        <div className="contact-page-container">
            <div className="contact-page-wrapper">
                <Navbar />
                <div className="contact-page-content-container py-16">
                    <div className="contact-page-content-wrapper px-4">
                        <div className="text-content-container flex flex-col items-center gap-y-4 my-4">
                            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
                                I Don't Byte!
                            </h1>
                            <p className="text-base lg:text-xl 2xl:text-2xl">console.log("Hello!");</p>
                        </div>
                        <div className="grid-layout grid grid-cols-1 grid-rows-1 gap-x-10 gap-y-8 mt-16 mx-auto max-w-[400px] text-white">

                            {/* EMAIL */}
                            <div className="contact-info-container flex flex-col items-center gap-y-4 bg-[#3f3f3f] rounded-xl px-10 py-6">
                                <MailOutlined className="text-4xl" />
                                <h2 className="font-medium text-xl">Mail Me</h2>
                                <p>bajzik.patrik6@gmail.com</p>
                            </div>

                            {/* PHONE */}
                            <div className="contact-info-container flex flex-col items-center gap-y-4 bg-[#3f3f3f] rounded-xl px-10 py-6">
                                <PhoneOutlined className="text-4xl" />
                                <h2 className="font-medium text-xl">Call Me</h2>
                                <p>+421 904 605 850</p>
                            </div>

                            {/* DISCORD */}
                            <div className="contact-info-container flex flex-col items-center gap-y-4 bg-[#3f3f3f] rounded-xl px-10 py-6">
                                <DiscordOutlined className="text-4xl" />
                                <h2 className="font-medium text-xl">Write Me</h2>
                                <p>Patri22k#2466</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-footer-container w-full px-10">
                    <div className="contact-footer-wrapper pt-24 pb-10">
                        <img className="w-14 max-w-full mb-8 text-sm rounded-2.5xl" src={profilePicture} alt="Profile picture"></img>
                        <div className="footer-links-container flex flex-col py-5 text-gray-500">
                            <a className="footer-links pb-1 mr-5 mb-5" href="https://www.instagram.com/patrik.bajzik/" target="_blank">
                                <p className="footer-links inline pb-1 mr-5 mb-5 text-xl shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.5)]">
                                    Instagram
                                </p>
                            </a>
                            <a className="footer-links pb-1 mr-5 mb-5" href="https://www.linkedin.com/in/patrik-bajzik/" target="_blank">
                                <p className="footer-links inline pb-1 mr-5 mb-5 text-xl shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.5)]">
                                    LinkedIn
                                </p>
                            </a>
                            <a className="footer-links pb-1 mr-5 mb-5" href="https://github.com/Patri22k" target="_blank">
                                <p className="footer-links inline pb-1 mr-5 mb-5 text-xl shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.5)]">
                                    GitHub
                                </p>
                            </a>
                            <a className="footer-links pb-1 mr-5 mb-5" href="https://www.facebook.com/pato.bajzik/" target="_blank">
                                <p className="footer-links inline pb-1 mr-5 mb-5 text-xl shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.5)]">
                                    Facebook
                                </p>
                            </a>
                            <a className="footer-links pb-1 mr-5 mb-5" href="https://stackoverflow.com/users/18243115/patrik-bajz%c3%adk" target="_blank">
                                <p className="footer-links inline pb-1 mr-5 mb-5 text-xl shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.5)]">
                                    Stack Overflow
                                </p>
                            </a>
                            <a className="footer-links pb-1 mr-5 mb-5" href="https://codepen.io/patri22k" target="_blank">
                                <p className="footer-links inline pb-1 mr-5 mb-5 text-xl shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.5)]">
                                    CodePen
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactPage;