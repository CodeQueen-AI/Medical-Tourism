

export default function Services() {
  return (
    <div className='mb-[50px] mt-[50px] px-8 lg:px-20'>
      <div className='text-center mb-10'>
      <div className="text-center mb-10">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-blue-900">
          Leading Healthcare Specialties
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-blue-900 inline-flex" />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6'>
        {[
          { src: '/Service1.png', title: 'Heart Surgery' },
          { src: '/Service2.png', title: 'Organ Transplant' },
          { src: '/Service3.png', title: 'Cardiology' },
          { src: '/Service4.png', title: 'Neuro Surgery' },
          { src: '/Service5.png', title: 'Spine Surgery' },
          { src: '/Service6.png', title: 'Orthopedic' },
          { src: '/Service7.png', title: 'Cancer' },
          { src: '/Service8.png', title: 'Urology' },
          { src: '/Service9.png', title: 'ENT' },
          { src: '/Service10.png', title: 'Plastic Surgery' },
        ].map((service, index) => (
          <div
            key={index}
            className='relative p-6 border rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-500 hover:bg-blue-50'
          >
            <div className='flex flex-col items-center'>
              <div className='w-20 h-20 bg-gray-100 flex justify-center items-center rounded-full transition-all duration-300 hover:bg-blue-200'>
                <img src={service.src} alt={service.title} className='w-12 h-12' />
              </div>
              <h3 className='mt-4 text-lg font-bold text-center'>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
