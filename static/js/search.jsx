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

  function SearchResults(evt) {
    evt.preventDefault()

    // make a data option and put your search inputs in it
		const data = {
			description: description,
      status: status,
      reasonForRecall: reasonForRecall,
      recallingFirm: recallingFirm,
		}

		const options = {
			'method': 'POST',
			headers: {
				'Content-Type': 'application/json' 
				// tells the server during the post that this is a json string
			},
			// turn data into JSON
			body: JSON.stringify(data)
		}
		
		fetch('/api/search', options)
		.then(response => response.json())
		.then(data => {
      console.log(data)
			// TODO: redirect to results page
			})

  }

	return (
		<div>
      <form>
        Food Description
        <input value={description} onChange={handleDescriptionChange} type='text'></input>
        <br/>

        Recall Termination Status
        <input value={status} onChange={handleStatusChange} type='text'></input>
        <br/>
        
        Reason for Recall 
        <input value={reasonForRecall} onChange={handleReasonForRecallChange} type='text'></input>
        <br/>

        Recalling Firm
        <input value={recallingFirm} onChange={handleRecallingFirmChange} type='text'></input>
        <br/>
        
        {/* TODO: put more searchable fields */}
        <br/>
        <button type="submit">Search</button>
      </form>
			
		</div>
	)
}

function Search() {
    return <div> 
      <h2>Search for recalls </h2>
      <SearchBar/>
      </div>
}