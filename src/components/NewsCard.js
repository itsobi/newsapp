import React from "react";

function NewsCard({ articles }) {
  const { author, title, description, url, urlToImage, publishedAt, source } =
    articles;
  return (
    <div className="relative border border-yellow-400 rounded-lg m-4">
      <p className="absolute top-10 right-10 z-10 text-yellow-400 font-extrabold">
        {source.name}
      </p>
      <div className="p-6">
        <a href={url} target="_blank">
          <img src={urlToImage} className="rounded-lg w-full" alt="article" />
        </a>
        <h1 className="font-bold text-2xl my-4">{title}</h1>
      </div>
    </div>
  );
}

export default NewsCard;
