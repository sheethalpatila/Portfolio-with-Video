import React from 'react';
import './InfoCard.css'; // Import external CSS for styling

const imageDetails = [
  { url: 'html.png', skill: "HTML", experience: "2 Years" }, 
  { url: 'css.png', skill: "CSS", experience: "2 Years" }, 
  { url: 'javascript.png', skill: "JavaScript", experience: "3.5 Years" }, 
  { url: 'react.png', skill: "React", experience: "3.5 Years" }, 
  { url: 'mongo.png', skill: "MongoDB", experience: "3.5 Years" }, 
  { url: 'mui.png', skill: "Material UI", experience: "2.5 Years" }, 
  { url: 'node.png', skill: "Node JS", experience: "3.5 Years" }, 
  { url: 'bootstrap.png', skill: "Bootstrap", experience: "3.5 Years" }, 
  { url: 'reactnative.png', skill: "React Native", experience: "1.5 Years" }  
];

const Skills = () => {
  return (
    <div className=" card rounded-lg p-6">
      <div className="card-header mb-4">
        <h2 className="text-gray-200 text-xl font-mono">~/Skills$</h2>
      </div>
      <div className="card-body image-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{width:"100vh"}}>
        {imageDetails.map((details, index) => (
          <div key={index} className='bg-gray-900 rounded-lg p-2 shadow-lg flex flex-col items-center'>
            <div className="image-container mb-2">
              <img src={details.url} alt={details.skill} className="h-16 w-16 animated-image" /> 
            </div>
            <p className='text-green-400 font-semibold'>{details.skill}</p>
            <p className='text-gray-300'>{details.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
