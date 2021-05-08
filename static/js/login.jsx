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
			if (data == "login successful") {
				// setEmail(data.email)
        // setPassword(data.password)
        console.log("login successful")
				// TODO: redirect back to homepage
			} else {
				
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
			< br />
        <a href='/signup'>Don't have an account? Click here to sign up.</a>
		</div>
	)
}
