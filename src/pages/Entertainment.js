import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

function Entertainment() {
  const [entertainmentArticles, setEntertainmentArticles] = useState([]);

  useEffect(() => {
    const fetchEntertainmentNews = async () => {
      const request = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${process.env.REACT_APP_API_TOKEN}`
      );
      const response = await request.json();
      setEntertainmentArticles(response.articles);
    };
    fetchEntertainmentNews();
  }, []);

  return (
    <section>
      {/* Grid of articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {/* Using implicit return */}
        {entertainmentArticles.map((article, index) => (
          <NewsCard articles={article} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Entertainment;
