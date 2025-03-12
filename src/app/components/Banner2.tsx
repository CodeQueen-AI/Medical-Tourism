
'use client';

import Image from 'next/image';

export default function DoctorService() {
  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg4.png')" }}
    >
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">Leading Healthcare Specialties</h1>
        <div className="flex mt-2 justify-center">
          <div className="w-12 sm:w-16 h-1 rounded-full bg-blue-900 font-serif inline-flex" />
        </div>
      </div>
      
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 sm:gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6 sm:space-y-10 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {['Emergency Cases', 'Modern Clinic', '24/7 Support', 'Specialized Doctors', "Expert Doctor's", '100% Secure'].map((item, index) => (
              <div
                key={index}
                className="border-2 border-blue-900 rounded-full px-4 sm:px-6 py-3 sm:py-4 text-blue-900 text-sm sm:text-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-900 hover:text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative flex justify-center">
          <div className="w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            <Image
              src="/Choose1.jpg"
              alt="Doctor"
              width={250}
              height={250}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-7 bg-gradient-to-bl from-blue-300 via-blue-950 to-blue-100 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center text-center shadow-lg hidden sm:flex">
  <h2 className="text-3xl sm:text-4xl font-bold">99%</h2>
  <p className="text-xs sm:text-base">Positive Rating</p>
</div>

        </div>
      </div>
    </div>
  );
}
