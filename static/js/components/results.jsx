"use strict";

// function DisplayResults() {
//   if (window.result) return <div> {window.result} </div>
//   else return <div>no results</div>
// }

function Results() {

  const [ data, setData ] = React.useState("");

  React.useEffect(() => {
    fetch("/results").then(res => res.json()).then(data => {
      setData(data.result);
    });
  }, []);

  // fetch('/results', {
  //   method: "POST", 
  //   headers:{
  //       "Content-Type":"application/json",
  //       "Accept": "application/json"
  //   }, 
  //   body: JSON.stringify(data)})
  // .then((response) => response.text())
  // .then(text => {console.log(text)})

    // return (fetch("/search", {
    //   method: "GET",
    //   headers:{
    //     "Content-Type":"application/json",
    //     "Accept": "application/json"
    //   }, 
    // })
    // .then((response) => response.json())
    // .then( response => {console.log(response)})

  


  return (
     <div>
        <WelcomeUser/>
        <h3>Search for recalls </h3>
        <SearchBar/>
        <h2>Search Results:</h2>
        <div> 
          {/* <DisplayResults /> */}
          {data}
        </div>
     </div>
  )
}


//   // function SearchResults(evt) {
//   //   evt.preventDefault()

//   //   // make a data option and put your search inputs in it
// 	// 	const data = {
// 	// 		description: description,
//   //     status: status,
//   //     reasonForRecall: reasonForRecall,
//   //     recallingFirm: recallingFirm,
// 	// 	}

// 	// 	const options = {
// 	// 		'method': 'POST',
// 	// 		headers: {
// 	// 			'Content-Type': 'application/json' 
// 	// 			// tells the server during the post that this is a json string
// 	// 		},
// 	// 		// turn data into JSON
// 	// 		body: JSON.stringify(data)
// 	// 	}
		
// 	// 	fetch('/api/search', options)
// 	// 	.then(response => response.json())
// 	// 	.then(data => {
//   //     if (data === "search failed") {
//   //       console.log("failed")
//   //       alert("failed")

//   //     } else {
//   //       console.log("success")
//   //       alert("success")
// 	// 		// TODO: redirect to results page
//   //   }})

//   // }