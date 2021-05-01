function Homepage() {
    return (
      <React.Fragment>
        {/* copied out the image link for now: */}
        {/* <img src="/static/img/balloonicorn.jpg" /> */}
  
        <h2>Welcome to RECALLAMA</h2>
  
        <a href="/sign-up">
          Sign Up
        </a>
        <br/>
        <a href="/login">
          Login
        </a>
        <br/>
        
      </React.Fragment>
    );
  }
  
  ReactDOM.render(<Homepage />, document.getElementById('app'));
  