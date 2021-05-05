"use strict";

// import {useHistory} from "react-router-dom";

function App() {
  let history = useHistory();
}

function WelcomeBack() {
  return (
    <div>
      <h2>Welcome back! Login to Recallama</h2>

    </div>
  );
}


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({email: evt.target.email});
    this.setState({password: evt.target.password});
  }

  handleSubmit(evt) {

    alert('A name was submitted: ' + props.email + props.password);
    evt.preventDefault();
  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <label> Email: 
          <input id="email" type="text" value= {this.state.email} onChange={this.handleChange} />
        </label>
        < br />

        <label> Password: 
          <input id="password" type="password" value= {this.state.password} onChange={this.handleChange} />
        </label>
        < br />

        <input type="submit" value="Login" />
        < br />
        < br />
        <a href='/signup'>Don't have an account? Click here to sign up.</a>
      </form>

    )
  }
}



ReactDOM.render(<WelcomeBack />, document.getElementById("welcome"));

ReactDOM.render( <LoginForm />, document.getElementById("app"));

