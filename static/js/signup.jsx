function SignUp() {
  return(
    <React.Fragment>
      <h2>
        Sign up for a Recallama account
      </h2>

      <form id="signup" action='/users' method='POST'>
      <label>
        First Name: 
        <input type="text" fname="fname" />
      </label>
      <br />

      <label>
        Last Name: 
        <input type="text" lname="lname" />
      </label>
      <br />

      <label>
        Email: 
        <input type="text" email="email" />
      </label>
      <br />

      <label>
        Password: 
        <input type="text" password="password" />
      </label>
      <br />

      <input type="submit" value="Login" />
      </form>

      <br />
      <br />

      <a href="/login">
        Already have an account? Click here to login.
      </a>
    </React.Fragment>
  )
}

ReactDOM.render(<SignUp />, document.getElementById('app'));