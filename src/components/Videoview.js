import React, { useEffect, useState } from 'react';
import About from './About';
import Navbar from './Navbar';
import { useParams } from 'react-router';
import firebase from '../Global/Firebaseconfig';
import ReactPlayer from 'react-player';

const Videoview = () => {
  const [datareceived, setdatareceived] = useState([{}]);
  const { id } = useParams();

  useEffect(() => {
    fetchvid();
  }, [id]);

  const fetchvid = async () => {
    const db = firebase.firestore();
    await db
      .collection('video')
      .doc(id)
      .get()
      .then((doc) => setdatareceived([{ ...doc.data() }]));
  };

  return (
    <div>
      <Navbar />

      <div className="forpadding">
        {datareceived.map((data) => (
          <>
            <h1>{data.title}</h1>
            <ReactPlayer url={data.url} />
            <h2>{data.description}</h2>
            <p>{data.brief}</p>
            <p>{data.date}</p>
          </>
        ))}
      </div>
      <About />
    </div>
  );
};

export default Videoview;
