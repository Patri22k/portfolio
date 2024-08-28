import { Link } from "react-router-dom";

// TODO: need designing first

function ContactPage() {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <div className="flex flex-col items-center text-center">
                <h2 className="w-full mb-6 font-medium text-4xl">Contact Page Under Construction</h2>
                <p className="flex justify-center w-full text-lg">
                    This contact page is taking shape,              <br />
                    A little time is all it'll take.                <br />
                    While it's not quite ready to connect,          <br />
                    Soon you'll find all you'd expect.              <br />
                    <br />
                    Please hold on and be assured,                  <br />
                    Your messages will be secured.                  <br />
                    Stay tuned for when it's set to go,             <br />
                    So reaching out will be a breeze, you know!     <br />
                </p>
                <Link to="/" className="mt-6 px-6 py-3 bg-indigo-500 text-white text-xl font-semibold rounded-md hover:bg-indigo-400">Back to Home</Link>
            </div>
        </div>
    );
};

export default ContactPage;