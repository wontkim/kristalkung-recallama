function Login() {
  return(
    <React.Fragment>
      <h2>
          Login to your Recallama account
      </h2>
      <form>
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
      <a href="/signup">
        Don't have an account? Click here to create one.
      </a>
    </React.Fragment>
  )
}

ReactDOM.render(<Login />, document.getElementById('app'));