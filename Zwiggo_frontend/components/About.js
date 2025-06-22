import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-20 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-purple-700 mb-8 tracking-tight">
          About <span className="text-purple-500">Zwiggo</span>
        </h1>
        <p className="text-xl text-gray-700 mb-14 leading-relaxed max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-purple-600">Zwiggo</span> – your ultimate food delivery companion. 
          We bring delicious meals from your favorite local restaurants right to your doorstep 
          with lightning speed and top-notch service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          {[
            {
              icon: "🚀",
              title: "Our Mission",
              desc: "To revolutionize the food delivery experience by connecting people with amazing food and delivering it fast, fresh, and with a smile.",
            },
            {
              icon: "👨‍🍳",
              title: "What We Do",
              desc: "We partner with local eateries and popular chains to offer a wide variety of cuisines. Whether you're craving pizza, biryani, or a healthy salad — Zwiggo has you covered.",
            },
            {
              icon: "❤️",
              title: "Why Choose Us",
              desc: "Fast delivery, secure payments, live order tracking, and friendly customer support – all bundled in a sleek, user-friendly interface built just for you.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-purple-600 mb-3 flex items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-gray-500 text-sm sm:text-base">
          <p className="italic">
            Built with ❤️ by Monali
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
