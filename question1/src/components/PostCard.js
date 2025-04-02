import React from "react";

const PostCard = ({ user, content, time }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-4">
      <h3 className="font-semibold text-lg">{user}</h3>
      <p className="text-gray-700">{content}</p>
      <span className="text-gray-500 text-sm">{time}</span>
    </div>
  );
};

export default PostCard;
