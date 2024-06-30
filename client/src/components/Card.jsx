import React from 'react';
import clsx from 'clsx';

export default function Card({ imgSrc, children, className }) {
  const handleParallax = (e) => {
    const img = e.target;
    const speed = 3; // Adjust speed as needed for desired effect
    const x = (img.getBoundingClientRect().width / 2 - e.clientX) / speed;
    const y = (img.getBoundingClientRect().height / 2 - e.clientY) / speed;
    img.style.transform = `translate(${x}px, ${y}px)`;
  };

  const resetParallax = (e) => {
    const img = e.target;
    img.style.transform = 'translate(0, 0)';
  };

  return (
    <div
      className={clsx(
        'max-w-xl relative overflow-hidden group m-4', // Adjust as needed
        'bg-gray-100', // Background color
        'shadow-lg', // Shadow effect
        'hover:shadow-2xl', // Hover shadow effect
        'rounded-lg', // Rounded corners
        'transition duration-300 ease-in-out transform hover:scale-105', // Smooth scaling effect on hover
        className
      )}
    >
      <img
        className={clsx(
          'object-cover w-full h-96', // Adjust image height
          'transition duration-500 ease-out transform',
          'group-hover:scale-110', // Scale up on hover
          'relative' // Relative positioning for parallax effect
        )}
        src={imgSrc}
        alt=""
        onMouseMove={handleParallax} // Parallax effect on mouse move
        onMouseLeave={resetParallax} // Reset transform on mouse leave
      />
      <div className="p-4">
        {children} {/* Render children components inside the card */}
      </div>
    </div>
  );
}
