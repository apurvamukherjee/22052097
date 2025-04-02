import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-around">
      <Link to="/top-users" className="text-blue-500 font-semibold hover:underline">
        Top Users
      </Link>
      <Link to="/trending-posts" className="text-blue-500 font-semibold hover:underline">
        Trending Posts
      </Link>
      <Link to="/feed" className="text-blue-500 font-semibold hover:underline">
        Feed
      </Link>
    </nav>
  );
};

export default Navbar;
