import React, { useEffect, useState } from 'react';
import About from './About';
import Navbar from './Navbar';
import { useParams } from 'react-router';
import firebase from '../Global/Firebaseconfig';
import './Styles/Filterednews.css';

const Filterednews = () => {
  const [datareceived, setdatareceived] = useState([{}]);

  const { id } = useParams();

  useEffect(() => {
    ifitsid();
  }, [id]);

  const ifitsid = async () => {
    const db = firebase.firestore();
    await db
      .collection('news')
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
            <img src={data.url} />
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

export default Filterednews;
