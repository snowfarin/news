import React, { useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialPinterest,
} from 'react-icons/ti';

const Navbar = () => {
  const date = new Date();
  const yesterday =
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1) +
    '-' +
    (date.getDate() - 1);
  const fivedaysback =
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1) +
    '-' +
    (date.getDate() - 5);

  const [checkboxcheck, setcheckboxcheck] = useState(true);
  let datefiltered;
  //burger icon
  const handleburger = () => {
    const slider = document.getElementById('slideleft');
    const burger = document.getElementById('burger');
    if (checkboxcheck) {
      burger.classList.add('toggle');
      slider.classList.add('isActive');
      setcheckboxcheck(!checkboxcheck);
    } else {
      burger.classList.remove('toggle');
      slider.classList.remove('isActive');
      setcheckboxcheck(!checkboxcheck);
    }
  };

  //date format change
  const handledate = (e) => {
    const datecollected = e.target.value;
    const datearray = datecollected.split('-');
    for (const x in datearray) {
      if (datearray[x].length < 4) {
        if (datearray[x][0] == '0') {
          datearray[x] = datearray[x][1];
        }
      }
    }
    datefiltered = datearray.join('-');
  };

  const search = () => {
    window.location.replace('/news/search/' + datefiltered);
  };

  return (
    <div className="navbar" id="navbar">
      <div className="navbarContainer">
        <ul className="navbar__options">
          <li className="burgericon">
            <div class="burger" id="burger">
              <button
                className="checkbox__burger"
                type="checkbox"
                className="burgercheck"
                onClick={handleburger}
              >
                button
              </button>
              <span class="line1"></span>
              <span class="line2"></span>
              <span class="line3"></span>
            </div>
          </li>
          <Link to="/">
            <h1>NEWS</h1>
          </Link>
          <li className="Aboutlogo">
            <li>
              <p>
                <TiSocialFacebook />
              </p>
            </li>
            <li>
              <p>
                <TiSocialYoutube />
              </p>
            </li>
            <li>
              <p>
                <TiSocialPinterest />
              </p>
            </li>
          </li>
        </ul>
        <ul className="navbar__genre">
          <li>
            <a href="#video">
              <p>Video</p>
            </a>
          </li>
          <li>
            <a href="#topstories">
              <p>TOP STORIES</p>
            </a>
          </li>
          <li>
            <a href="#local">
              <p>Local</p>
            </a>
          </li>
          <li>
            <a href="#india">
              <p>India</p>
            </a>
          </li>
          <li>
            <a href="#world">
              <p>World</p>
            </a>
          </li>
          <li>
            <a href="#business">
              <p>Business</p>
            </a>
          </li>
          <li>
            <a href="#tech">
              <p>Tech</p>
            </a>
          </li>
          <li>
            <a href="#movies">
              <p>Movies</p>
            </a>
          </li>
          <li>
            <a href="#sports">
              <p>Sports</p>
            </a>
          </li>
          <li>
            <a href="#health">
              <p>Health</p>
            </a>
          </li>
          <li>
            <input
              type="date"
              data-date=""
              data-date-format="YYYY MMMM DD"
              id="date"
              max={{ fivedaysback }}
              min={{ yesterday }}
              onChange={handledate}
            />
          </li>
          <li>
            <button onClick={search}>search</button>
          </li>
        </ul>
        <div className="searchhere">
          <input
            className="searchhere box"
            type="date"
            data-date=""
            data-date-format="YYYY MMMM DD"
            id="date"
            max={{ fivedaysback }}
            min={{ yesterday }}
            onChange={handledate}
          />
          <button className="searchhere button" onClick={search}>
            search
          </button>
        </div>
      </div>
      <div className="slideleft" id="slideleft">
        <ul onClick={handleburger}>
          <li>
            <a href="#video">
              <p>Video</p>
            </a>
          </li>
          <li>
            <a href="#local">
              <p>Local</p>
            </a>
          </li>
          <li>
            <a href="#india">
              <p>India</p>
            </a>
          </li>
          <li>
            <a href="#world">
              <p>World</p>
            </a>
          </li>
          <li>
            <a href="#business">
              <p>Business</p>
            </a>
          </li>
          <li>
            <a href="#tech">
              <p>Tech</p>
            </a>
          </li>
          <li>
            <a href="#movies">
              <p>Movies</p>
            </a>
          </li>
          <li>
            <a href="#sports">
              <p>Sports</p>
            </a>
          </li>
          <li>
            <a href="#health">
              <p>Health</p>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="#navbar">
          <p className="uparrow">
            <BiArrowToTop />
          </p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
