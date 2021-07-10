import firebase from '../Global/Firebaseconfig';
import Mainstory from './Mainstory';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
import About from './About';
import Genre from './Genre';
import Othernews from './Othernews';
import Videoandothers from './Videoandothers';
import './Styles/Datamapping.css';

const Datamapping = () => {
  var today = new Date();
  const current =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const yesterday =
    today.getFullYear() +
    '-' +
    (today.getMonth() + 1) +
    '-' +
    (today.getDate() - 1);

  //onload
  useEffect(() => {
    getdata(current, yesterday);
    getvideo(current, yesterday);
  }, []);

  const [datareceived, setdatareceived] = useState([]);
  const [videoreceived, setvideoreceived] = useState([]);

  const getdata = async (datefrom, dateto) => {
    const db = firebase.firestore();
    const data = await db
      .collection('news')
      .orderBy('date', 'asc')
      .startAt(datefrom)
      .endAt(dateto)
      .get();
    setdatareceived(
      data.docs.map((datas) => ({ ...datas.data(), id: datas.id }))
    );
  };

  const getvideo = async (datefrom, dateto) => {
    const db = firebase.firestore();
    const datas = await db
      .collection('video')
      .orderBy('date', 'asc')
      .startAt(datefrom)
      .endAt(dateto)
      .get();
    setvideoreceived(datas.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // const getvideo = async () => {
  //   const db = firebase.firestore();
  //   const data = await db
  //     .collection('video')
  //     .where('date', '>=', `${yesterday}`)
  //     .orderBy('date', 'desc')
  //     .get();
  //   setvideoreceived(
  //     data.docs.map((data) => ({ ...data.data(), id: data.id }))
  //   );
  // };

  //FILTERS
  var datafilteredmainstory = datareceived.filter(
    (data) => data.position === 'main-story'
  );

  var datafilteredinteresting = datareceived.filter(
    (data) => data.position === 'interesting'
  );

  var datafilteredtopstories = datareceived.filter(
    (data) => data.is__topnews === 'on'
  );

  var datafilteredlocal = datareceived.filter((data) => data.genre === 'local');

  var datafilteredindia = datareceived.filter((data) => data.genre === 'india');
  var datafilteredworld = datareceived.filter((data) => data.genre === 'world');
  var datafilteredbusiness = datareceived.filter(
    (data) => data.genre === 'business'
  );
  var datafilteredtech = datareceived.filter((data) => data.genre === 'tech');
  var datafilteredmovies = datareceived.filter(
    (data) => data.genre === 'movies'
  );
  var datafilteredsports = datareceived.filter(
    (data) => data.genre === 'sports'
  );
  var datafilteredhealth = datareceived.filter(
    (data) => data.genre === 'health'
  );

  return (
    <div>
      <Navbar />
      <div className="widthmaker">
        <Mainstory data={datafilteredmainstory} />
        <Homepage
          topstory={datafilteredtopstories}
          interesting={datafilteredinteresting}
        />
        <Genre
          local={datafilteredlocal}
          india={datafilteredindia}
          world={datafilteredworld}
          business={datafilteredbusiness}
          tech={datafilteredtech}
          movies={datafilteredmovies}
          sports={datafilteredsports}
          health={datafilteredhealth}
        />
        <Othernews news={datareceived} />
        <Videoandothers news={videoreceived} />
      </div>
      <About />
    </div>
  );
};

export default Datamapping;
