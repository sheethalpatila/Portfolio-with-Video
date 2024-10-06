import React from 'react';
import GenCard from './GenCard';
import Intro from './Intro';  
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import BlogList from './Bloggs';

const FirstSection = () => {
  return (
    <div>
      {/* Left aligned */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        <div className="p-4 flex justify-start" name="section1">
          <Intro />
        </div>
      </div>

      {/* Center aligned */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-10">
        <div className="p-4 flex justify-center" name="section2">
          <Skills />
        </div>
      </div>

      {/* Right aligned */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-10">
        <div className="p-4 flex justify-end">
          <Projects />
        </div>
      </div>

      {/* Center aligned */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-10">
        <div className="p-4 flex justify-center">
          <Experience />
        </div>
      </div>

      {/* Left aligned */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10">
        <div className="p-4 flex justify-start">
          <BlogList />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
