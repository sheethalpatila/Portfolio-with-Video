import React from 'react';
import './InfoCard.css'; // Import external CSS for styling

const imageDetails = [
  {url:'html.png',skill:"HTML",experience:"2 Years"}, 
  {url:'css.png',skill:"CSS",experience:"2 Years"}, 
  {url:'javascript.png',skill:"Java script",experience:"3.5 Years"}, 
  {url:'react.png',skill:"React",experience:"3.5 Years"}, 
  {url:'mongo.png',skill:"Mongo DB",experience:"3.5 Years"}, 
  {url:'mui.png',skill:"Material UI",experience:"2.5 Years"}, 
  {url:'node.png',skill:"Node JS",experience:"3.5 Years"}, 
  {url:'bootstrap.png',skill:"Bootstrap",experience:"3.5 Years"}, 
  {url:'reactnative.png',skill:"ReactNative",experience:"1.5 Years"}  
];

const InfoCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Image Gallery</h2>
      </div>
      <div className="card-body" style={{width:"100vh"}}>
        <div className="image-grid grid grid-cols-1 sm:grid-cols-1 gap-4">
          {imageDetails.map((details, index) => (
            <div className='card pt-2  bg-black-800'>
            <div key={index} className="image-container ">
              <img src={details.url} alt={`Image ${index + 1}`} className="animated-image" /> 
            </div>
            <div className='flex justify-center text-gray-300'>
            <p >{details.skill}</p> 
            </div>
            <div className='flex justify-center text-gray-300'>
            <p >{details.experience}</p> 
            </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default InfoCard;
