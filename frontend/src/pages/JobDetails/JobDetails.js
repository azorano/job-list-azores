/*

src/pages/JobDetails/JobDetails.js

*/

// initial job details card

import React from 'react';

const JobDetails = ({ newPost, title, company, location, salaryRange, typeContract, tags, description, island, employerId, easyApply }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-md mx-auto border border-gray-200">
      {/* New Post Badge */}
      <div className="flex justify-between items-center mb-4">
        {newPost && <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">New Posting</span>}
        {easyApply && <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Easy Apply</span>}
      </div>

      {/* Job Title and Company */}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">
        {company} - {location}
      </p>

      {/* Contract Type and Salary */}
      <div className="flex justify-between text-gray-600 text-sm mb-4">
        <span>{typeContract}</span>
        <span>{salaryRange || 'Salary Not Specified'}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4">{description}</p>

      {/* Island Location */}
      <p className="text-gray-500 text-xs mb-2">Location: {island}</p>

      {/* Employer ID */}
      <p className="text-gray-500 text-xs mb-2">Employer ID: {employerId}</p>

      {/* Apply Button */}
      <div className="mt-4">
        <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;
