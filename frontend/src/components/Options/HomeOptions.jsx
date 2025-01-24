import React from 'react';

const HomeOptions = ({ options }) => {
  return (
    <div className="bg-yellow-50 py-10 px-5 md:px-20 lg:px-40">
      <h2 className="text-2xl font-bold mb-6">Explore History</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {options.map((option, index) => (
          <a
            key={index}
            href={option.link}
            className="flex flex-col items-center justify-center bg-yellow-50 border border-yellow-200 shadow-md rounded-lg p-6 text-center hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <div className="text-yellow-700 mb-4">{option.icon}</div>
            <h3 className="text-yellow-900 font-semibold text-sm">{option.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeOptions;