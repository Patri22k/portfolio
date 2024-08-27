import { Button } from "antd";

const HeroSection = () => {
    return (
        <div className="hero-container py-20 min-[480px]:pt-24 min-[480px]:pb-10 -z-10">
            <div className="main-container px-4 md:px-6">
                <div className="title-wrap-hero flex flex-col items-center gap-y-6">
                    <hr className="w-24 h-3 m-auto bg-gradient-to-r from-white to-black rounded-e-lg" />
                    <div className="w-full max-w-[1008px]">
                        <h2 className="text-4xl font-bold text-center md:text-5xl lg:text-6xl">Hi! I'm Patrik Bajzík</h2>
                    </div>
                    <div className="w-full max-w-[600px]">
                        <p className="text-center font-normal lg:text-xl">I am a full stack programmer and software developer <br />
                            based in Trnava, Slovakia.</p>
                    </div>
                    <div className="mt-4">
                        <Button className="flex justify-center items-center px-6 py-2 min-w-[200px] h-[52px] bg-black text-white font-medium">Contact Me</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;