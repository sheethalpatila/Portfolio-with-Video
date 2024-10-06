import React from "react";

const projects = [
    {
        year: "Year",
        title: "Projects",
        builtWith: "Built with",
        link: "Links",
    },
    {
        year: "2024",
        title: "API Testing Tool",
        builtWith: ["React", "Material-UI"],
        link: "https://test-your-api.vercel.app",
    },
    {
        year: "2024",
        title: "JSON Comparator",
        builtWith: ["React", "Material-UI"],
        link: "https://json-comparator-six.vercel.app",
    },
    {
        year: "2024",
        title: "Portfolio",
        builtWith: ["React", "Material-UI", "Tailwind CSS"],
        link: "https://sheethalpatilportfolio.vercel.app",
    },
    {
        year: "2024",
        title: "Company About Page",
        builtWith: ["React", "Material-UI", "Tailwind CSS"],
        link: "https://company-about-page.vercel.app",
    },
    {
        year: "2024",
        title: "T-shirts E-commerce",
        builtWith: ["React", "Bootstrap", "JWT"],
        link: "https://github.com/sheethalpatila/frontend",
    },
];

const ProjectCard = ({ year, title, builtWith, link }) => (
    <div className="bg-gray-900 shadow-lg rounded-lg p-4 mb-4">
        <div className="flex flex-wrap justify-between items-center">
            <div className="w-full sm:w-1/6 text-center">
                <p className="text-xs text-gray-500">{year}</p>
            </div>
            <div className="w-full sm:w-2/6 text-center">
                <p className="text-lg font-semibold text-green-400">{title}</p>
            </div>
            <div className="w-full sm:w-2/6 text-center">
                {Array.isArray(builtWith) && builtWith.length ? (
                    <div className="flex justify-center flex-wrap gap-2">
                        {builtWith.map((item) => (
                            <span
                                key={item}
                                className="px-2 py-1 bg-blue-600 text-white rounded-full text-xs"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-gray-300">{builtWith}</p>
                )}
            </div>
            <div className="w-full sm:w-1/6 text-center">
                {link !== "Links" ? (
                    <a
                        className="text-blue-400 text-sm hover:underline"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Link
                    </a>
                ) : (
                    <p className="text-sm text-gray-300">{link}</p>
                )}
            </div>
        </div>
    </div>
);

const Projects = () => {
    return (
        <div className="card">
            <div className="card-header">
            <h2 className="text-gray-200 text-sm font-mono">~/Projects$</h2>
            </div>
            <div className="card-body">
                <div className="container mx-auto p-4">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
