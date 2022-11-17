import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Home() {
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    const fetchTopNews = async () => {
      const request = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_TOKEN}`
      );
      const response = await request.json();
      setTopArticles(response.articles);
    };
    fetchTopNews();
  }, []);

  return (
    <section className="mx-auto lg:max-w-7xl">
      {!topArticles.length ? (
        "Fetching articles..."
      ) : (
        <div className="grid grid-cols-3">
          {/* Main news story */}
          <div className="relative col-span-3 lg:col-span-2">
            <a
              href={topArticles[6]?.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="object-contain rounded cursor-pointer"
                src={topArticles[6]?.urlToImage}
                alt="article"
              />
            </a>
            <div className="absolute bottom-4 md:bottom-20 lg:top-24 px-8 text-white max-w-[600px]">
              <p className="font-extralight">
                <span className="font-semibold">
                  {topArticles[6]?.source.name} /{" "}
                </span>
                {topArticles[6]?.publishedAt.substring(0, 10)}
              </p>
              <h3 className="text-lg lg:text-2xl py-2 font-extrabold">
                {topArticles[6]?.title}
              </h3>
              {/* <p>{truncateString(topArticles[0]?.description, 50)}</p> */}
              <p className="font-extralight">{topArticles[6]?.description}</p>
            </div>
          </div>

          {/* sidebar of main news */}
          <div className="hidden lg:inline-grid lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
