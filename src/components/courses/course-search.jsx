import React from "react";

const CourseSearch = ({ onSearch }) => {
  return (
    <div>
      <input
        className="w-full p-2 m-5 mx-0 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500"
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default CourseSearch;
