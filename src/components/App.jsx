import React from "react";
import { useState } from "react";
import Entry from "./Entry";
import countryCodes from "../countryCodes"
import SearchBar from "./SearchBar";
import "./App.css"



function createCard(countryEntry) {
    return (
        <Entry country={countryEntry.country}
        phoneCode={countryEntry.phone_code}
        key={countryEntry.id}
        />
    )
}

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
                    // <div class="card">
                    // <img src="img_avatar.png" alt="Avatar" style="width:100%">
                    // <div class="container">
                    //   <h4><b>John Doe</b></h4>
                    //   <p>Architect & Engineer</p>
                    // </div>
                //   </div>
                <div className="card">
                <div className="container">
                <p>{val.country} {val.phone_code}</p>
                </div>
                </div>
                )
            })}
        </div>
      );
    }

    
export default App;
    