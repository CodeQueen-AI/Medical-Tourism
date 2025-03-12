'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };

  const slides = [
    {
      title: "Top Neurology Care for International Patients",
      description: "Receive expert neurological treatment with personalized care and advanced technology, along with full support for your medical journey, from consultation to recovery",
      buttonText: "Learn More",
      image: "/Home1.jpg",
      badge: "/Home small badge1.png",
      gradientClass:"bg-gradient-to-tl from-blue-800 via-blue-200 to-white",
      buttonBorder: "border-blue-900", 
      titleGradient: "bg-gradient-to-r from-blue-900 via-blue-400 to-blue-500",
    },
    
    {
      title: "Healthy Heart, Healthy Life – Expert Cardiology Care",
      description: "Providing advanced heart care with compassion and expertise. Your heart health is our priority, ensuring a healthier and happier life with personalized treatments and preventive care",
      buttonText: "Learn More",
      image: "/Home2.jpg",
      badge: "/Home small badge2.png",
      gradientClass: "bg-gradient-to-tl from-blue-700 via-white bg-blue-300",
      buttonBorder: "border-blue-900", // Purple border for both slides
      titleGradient: 'bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900',
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`relative flex items-center justify-between gap-12 px-10 py-16 min-h-screen ${slide.gradientClass}`}
        >
          {/* Left Side - Content */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center mt-28">
            <h1 className={`text-4xl md:text-6xl font-bold font-serif leading-tight ${slide.titleGradient} bg-clip-text text-transparent`}>
              {slide.title}
            </h1>
            <p className="text-black mt-4 text-lg font-semibold">{slide.description}</p>

            {/* Dynamic Button */}
            <button className={`mt-6 px-6 py-5 relative text-black font-bold transition-all duration-300 ease-in-out w-auto max-w-xs
             before:absolute before:top-0 before:left-0 before:w-6 before:h-6 before:border-t-4 before:border-l-4 before:border-[#00008B] before:transition-all before:duration-300
             after:absolute after:bottom-0 after:right-0 after:w-6 after:h-6 after:border-b-4 after:border-r-4 after:border-[#00008B] after:transition-all after:duration-300
             hover:before:w-full hover:before:h-full hover:after:w-full hover:after:h-full
             hover:before:delay-150 hover:after:delay-150 text-2xl font-serif`}>
              {slide.buttonText}
</button>

          </div>

          {/* Right Side - Image */}
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 w-[550px] h-[550px] hidden md:block">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src={slide.image}
                alt="Doctor"
                width={550}
                height={550}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Badge Icon */}
            <div className="absolute bottom-3 left-0 w-48 h-48 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-300">
              <Image
                src={slide.badge}
                alt="Badge Icon"
                width={72}
                height={72}
                className="w-40 h-40"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default HeroSlider;


































