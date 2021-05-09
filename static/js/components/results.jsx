"use strict";

// import React, {useState} from "react";

function Results() {

    const [ data, setData ] = React.useState("")

    fetch("/search", {method:"POST", headers:{"content_type":"application/json"}, body: JSON.stringify(data)})
    // .then(response => { 
    //     console.log({response:response.json()}); 
    //     return response.json()})
    // .then( json =>  { console.log({json}); setData(json)})

    console.log(data)

    return (
        <div>
            <h2>Search Results:</h2>
            
        </div>
    )
}