'use client';

export default function CovidBanner() {
  return (
    <div className="bg-gradient-to-tr from-blue-950 via-blue-400 to-blue-900 text-white p-6 px-10 flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto h-auto md:h-40">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-semibold">Health & Safety Guidelines</h2>
        <p className="mt-2 text-sm space-x-4">
          <span>• Equipment sterilization</span>
          <span>• Personal protective equipment</span>
          <span>• Screening</span>
          <span>• Emergency preparedness</span>
        </p>
      </div>
      <div className="border p-3 text-center mt-4 md:mt-0 transition duration-300 hover:bg-white hover:text-blue-600 hover:border-blue-600">
        <p className="text-sm">Emergency Line</p>
        <p className="text-lg font-bold">0300-100-900</p>
      </div>
    </div>
  );
}
