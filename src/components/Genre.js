import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Genre.css';

const Genre = (props) => {
  var first = [];
  var restdata = [];
  const local = props.local;
  const india = props.india;
  const world = props.world;
  const business = props.business;
  const tech = props.tech;
  const movies = props.movies;
  const sports = props.sports;
  const health = props.health;

  //to handle onclicking a news

  //recent to the top in genre card
  const datadivider = (data) => {
    var count = 0;
    data.forEach((x) => {
      if (count === 0) {
        first.push(x);
        count++;
      } else {
        restdata.push(x);
        count++;
      }
    });
  };

  //to reset the data
  const resetdata = () => {
    first = [];
    restdata = [];
  };

  return (
    <div className="genre">
      <div className="localnews__container genre__container" id="local">
        <h1>LOCAL</h1>
        {datadivider(local)}
        {first.map((data) => (
          <div className="localnews__recent">
            <Link to={`/news/${data.id}`}>
              <img src={data.url} />
              <h2>{data.title}</h2>
            </Link>
          </div>
        ))}
        {restdata.map((data) => (
          <div className="othernews__ingenre">
            <Link to={`/news/${data.id}`}>
              <p>{data.title}</p>
            </Link>
          </div>
        ))}
        {resetdata()}
      </div>

      <div className="localnews__container genre__container" id="india">
        <h1>INDIA</h1>
        {datadivider(india)}
        {first.map((data) => (
          <div className="localnews__recent">
            <a href={`/news/${data.id}`}>
              <img src={data.url} />
            </a>
            <a href={`/news/${data.id}`}>
              <h2>{data.title}</h2>
            </a>
          </div>
        ))}
        {restdata.map((data) => (
          <div className="othernews__ingenre">
            <div className="genreothertitles">
              <a href={`/news/${data.id}`}>
                <p>{data.title}</p>
              </a>
            </div>
          </div>
        ))}
        {resetdata()}
      </div>

      <div className="localnews__container genre__container" id="world">
        <h1>WORLD</h1>
        {datadivider(world)}
        {first.map((data) => (
          <div className="localnews__recent">
            <a href={`/news/${data.id}`}>
              <img src={data.url} alt="image" />
            </a>
            <a href={`/news/${data.id}`}>
              <h2>{data.title}</h2>
            </a>
          </div>
        ))}
        {restdata.map((data) => (
          <div className="othernews__ingenre">
            <a href={`/news/${data.id}`}>
              <p>{data.title}</p>
            </a>
          </div>
        ))}
        {resetdata()}
      </div>

      <div className="localnews__container genre__container" id="business">
        <h1>BUSINESS</h1>
        {datadivider(business)}
        {first.map((data) => (
          <div className="localnews__recent">
            <a href={`/news/${data.id}`}>
              <img src={data.url} />
            </a>
            <a href={`/news/${data.id}`}>
              <h2>{data.title}</h2>
            </a>
          </div>
        ))}
        {restdata.map((data) => (
          <div className="othernews__ingenre">
            <a href={`/news/${data.id}`}>
              <p>{data.title}</p>
            </a>
          </div>
        ))}
        {resetdata()}
      </div>

      <div className="localnews__container genre__container" id="tech">
        <h1>TECH</h1>
        {datadivider(tech)}
        {first.map((data) => (
          <div className="localnews__recent">
            <a href={`/news/${data.id}`}>
              <img src={data.url} />
            </a>
            <a href={`/news/${data.id}`}>
              <h2>{data.title}</h2>
            </a>
          </div>
        ))}
        {restdata.map((data) => (
          <div className="othernews__ingenre">
            <a href={`/news/${data.id}`}>
              <p>{data.title}</p>
            </a>
          </div>
        ))}
        {resetdata()}
      </div>

      <div className="localnews__container genre__container" id="movies">
        <h1>MOVIES</h1>
        {datadivider(movies)}
        {first.map((data) => (
          <div className="localnews__recent">
            <a href={`/news/${data.id}`}>
              <img src={data.url} />
            </a>
            <a href={`/news/${data.id}`}>
              <h2>{data.title}</h2>
            </a>
          </div>
        ))}
        {restdata.map((data) => (
          <div className="othernews__ingenre">
            <a href={`/news/${data.id}`}>
              <p>{data.title}</p>
            </a>
          </div>
        ))}
        {resetdata()}
      </div>

      <div className="localnews__container genre__container" id="sports">
        <h1>SPORTS</h1>
        {datadivider(sports)}
        {first.map((data) => (
          <div className="localnews__recent">
            <a href={`/news/${data.id}`}>
              <img src={data.url} />
            </a>
            <a href={`/news/${data.id}`}>
              <h2>{data.title}</h2>
            </a>
          </div>
        ))}
        {restdata.map((data) => (
          <div className="othernews__ingenre">
            <a href={`/news/${data.id}`}>
              <p>{data.title}</p>
            </a>
          </div>
        ))}
        {resetdata()}
      </div>

      <div className="localnews__container genre__container" id="health">
        <h1>HEALTH</h1>
        {datadivider(health)}
        {first.map((data) => (
          <div className="localnews__recent">
            <Link to={`/news/${data.id}`}>
              <img src={data.url} />

              <h2>{data.title}</h2>
            </Link>
          </div>
        ))}
        {restdata.map((data) => (
          <div className="othernews__ingenre">
            <Link to={`/news/${data.id}`}>
              <p>{data.title}</p>
            </Link>
          </div>
        ))}
        {resetdata()}
      </div>
    </div>
  );
};

export default Genre;
