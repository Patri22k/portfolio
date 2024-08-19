import ContentPicture from '../assets/content-picture.png';

const ContentSection = () => {
    return (
        <div className="content-container">
            <div className="content-wrapper">
                <div className="image-container">
                    <img src={ContentPicture} alt="Content Picture"></img>
                </div>
                <div className="text-container">
                    <h5>About Me</h5>
                    <h2>My goal is to create software products, that everyone 
                        will enjoy.</h2>
                    <p>I'm passionate about creating software that not only 
                        functions seamlessly but also delights users. My experience 
                        spans both front-end and back-end development, allowing me 
                        to build robust and user-friendly applications. Studying at 
                        a leading university has sharpened my skills and deepened 
                        my commitment to developing products that people love 
                        to use.</p>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;