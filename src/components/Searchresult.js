import React, { useEffect, useState } from 'react';
import About from './About';
import Navbar from './Navbar';
import { useParams } from 'react-router';
import firebase from '../Global/Firebaseconfig';
import './Styles/Searchresult.css';
import ReactPlayer from 'react-player';

const Searchresult = () => {
  const { date } = useParams();
  const [datareceived, setdatareceived] = useState([{}]);
  const [videoreceived, setvideoreceived] = useState([{}]);

  useEffect(() => {
    ifsearch();
    getvideo();
  }, [date]);

  const ifsearch = async () => {
    const db = firebase.firestore();
    const data = await db
      .collection('news')
      .where('date', '==', `${date}`)
      .orderBy('timeStamp', 'desc')
      .get();
    setdatareceived(
      data.docs.map((datas) => ({ ...datas.data(), id: datas.id }))
    );
  };

  const getvideo = async () => {
    const db = firebase.firestore();
    const data = await db
      .collection('video')
      .where('date', '==', `${date}`)
      .orderBy('timeStamp', 'desc')
      .get();
    setvideoreceived(
      data.docs.map((data) => ({ ...data.data(), id: data.id }))
    );
    console.log(videoreceived);
  };

  return (
    <div>
      <Navbar />
      <div className="forpadding search">
        {datareceived.map((data) => (
          <div className="forborder">
            <a href={`/news/${data.id}`}>
              <h1>{data.title}</h1>
              <img src={data.url} />
              <h2>{data.description}</h2>
            </a>
          </div>
        ))}
      </div>
      <div className="forpadding search">
        <h1>VIDEO</h1>
        {videoreceived.map((data) => (
          <div className="forborder">
            <a href={`/video/${data.id}`}>
              <h1>{data.title}</h1>
              <ReactPlayer url={data.url} />
              <h2>{data.description}</h2>
            </a>
          </div>
        ))}
      </div>
      <About />
    </div>
  );
};

export default Searchresult;
