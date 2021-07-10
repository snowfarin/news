import React from 'react';
import './Styles/Othernews.css';

const Othernews = ({ news }) => {
  return (
    <div className="othernews">
      <h1>NEWS TOGETHER</h1>

      {news.map((data) => (
        <a href={`/news/${data.id}`}>
          <div className="othernews-pack">
            <h1>{data.title}</h1>
            <h2>{data.description}</h2>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Othernews;
