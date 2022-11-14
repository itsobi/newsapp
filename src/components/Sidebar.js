import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SidebarArticle from "./SidebarArticle";

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState(null);
  const [responseArticles, setResponseArticles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const request = await fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&from=2022-11-14&sortBy=popularity&apiKey=${process.env.REACT_APP_API_TOKEN}`
    );
    const response = await request.json();

    if (!response.articles.length) {
      setMessage("The search term you entered is not valid...");
    }
    setResponseArticles(response.articles);
    setSearchTerm("");
  };

  return (
    <div className="max-h-[500px] overflow-y-auto">
      {/* Search Bar */}
      <form
        className="max-w-[300px] mx-auto flex items-center border rounded-full py-2 px-4 bg-white"
        onSubmit={handleSubmit}
      >
        <MagnifyingGlassIcon className="w-4 h-4 mr-1" />
        <input
          type="text"
          className="outline-none"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button hidden type="submit"></button>
      </form>

      {/* Sidebar Articles */}
      <div className="">
        {message ? (
          <h4 className="text-center mt-6 text-red-600">{message}</h4>
        ) : (
          responseArticles.map((article, index) => {
            return <SidebarArticle article={article} key={index} />;
          })
        )}
      </div>
    </div>
  );
}

export default Sidebar;
