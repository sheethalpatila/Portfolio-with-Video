import React from 'react';

// Sample blog data
const blogs = [
  {
    id: 1,
    title: 'Understanding JavaScript Closures',
    date: '2024-09-20',
    description: 'A deep dive into how closures work in JavaScript with examples.',
  },
  {
    id: 2,
    title: 'Mastering React Hooks',
    date: '2024-10-02',
    description: 'A guide to using React hooks effectively in your functional components.',
  },
  {
    id: 3,
    title: 'Exploring MongoDB Aggregation Pipelines',
    date: '2024-08-15',
    description: 'Learn how to use aggregation pipelines in MongoDB for complex data queries.',
  },
  {
    id: 4,
    title: 'CSS Grid vs Flexbox: Which One to Use?',
    date: '2024-07-30',
    description: 'A comparison of CSS Grid and Flexbox with use-case examples.',
  },
];

// Terminal-like Blog List Component
const BlogList = () => {
  return (
    <div className="card">
    <div className="card-header">
      <h2 className="card-title">~/Blog_Entries$</h2>
    </div>
    <div className=" ">
    <div className="bg-black text-green-400  " > 
      <div className="space-y-6 p-2">
        {blogs.map((blog) => (
          <div key={blog.id} className="border border-green-400 p-2 rounded-md font-mono">
            <h2 className="text-xs text-green-300">[ {blog.date} ]</h2>
            <h3 className="text-md text-green-100 mt-2">{blog.title}</h3>
            <p className="text-sm text-green-200 mt-2">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
        </div> 
  </div>
  );
};

export default BlogList;
