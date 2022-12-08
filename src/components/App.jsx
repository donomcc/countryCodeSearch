import React from "react";
import { useState } from "react";
import countryCodes from "../countryCodes"
import "./App.css"




function App() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="App">
          <h1>
            <span>Country Phone Codes</span>
          </h1>
            <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}} />
            {/* {countryCodes.map(createCard)} */}
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
                <p className="detail">{val.country} {val.phone_code}</p>
                </div>
                </div>
                )
            })}
            <div className="credit">
                <p>
                    Created by Donovan McCollum
                </p>
            </div>
        </div>
      );
    }

    
export default App;
    