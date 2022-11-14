import React from "react";

function SidebarArticle({ article }) {
  const { title, url, urlToImage, publishedAt } = article;

  const truncateString = (string, number) => {
    if (number >= string.length) return string;

    return string.slice(0, number) + "...";
  };
  return (
    <div className="my-6 mx-8">
      <div className="flex items-center justify-center">
        <div>
          {/* image */}
          <img
            className="max-w-[100px] max-h-[100px] rounded-lg"
            src={urlToImage}
            alt="article"
          />
        </div>

        <div className="ml-8">
          {/* article content */}
          <h6>
            <span className="text-yellow-400">{article.source.name}</span> /{" "}
            <span className="font-extralight">
              {publishedAt.substring(0, 10)}
            </span>
          </h6>
          <p className="font-semibold">{truncateString(title, 50)}</p>
        </div>
      </div>

      <div className="border my-6" />
    </div>
  );
}

export default SidebarArticle;
