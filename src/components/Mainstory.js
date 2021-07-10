import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Styles/Mainstory.css';

const Mainstory = ({ data }) => {
  return (
    <div className="mainstory">
      <Carousel>
        {data.map((datas) => (
          <Carousel.Item>
            <a href={`/news/${datas.id}`}>
              <img
                className="d-block w-100"
                src={datas.url}
                alt="First slide"
              />
            </a>
            <Carousel.Caption>
              <a href={`/news/${datas.id}`}>
                <h1>{datas.title}</h1>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Mainstory;
