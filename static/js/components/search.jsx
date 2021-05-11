"use strict";

function WelcomeUser() {
  if (window.user_id) return <h2>Welcome {window.user_name}!</h2>
  else  return <h2> Welcome!</h2>
}

function SearchBar() {

  const [ description, setDescription ] = React.useState("")
  const [ status, setStatus ] = React.useState("")
  const [ reasonForRecall, setReasonForRecall ] = React.useState("")
  const [ recallingFirm, setRecallingFirm ] = React.useState("")

  function handleSubmit(evt) {
    evt.preventDefault();
    const data = {'status': status};
    console.log(data);
    fetch('/results', {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => console.log(res))

    
  }

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


	return (
		<div>
      <form action='/results' onSubmit={handleSubmit} method="POST">
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



function Search() {
    return (
      <div> 
        <WelcomeUser/>
        <h3>Search for recalls </h3>
        <SearchBar/>
      </div>

    )  
}