import React, { useState, useEffect } from "react";

// Experience data
const experiences = [
    {
        id: "1",
        title: "MERN Full-Stack Developer",
        company: "Smart Controls India Ltd, Bengaluru",
        description:
            "I specialize in developing and maintaining MERN stack (MongoDB, Express.js, React, Node.js) web applications. My role includes designing and implementing dynamic user interfaces, managing client requirements, and delivering tailored solutions. I coordinate with my team for code management, documentation, and on-site deployments. I also use Jest and React Testing Library for testing, and perform server redundancy tests to ensure high availability and reliability.",
        year: "10-2022 - PRESENT",
    },
    {
        id: "2",
        title: "MERN Full-Stack Developer",
        company: "Axxonet System Solutions, Bengaluru",
        description:
            "Designed and prototyped microservices-based web and mobile applications. Collaborated with UX designers and developers to refine products. Independently developed multiple apps, integrated new features and patches, and documented code. Played a key role in gathering requirements and translating them into technical documentation and implementations.",
        year: "09-2021 - 09-2022",
    },
    {
        id: "3",
        title: "UI Developer",
        company: "Amopa Solutions, Bengaluru",
        description:
            "Worked as a Frontend Developer Intern and developed dynamic, user-friendly, and interactive websites using Angular.",
        year: "12-2020 - 05-2021",
    },
    {
        id: "4",
        title: "Intern",
        company: "Varidhi Technologies, Bengaluru",
        description:
            "Industrial internship focused on learning industrial criteria involved in manufacturing and production of PCB boards and important techniques involved in PCB design.",
        year: "07-2019 - 08-2019",
    },
];

// Card component to display company names and roles
const ExperienceCard = ({ company, isActive, onClick, year, role }) => (
    <div
        onClick={onClick}
        className={`p-3 mb-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105`}
        style={{
            backgroundColor: isActive ? "#1E1E1E" : "#2E3440",
            color: isActive ? "#00FF00" : "#D8DEE9",
            border: isActive ? "2px solid #00FF00" : "2px solid #2E3440",
            fontFamily: "'Courier New', monospace",
        }}
    >
        <div className="text-md font-semibold">{company}</div>
        <div className="text-xs font-semibold">{year} - {role}</div>
    </div>
);

// Main Experience component
const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);

    // Load the first experience by default
    useEffect(() => {
        setSelectedExperience(experiences[0]);
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className="card w-2/3 p-4 bg-gray-900 rounded-lg shadow-lg" style={{ fontFamily: "'Courier New', monospace" }}>
                <div className="card-header text-green-400 font-mono text-2xl mb-4" style={{borderTopRightRadius:"5px",borderTopLeftRadius:"5px"}}>
                    <h2 className="card-title" >~/experience$</h2>
                </div>
                <div className="card-body flex" style={{borderBottomRightRadius:"5px",borderBottomLeftRadius:"5px"}}>
                    {/* Left Column: List of Companies */}
                    <div className="w-1/2 pr-4">
                        <div className="card-header mb-4 text-green-300">
                            <h2 className="card-title">Company Details</h2>
                            <p className="text-gray-500 text-xs">Select a company to see details</p>
                        </div>
                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={experience.id}
                                company={experience.company}
                                year={experience.year}
                                role={experience.title}
                                isActive={selectedExperience?.id === experience.id}
                                onClick={() => setSelectedExperience(experience)}
                            />
                        ))}
                    </div>

                    {/* Right Column: Details of Selected Experience */}
                    <div className="w-1/2">
                        {selectedExperience ? (
                            <div className="bg-black text-green-400 p-4 border border-green-500 rounded-md">
                                <h2 className="text-xl mb-2">{selectedExperience.title}</h2>
                                <p className="text-sm text-green-300">{selectedExperience.description}</p>
                                <div className="text-xs mt-4">Company: {selectedExperience.company}</div>
                                <div className="text-xs">Duration: {selectedExperience.year}</div>
                            </div>
                        ) : (
                            <p className="text-gray-500">Select a company to see details</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
