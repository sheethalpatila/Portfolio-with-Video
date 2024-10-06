import React from 'react';
import { Link } from 'react-scroll';

const VerticalNav = () => {
  return (
    <div className="fixed right-0 top-0 h-screen flex flex-col justify-center items-center space-y-4">
      {/* Link to different sections */}
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        duration={500}
        className="cursor-pointer text-gray-500 hover:text-black"
      >
        Section 1
      </Link>
      <Link
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        duration={500}
        className="cursor-pointer text-gray-500 hover:text-black"
      >
        Section 2
      </Link>
      <Link
        activeClass="active"
        to="section3"
        spy={true}
        smooth={true}
        duration={500}
        className="cursor-pointer text-gray-500 hover:text-black"
      >
        Section 3
      </Link>
      <Link
        activeClass="active"
        to="section4"
        spy={true}
        smooth={true}
        duration={500}
        className="cursor-pointer text-gray-500 hover:text-black"
      >
        Section 4
      </Link>
    </div>
  );
};

export default VerticalNav;
