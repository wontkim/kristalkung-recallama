function SearchBar() {
	return (
		<div>
			<input type='text'></input>
      {/* TODO: make this into fully controlled form */}
      {/* TODO: put more searchable fields */}
      <br/>
      <button type="submit">Search</button>
		</div>
	)
}

function Search() {
    return <div> 
      Search for stuff 
      <SearchBar/>
      </div>
}