import React from "react";
import PostCard from "../components/PostCard";

const Feed = () => {
  const feed = [
    { id: 1, user: "Alice", content: "Learning React is fun!", time: "2 mins ago" },
    { id: 2, user: "Bob", content: "JavaScript is amazing!", time: "10 mins ago" },
  ];

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Live Feed</h2>
      {feed.map((post) => (
        <PostCard key={post.id} user={post.user} content={post.content} time={post.time} />
      ))}
    </div>
  );
};

export default Feed;
