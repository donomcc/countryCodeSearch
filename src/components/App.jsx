import React from "react";
import { useState, useEffect } from "react";
import countryCodes from "../countryCodes";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SiLinkedin, SiGithub } from "react-icons/si";

import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-K2FVESQZ3W";
ReactGA.initialize(MEASUREMENT_ID);

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const notify = (selectedCountry) => {
    toast.success(selectedCountry + ` copied to clipboard`, {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  return (
    <div className="App">
      <h1>
        <span>Country Phone Code Search</span>
      </h1>
      <p>
        <span>Click the card to quickly copy the phone code!</span>
      </p>
      <input
        className="searchbar"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {countryCodes
        .filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.country
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <CopyToClipboard className="card" text={val.phone_code}>
              <p
                className="detail"
                onClick={() => {
                  ReactGA.event({
                    category: "phone code",
                    action: "click",
                    label: "test label",
                    value: val.country,
                  });
                  setSelectedCountry(val.phone_code);
                  notify(val.phone_code);
                }}
              >
                {val.country} {val.phone_code}
              </p>
            </CopyToClipboard>
          );
        })}
      <ToastContainer
        position="top-right"
        autoClose={1200}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <div className="credit">
        <a href="https://www.linkedin.com/in/donovanmccollum/" target="_blank">
          Created by Donovan McCollum
        </a>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/donovanmccollum/"
            target="_blank"
          >
            <SiLinkedin />
          </a>
          <a href="https://github.com/donomcc" target="_blank">
            <SiGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
