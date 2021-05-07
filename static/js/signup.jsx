"use strict";


function SignUp() {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	function handleLogin(evt) {
		evt.preventDefault();
		
		// make a data option and put your email and password in it
		const data = {
      fname: fname,
      lname: lname,
			email: email,
			password: password
		}

		const options = {
			'method': 'POST',
			headers: {
				'Content-Type': 'application/json' 
				// tells the server during the post that this is a json string
			},
			// turn data into JSON
			body: JSON.stringify(data)
		}
		
		fetch('/api/signup', options)
		.then(response => response.json())
		.then(data => {
			if (data === 'login sucessful') {
				alert(data)
				// here you prob want to redirect back to homepage
			} else {
				alert('login failed, very sad')
			}
		})
	}

  function handleEmailChange(evt) {
		setEmail(evt.target.value)
	}

	function handlePasswordChange(evt) {
		setPassword(evt.target.value)
	}

  return (
    <div> 
      <h2>
      Signup for a Recallama account 
      </h2>
      <form onSubmit={handleLogin}>
        First name:
				<input value={fname} onChange={handleEmailChange} type="text"></input>
        <br/>

        Last name:
				<input value={lname} onChange={handleEmailChange} type="text"></input>
        <br/>

        Email:
				<input value={email} onChange={handleEmailChange} type="text"></input>
				<br/>
        
        Password:
				<input value={password} onChange={handlePasswordChange} type="text"></input>
        <br/>

				<button type="submit">Login</button>
			</form>
    </div>
  )
}



// function Welcome() {
//   return (
//     <div>
//       <h2>Welcome! Sign up for a Recallama account</h2>
//     </div>
//   );
// }


// class SignUpForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ""};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(evt) {
//     this.setState({fname: evt.target.fname});
//     this.setState({lname: evt.target.lname});
//     this.setState({email: evt.target.email});
//     this.setState({password: evt.target.password});
//   }

//   handleSubmit(evt) {

//     alert('A name was submitted: ' + props.fname + props.lname + props.email + props.password);
//     evt.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label> First Name: 
//           <input id="fname" type="text" value= {this.state.fname} onChange={this.handleChange} />
//         </label>
//         < br />

//         <label> Last Name: 
//           <input id="lname" type="text" value= {this.state.lname} onChange={this.handleChange} />
//         </label>
//         < br />

//         <label> Email: 
//           <input id="email" type="text" value= {this.state.email} onChange={this.handleChange} />
//         </label>
//         < br />

//         <label> Password: 
//           <input id="password" type="password" value= {this.state.password} onChange={this.handleChange} />
//         </label>
//         < br />

//         <input type="submit" value="Login" />
//         < br />
//         < br />
//         <a href='/login'>Already have an account? Click here to login.</a>

//       </form>

//     )
//   }
// }




// ReactDOM.render(<Welcome />, document.getElementById("welcome"));


// ReactDOM.render( <SignUpForm />, document.getElementById("app"));

