import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

function Business() {
  const [businessArticles, setBusinessArticles] = useState([]);

  useEffect(() => {
    const fetchBusinessNews = async () => {
      const request = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_API_TOKEN}`
      );
      const response = await request.json();
      setBusinessArticles(response.articles);
    };
    fetchBusinessNews();
  }, []);

  return (
    <>
      {!businessArticles ? (
        <h1 className="text-center">Grabbing Articles</h1>
      ) : (
        <section>
          {/* Grid of articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {/* Using implicit return */}
            {businessArticles.map((article, index) => (
              <NewsCard articles={article} key={index} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Business;
