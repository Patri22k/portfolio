import ContentPicture from '../assets/content-picture.jpg';

const ContentSection = () => {
    return (
        <div className="content-container">
            <div className="content-wrapper flex flex-col items-center justify-between pt-[90px] pb-[100px] mx-auto w-[90%] max-w-[1300px] md:pt-36 lg:py-24 lg:mt-16 lg:mx-auto">
                <div className="content-inner-wrapper flex flex-col items-center justify-between w-full lg:flex-row lg:items-stretch">
                    <div className="image-container flex justify-stretch relative w-full max-w-[500px] lg:w-[45%] lg:max-w-none">
                        <img className='inline-block object-cover align-baseline w-full mx-auto max-h-[70vh] rounded-2xl' src={ContentPicture} alt="Content Picture"></img>
                    </div>
                    <div className="text-container flex flex-col justify-center w-full max-w-[560px] mt-[60px] lg:m-0 lg:w-[45%] lg:max-w-none">
                        <h3 className="font-semibold text-lg 2xl:text-2xl">About Me</h3>
                        <h2 className="mt-5 mb-8 font-bold text-3xl lg:text-4xl 2xl:text-5xl">
                            My goal is to create software products, that everyone
                            will enjoy.</h2>
                        <p className="max-w-none font-medium text-base text-black/60 2xl:text-xl">
                            I'm passionate about creating software that not only
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