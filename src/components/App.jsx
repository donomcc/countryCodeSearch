import React from "react";
import { useState } from "react";
import { useEffect } from 'react'
import countryCodes from "../countryCodes"
import "./App.css"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Success from "./Success";



function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')
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
        }
        );
    }
    return (
        <div className="App">
          <h1>
            <span>Country Phone Code Search</span>
          </h1>
          <p>
            <span>Click the card to quickly copy the phone code!</span>
          </p>
            <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}} />
            {countryCodes.filter((val)=> {
                if (searchTerm == "") {
                    return val
                } else if (val.country.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return val
                }
            }).map((val, key)=> {
                return (
                <div className="card">
                <div className="container">
                <CopyToClipboard text={val.phone_code}>
                {/* Why is there a delay when updating the state? It's always 1 click behind. */}
                <p className="detail" onClick={()=> {
                    setSelectedCountry(val.phone_code);
                    notify(val.phone_code);
                    }}>{val.country} {val.phone_code}</p>
                </CopyToClipboard>
                </div>
                </div>
                )
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
                <p>
                    Created by Donovan McCollum
                </p>
            </div>
        </div>
      );
    }

    
export default App;
    