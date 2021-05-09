"use strict";

function SearchBar() {

  const [ description, setDescription ] = React.useState("")
  const [ status, setStatus ] = React.useState("")
  const [ reasonForRecall, setReasonForRecall ] = React.useState("")
  const [ recallingFirm, setRecallingFirm ] = React.useState("")

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value)
  }

  function handleStatusChange(evt) {
    setStatus(evt.target.value)
  }

  function handleReasonForRecallChange(evt) {
    setReasonForRecall(evt.target.value)
  }

  function handleRecallingFirmChange(evt) {
    setRecallingFirm(evt.target.value)
  }

  // function SearchResults(evt) {
  //   evt.preventDefault()

  //   // make a data option and put your search inputs in it
	// 	const data = {
	// 		description: description,
  //     status: status,
  //     reasonForRecall: reasonForRecall,
  //     recallingFirm: recallingFirm,
	// 	}

	// 	const options = {
	// 		'method': 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json' 
	// 			// tells the server during the post that this is a json string
	// 		},
	// 		// turn data into JSON
	// 		body: JSON.stringify(data)
	// 	}
		
	// 	fetch('/api/search', options)
	// 	.then(response => response.json())
	// 	.then(data => {
  //     if (data === "search failed") {
  //       console.log("failed")
  //       alert("failed")

  //     } else {
  //       console.log("success")
  //       alert("success")
	// 		// TODO: redirect to results page
  //   }})

  // }

	return (
		<div>
      <form action='/search' method="POST">
        Food Description
        <input value={description} name="description" onChange={handleDescriptionChange} type='text'></input>
        <br/>

        Recall Termination Status
        <input value={status} name="status" onChange={handleStatusChange} type='text'></input>
        <br/>
        
        Reason for Recall 
        <input value={reasonForRecall} name="reason-for-recall" onChange={handleReasonForRecallChange} type='text'></input>
        <br/>

        Recalling Firm
        <input value={recallingFirm} name="recalling-firm" onChange={handleRecallingFirmChange} type='text'></input>
        <br/>
        <button type="submit">Search</button>
      </form>
			
		</div>
	)
}

function WelcomeUser() {
  if (window.user_id != "null") {
    return <h2>Welcome {window.user_name}!</h2>
  }
}

function Search() {
    return (
      <div> 
        <WelcomeUser/>
        <h3>Search for recalls </h3>
        <SearchBar/>
        <Results />
      </div>

    )  
}