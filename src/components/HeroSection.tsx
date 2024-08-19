import { Button } from "antd";

const HeroSection = () => {
    return (
        <div className="hero-container bg-red-600 h-[10%]">
            <div className="title-wrap-hero">
                <h2>Hi! I'm Patrik Bajzík</h2>
                <p>I am a full stack programmer and software developer
                    based in Trnava, Slovakia.</p>
                <Button>Contact Me</Button>
            </div>
        </div>
    );
};

export default HeroSection;