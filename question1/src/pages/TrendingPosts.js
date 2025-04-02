import React from "react";

const TrendingPosts = () => {
  const posts = [
    { id: 1, title: "React Hooks Explained", comments: 50 },
    { id: 2, title: "JavaScript Closures", comments: 45 },
    { id: 3, title: "CSS Grid vs Flexbox", comments: 40 },
  ];

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Trending Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            {post.title} - {post.comments} comments
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
