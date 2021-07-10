import React from 'react';
import ReactPlayer from 'react-player';
import './Styles/Videoandothers.css';
const Videoandothers = (props) => {
  const newsvideo = props.news;

  return (
    <div className="videosandothers">
      <div className="videocontent" id="video">
        <h1>VIDEO</h1>
        <div className="video__container">
          {newsvideo.map((data) => (
            <div className="videobox">
              <div className="videoholder">
                <ReactPlayer url={data.url} />
              </div>
              <a href={`/video/${data.id}`}>
                <div className="videodescription">
                  <h2>{data.description}</h2>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videoandothers;
