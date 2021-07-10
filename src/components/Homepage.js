import React from 'react';
import './Styles/Homepage.css';

const Homepage = (props) => {
  const topstory = props.topstory;
  const interesting = props.interesting;
  return (
    <div className="homepage__main__container">
      <div className="interesting__and__topnews">
        <div className="interesting__news__container">
          {interesting.map((data) => (
            <a href={`/news/${data.id}`}>
              <div className="interesting__one">
                <img src={data.url} />
                <h1>{data.title}</h1>
              </div>
            </a>
          ))}
        </div>
        <div className="topnews__container" id="topstories">
          <h1>TOP STORIES</h1>
          {topstory.map((data) => (
            <a href={`/news/${data.id}`}>
              <div className="topnews__pack">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
