import { useState } from 'react';

// Sample data for the flags and countries
const flags = [
  { id: 1, country: 'Albania', imgSrc: 'path_to_flag_image' },
  { id: 2, country: 'Azerbaijan', imgSrc: 'path_to_flag_image' },
  { id: 3, country: 'Andorra', imgSrc: 'path_to_flag_image' },
  { id: 4, country: 'Belarus', imgSrc: 'path_to_flag_image' },
  { id: 5, country: 'Armenia', imgSrc: 'path_to_flag_image' },
  { id: 6, country: 'Austria', imgSrc: 'path_to_flag_image' },
  { id: 1, country: 'Albania', imgSrc: 'path_to_flag_image' },
  { id: 2, country: 'Azerbaijan', imgSrc: 'path_to_flag_image' },
  { id: 3, country: 'Andorra', imgSrc: 'path_to_flag_image' },
  { id: 4, country: 'Belarus', imgSrc: 'path_to_flag_image' },
  { id: 5, country: 'Armenia', imgSrc: 'path_to_flag_image' },
  { id: 6, country: 'Austria', imgSrc: 'path_to_flag_image' },
  // Add more countries and flags here
];

const ArrowButton = ({ direction = 'right', onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gray-400 rounded-full hover:bg-gray-200 focus:outline-none"
    >
      <span className={`text-green-900 text-lg ${direction === 'left' ? 'rotate-180' : ''}`}>
        &gt;
      </span>
    </button>
  );
};

const Countires = () => {
  const [selectedTab, setSelectedTab] = useState('Europe');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // Adjust to show 12 flags on larger screens and 6 on smaller screens
    const increment = window.innerWidth >= 1024 ? 12 : 6;
    if (currentIndex < flags.length - increment) {
      setCurrentIndex(currentIndex + increment);
    }
  };

  const handlePrev = () => {
    const decrement = window.innerWidth >= 1024 ? 12 : 6;
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - decrement);
    }
  };

  return (
    <div className="max-w-full mx-auto py-4 px-4 md:py-8 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 text-lg md:text-2xl">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <button
            className={`px-2 py-1 md:px-4 md:py-2 ${selectedTab === 'Europe' ? 'text-green-950 border-b-2 border-green-600' : 'text-gray-500'} focus:outline-none`}
            onClick={() => setSelectedTab('Europe')}
          >
            Europe
          </button>
          <button
            className={`px-2 py-1 md:px-4 md:py-2 ${selectedTab === 'Asia' ? 'text-green-950 border-b-2 border-green-600' : 'text-gray-500'} focus:outline-none`}
            onClick={() => setSelectedTab('Asia')}
          >
            Asia
          </button>
          <button
            className={`px-2 py-1 md:px-4 md:py-2 ${selectedTab === 'Americas' ? 'text-green-950 border-b-2 border-green-600' : 'text-gray-500'} focus:outline-none`}
            onClick={() => setSelectedTab('Americas')}
          >
            Americas
          </button>
        </div>
        <input
          type="text"
          placeholder="Search here"
          className="px-2 py-1 md:px-4 md:py-2 border rounded-full focus:outline-none text-sm md:text-base"
        />
      </div>

      <div className="relative">
        <div className="flex items-center justify-between">
          <ArrowButton direction="left" onClick={handlePrev} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {flags.slice(currentIndex, currentIndex + 12).map((flag, index) => (
              <div key={flag.id} className="text-center">
                <img
                  src={flag.imgSrc}
                  alt={`${flag.country} flag`}
                  className="w-16 h-12 md:w-20 md:h-14 mx-auto"
                />
                <p className="mt-2 text-gray-700 text-sm md:text-base">{flag.country}</p>
              </div>
            ))}
          </div>
          <ArrowButton direction="right" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Countires;
