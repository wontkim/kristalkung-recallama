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
        <label> Password: 
          <input id="password" type="password" value= {this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Login" />
      </form>

    )
  }
}

ReactDOM.render( <LoginForm />, document.getElementById("app"));

