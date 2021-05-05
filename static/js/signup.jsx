"use strict";

function Welcome() {
  return (
    <div>
      <h2>Welcome! Sign up for a Recallama account</h2>
    </div>
  );
}


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({fname: evt.target.fname});
    this.setState({lname: evt.target.lname});
    this.setState({email: evt.target.email});
    this.setState({password: evt.target.password});
  }

  handleSubmit(evt) {

    alert('A name was submitted: ' + props.fname + props.lname + props.email + props.password);
    evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> First Name: 
          <input id="fname" type="text" value= {this.state.fname} onChange={this.handleChange} />
        </label>
        < br />

        <label> Last Name: 
          <input id="lname" type="text" value= {this.state.lname} onChange={this.handleChange} />
        </label>
        < br />

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
        <a href='/login'>Already have an account? Click here to login.</a>

      </form>

    )
  }
}




ReactDOM.render(<Welcome />, document.getElementById("welcome"));


ReactDOM.render( <SignUpForm />, document.getElementById("app"));

