import React from "react";

const TopUsers = () => {
  const users = [
    { id: 1, name: "Alice", posts: 25 },
    { id: 2, name: "Bob", posts: 20 },
    { id: 3, name: "Charlie", posts: 18 },
    { id: 4, name: "David", posts: 15 },
    { id: 5, name: "Eve", posts: 12 },
  ];

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Top Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name} - {user.posts} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
