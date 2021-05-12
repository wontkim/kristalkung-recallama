"use strict";

function WelcomeUser() {
  if (window.user_id) return <h2>Welcome {window.user_name}!</h2>
  else  return <h2> Welcome!</h2>
}

function PostResultItem(props) {
  return <li>{props.recallingFirm}</li>
}

function HandleSubmit(e) {
  e.preventDefault();

}


function SearchBar() {

  const [ description, setDescription ] = React.useState("")
  const [ status, setStatus ] = React.useState("")
  const [ reasonForRecall, setReasonForRecall ] = React.useState("")
  const [ recallingFirm, setRecallingFirm ] = React.useState("")

  function handleSubmit(evt) {
    evt.preventDefault();

    // React.useEffect(() => {
    //   fetch('/api/results')
    //   .then(response => response.json())
      // .then(data => {
        // const postResults = []
        // for (const post of data) {
        //   postResults.push(<PostResultItem title={post.recallingFirm} />);
        // }
        // setResultsList(postResults)
      // })
    // }, [])

    return (
      <div>
        <Search />
        <ul>
          {resultsList}
        </ul>
      </div>
    )
  }


	return (
		<div>
      <form action='/api/results' onSubmit={handleSubmit} method="POST">
        Food Description
        <input value={description} name="description" onChange={(e) => setDescription(e.target.value)} type='text'></input>
        <br/>

        Recall Termination Status
        <input value={status} name="status" onChange={(e) => setStatus(e.target.value)} type='text'></input>
        <br/>
        
        Reason for Recall 
        <input value={reasonForRecall} name="reason-for-recall" onChange={(e) => setReasonForRecall(e.target.value)} type='text'></input>
        <br/>

        Recalling Firm
        <input value={recallingFirm} name="recalling-firm" onChange={(e) => setRecallingFirm(e.target.value)} type='text'></input>
        <br/>
        <button type="submit">Search</button>
      </form>
			
		</div>
	)
}

// function PostResults(props) {
//   // const [resultsList, setResultsList] = React.useState(["loading..."])
//   const resultsList = <PostResultItem recallingFirm="test" />

//   React.useEffect(() => {
//     fetch('/api/results')
//     .then(response => response.json())
//     .then(data => {
//       const postResults = []
//       for (const post of data) {
//         postResults.push(<PostResultItem title={post.recallingFirm} />);
//       }
//       setResultsList(postResults)
//     })
//   }, [])

//   return (
//     <div>
//       <Search />
//       <ul>
//         {resultsList}
//       </ul>
//     </div>
//   )


// }

function Search() {
    return (
      <div> 
        <WelcomeUser/>
        <h3>Search for recalls </h3>
        <SearchBar/>
      </div>

    )  
}