import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

function Sports() {
  const [sportsArticles, setSportsArticles] = useState([]);

  useEffect(() => {
    const fetchSportsNews = async () => {
      const request = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${process.env.REACT_APP_API_TOKEN}`
      );
      const response = await request.json();
      setSportsArticles(response.articles);
    };
    fetchSportsNews();
  }, []);

  return (
    <section>
      {/* Grid of articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {/* Using implicit return */}
        {sportsArticles.map((article, index) => (
          <NewsCard articles={article} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Sports;
