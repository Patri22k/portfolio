import ContentPicture from '../assets/content-picture.png';

const ContentSection = () => {
    return (
        <div className="content-container">
            <div className="content-wrapper flex flex-col items-center justify-between pt-[90px] pb-[100px] mx-auto w-[90%] max-w-[1140px]">
                <div className="content-inner-wrapper flex flex-col items-center justify-between w-full">
                    <div className="image-container flex justify-stretch relative w-full max-w-[500px]">
                        <img className='inline-block align-baseline w-full max-w-[480px] mx-auto' src={ContentPicture} alt="Content Picture"></img>
                    </div>
                    <div className="text-container flex flex-col w-full max-w-[560px] mt-[60px]">
                        <h3 className="font-semibold text-lg h-[140%]">About Me</h3>
                        <h2 className="mt-5 mb-8 font-bold text-3xl h-[120%]">My goal is to create software products, that everyone
                            will enjoy.</h2>
                        <p className="max-w-none font-medium text-base text-black/75">I'm passionate about creating software that not only
                            functions seamlessly but also delights users. My experience
                            spans both front-end and back-end development, allowing me
                            to build robust and user-friendly applications. Studying at
                            a leading university has sharpened my skills and deepened
                            my commitment to developing products that people love
                            to use.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;