import React from 'react';

const Intro = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Intro</h2>
      </div>
      <div className="card-body">
        {/* Grid layout for photo on the left and text on the right */}
        <div className="text-white grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Left side: Photo for all screen sizes */}
          <div className="p-2 col-span-1 flex justify-center items-center">
            <img
              src="profile.jpeg" // Replace with your actual image URL
              alt="Profile"
              className="w-full h-auto max-w-xs rounded-lg"
            />
          </div>

          {/* Right side: Intro Text */}
          <div className="p-2 col-span-3 flex flex-col justify-center">
            <h3 className="text-xl font-bold">Hello, I'm [Your Name]</h3>
            <p className="mt-2 text-gray-300">
              Hi, I am Sheethal from Bengaluru. I grew up in a small town and moved to the Silicon City of India with a dream of working in the software industry, gaining financial freedom for my family, and earning the title of Software Engineer. Like many, I soon realized it was not as easy as I thought.  Now, after 3.5 years of facing clients, tackling new requirements, and debugging endless bugs, I can confidently call myself a software engineer. I’ve learned that no matter how tough the problem, I can solve it. If a new feature is needed, I’ll develop it; if bugs arise, I’ll fix them until they’re gone.
              
              Currently, I work as a Full-Stack Developer at Smart Controls India Limited, where I design, develop, and maintain scalable web and mobile applications using the MERN stack (MongoDB, Express.js, React, Node.js). With a track record of leading projects from concept to deployment, I collaborate with cross-functional teams to deliver user-centric solutions that optimize performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
