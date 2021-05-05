function SignUp() {
  return(
    <React.Fragment>
      <h2>
        Sign up for a Recallama account
      </h2>

      <form id="signup" action='/users' method='POST'>
      <label>
        First Name: 
        <input type="text" fname="fname" placeholder="first name" />
      </label>
      <br />

      <label>
        Last Name: 
        <input type="text" lname="lname" placeholder="last name" />
      </label>
      <br />

      <label>
        Email: 
        <input type="text" email="email" placeholder="email"/>
      </label>
      <br />

      <label>
        Password: 
        <input type="password" password="password" placeholder="password"/>
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