// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay } from "swiper/modules";

// export default function Banner() {
//   const words = ["Medicine", "Patients", "Doctor", "Treatments", "Hospital"];

//   return (
//     <div className="bg-gradient-to-tl from-blue-300 via-blue-900 to-blue-300 py-6 text-white font-bold font-serif">
//       <Swiper
//         slidesPerView={3}  
//         loop={true} 
//         autoplay={{ delay: 2000, disableOnInteraction: false }} 
//         modules={[Autoplay]}
//         className="mySwiper"
//       >
//         {words.map((word, index) => (
//           <SwiperSlide key={index}>
//             <span className="text-6xl font-extrabold flex justify-center">
//               {word}
//             </span>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }




















"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

export default function Banner() {
  const words = ["Medicine", "Patients", "Doctor", "Treatments", "Hospital"];

  return (
    <div className="bg-gradient-to-tl from-blue-300 via-blue-900 to-blue-300 py-6 text-white font-bold font-serif">
      <Swiper
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile screens
          640: { slidesPerView: 2 }, // Small tablets
          1024: { slidesPerView: 3 }, // Laptops and desktops
        }}
        className="mySwiper"
      >
        {words.map((word, index) => (
          <SwiperSlide key={index}>
            <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold flex justify-center">
              {word}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
