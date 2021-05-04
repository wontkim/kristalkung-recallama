function Homepage() {
    return (
      <React.Fragment>
  
        <h2>Welcome to Recallama</h2>
  
        <a href="/signup">
          Sign Up
        </a>
        <br/>
        <a href="/login">
          Login
        </a>
        <br/>
        
        <img src="/static/img/recallama.jpg" />


      </React.Fragment>
    );
  }
  
  ReactDOM.render(<Homepage />, document.getElementById('app'));
  