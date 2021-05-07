"use strict";

function LogIn() {

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	function handleLogin(evt) {
		evt.preventDefault();
		
		// make a data option and put your email and password in it
		const data = {
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
		
		fetch('/api/login', options)
		.then(response => response.json())
		.then(data => {
			if (data == 'login sucessful') {
				console.log(data)
				console.log("successful")
				// alert(data)
				// here you prob want to redirect back to homepage
			} else {
				// alert('login failed, very sad')
				console.log(data)
				console.log("login failed")
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
      <h2>Login to your Recallama Account</h2>
			<form onSubmit={handleLogin}>
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


// // import {useHistory} from "react-router-dom";

// function App() {
//   let history = useHistory();
// }

// function WelcomeBack() {
//   return (
//     <div>
//       <h2>Welcome back! Login to Recallama</h2>

//     </div>
//   );
// }


// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ""};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(evt) {
//     this.setState({email: evt.target.email});
//     this.setState({password: evt.target.password});
//   }

//   handleSubmit(evt) {

//     alert('A name was submitted: ' + props.email + props.password);
//     evt.preventDefault();
//   }

//   render() {
//     return (
      
//       <form onSubmit={this.handleSubmit}>
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
//         <a href='/signup'>Don't have an account? Click here to sign up.</a>
//       </form>

//     )
//   }
// }



// ReactDOM.render(<WelcomeBack />, document.getElementById("welcome"));

// ReactDOM.render( <LoginForm />, document.getElementById("app"));

