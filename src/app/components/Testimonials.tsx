

'use client';

import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="bg-[url('/bg1.png')] bg-cover bg-center py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900">
            Hear from Our Satisfied Patients
          </h2>
          <p className="text-black mt-4 text-lg sm:text-xl md:text-2xl">
            Exceptional dental care, friendly service, and happy smiles. See what our patients have to say!
          </p>
          <button className="text-lg sm:text-xl md:text-2xl mt-6 bg-blue-700 text-white py-3 px-6 h-16 sm:h-20 w-40 sm:w-48 shadow-md transition hover:bg-white hover:text-blue-700 border border-blue-700">
            Book now
          </button>
        </div>

        <div className="grid gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border-l-4 border-blue-600 transform rotate-1 sm:rotate-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-lg sm:text-xl">★★★★★</span>
            </div>
            <p className="text-gray-700 italic text-sm sm:text-base">
              “I want to say thank you to my doctor Steve! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus.”
            </p>
            <div className="flex items-center mt-4">
              <Image
                src="/patient1.png"
                alt="Anna Bruke"
                width={40}
                height={40}
                className="rounded-full border-2 border-blue-600"
              />
              <div className="ml-3">
                <p className="font-bold text-gray-900 text-sm sm:text-base">Anna Bruke</p>
                <p className="text-gray-500 text-xs sm:text-sm">Blogger, USA</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border-r-4 border-blue-600 transform -rotate-1 sm:-rotate-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-lg sm:text-xl">★★★★★</span>
            </div>
            <p className="text-gray-700 italic text-sm sm:text-base">
              “Thank you for helping me overcome my fear of the dentist! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus.”
            </p>
            <div className="flex items-center mt-4">
              <Image
                src="/patient2.png"
                alt="Jakson Flame"
                width={40}
                height={40}
                className="rounded-full border-2 border-blue-600"
              />
              <div className="ml-3">
                <p className="font-bold text-gray-900 text-sm sm:text-base">Jakson Flame</p>
                <p className="text-gray-500 text-xs sm:text-sm">Salesman, UK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


