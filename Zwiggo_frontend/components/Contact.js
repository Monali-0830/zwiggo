import useOnline from "../utils/useOnline";
import NoInternet from "../utils/noInternet";

const Contact = () => {
    const onlineStatus = useOnline();

    if (onlineStatus === false) return <NoInternet />;

    return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full bg-white p-10 rounded-3xl shadow-2xl border border-purple-100">
        <h2 className="text-4xl font-extrabold text-purple-700 text-center mb-6 tracking-tight">
            Let's Connect
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-md mx-auto">
            Got a question, feedback, or opportunity? Drop us a message below and
            we'll get back to you as soon as possible!
        </p>

        {/* ✅ Replace `yourFormIdHere` with your actual Formspree ID */}
        <form
            action="https://formspree.io/f/mvgakerz"
            method="POST"
            className="space-y-6"
        >
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
            </label>
            <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
            </label>
            <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
            </label>
            <textarea
                name="message"
                rows="5"
                required
                placeholder="Type your message here..."
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm resize-none"
            ></textarea>
        </div>

        <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        >
            Send Message
        </button>
        </form>
    </div>
    </div>
);
};

export default Contact;
