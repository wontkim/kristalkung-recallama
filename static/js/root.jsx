// for React

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Prompt = ReactRouterDOM.Prompt;
const Switch = ReactRouterDOM.Switch;
const Redirect = ReactRouterDOM.Redirect;

function Homepage() {
  return (
    <div>
      <h1>
        Welcome to Recallama
      </h1>
    </div>
  )
}

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
        Last name:
				<input value={lname} onChange={handleEmailChange} type="text"></input>
        Email:
				<input value={email} onChange={handleEmailChange} type="text"></input>
				Password:
				<input value={password} onChange={handlePasswordChange} type="text"></input>
				<button>Login</button>
			</form>
    </div>
  )
}

function SearchBar() {
	return (
		<div>
			<input type='text'></input>
		</div>
	)
}

function Search() {
  return <div> 
    Search for stuff 
    <SearchBar/>
    </div>
}

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
      <h2>Login to your Recallama Account</h2>
			<form onSubmit={handleLogin}>
				Email:
				<input value={email} onChange={handleEmailChange} type="text"></input>
				Password:
				<input value={password} onChange={handlePasswordChange} type="text"></input>
				<button>Login</button>
			</form>
		</div>
	)
}

function ShoppingListItem(props) {
    return <li> {props.item} </li>
}

function App() {
	return (
		<Router>
			<div>

				{/* this is the nav bar */}
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
						<Link to='/signup'>Sign up</Link>
						</li>
						<li>
						<Link to='/search'>Search</Link>
						</li>
						<li>
						<Link to='/login'>Login</Link>
						</li>
					</ul>
				</nav>
		
				{/* this is how you switch between two components */}
				<Switch>
					<Route path='/signup'>
						<SignUp />
					</Route>
					<Route path='/login'>
						<LogIn />
					</Route>
					<Route path='/search'>
						<Search />
					</Route>
					<Route path='/'>
						<Homepage />
					</Route>

				</Switch>
			</div>
		</Router>       
	);
}

ReactDOM.render(<App />, document.getElementById('root'))
