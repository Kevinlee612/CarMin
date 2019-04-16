import React, { Component } from 'react';
//import Main from './components/MainComponent';
//import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);

const HOME = 'home';
const LOGIN = 'login';
const SIGNUP = 'signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      display: HOME,
      apiResponse: null
    }
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  async getSample() {
    const path = "/Users"; // you can specify the path
    const apiResponse = await API.get("Users", path); //replace the API name
    console.log('response:' + apiResponse);
    this.setState({ apiResponse });
  }

  async saveUser() {
    let newUser = {
      body: {
        "USERID": "1",
        "USERNAME": "DavinTjong",
        "EMAIL": "davintjong@gmail.com",
        "PASSWORD": "ayylmao"
      }
    }
    const path = "/Users";
    // Use the API module to save the note to the database
    try {
      const apiResponse = await API.put("Users", path, newUser)
      console.log("response from saving note: " + apiResponse);
      this.setState({apiResponse});
    } catch (e) {
      console.log(e);
    }
   }

  login(e) {
    this.saveUser();
    this.getSample();
    this.setState({
      display: LOGIN
    });
  }

  signup(e) {
    this.setState({
      display: SIGNUP
    });
  }

  render() {
    console.log(this.state);
    switch(this.state.display) {
      case HOME:
        return (
          <div className="App">
            <header className="App-header">
        
              <h1 className="title">CarMin</h1>
              <button onClick={this.login} className="login-button">
                Login
              </button>
              <br></br>
              <button onClick={this.signup} className="signup-button">
                Sign Up
              </button>
            </header>
          </div>
        );
        break;
      case LOGIN:
        return (
          <div className="App">
            <header className="App-header">
        
              <h1 className="title">Login</h1>
              <form>
                <label className="UsernameLogin">
                  Username:
                  <input type="text" name="firstname"/>
                </label>
                  <br></br>
                <label>
                  Password:
                  <input type="text" name="lastname"/>
                </label>
                <br></br>
                <input type="submit" value="Submit" />
                </form>
            </header>
          </div>
        );
        break;
      case SIGNUP:
        return (
          <div className="App">
            <header className="App-header">
        
              <h1 className="title">SignUp</h1>
              <form>
                <label>
                  First Name:
                  <input type="text" name="firstname"/>
                </label>
                  <br></br>
                <label>
                Last Name:
                  <input type="text" name="lastname"/>
                </label>
                <br></br>
                <label>
                Username:
                  <input type="text" name="lastname"/>
                </label>
                <br></br>
                <label>
                Email:
                  <input type="text" name="lastname"/>
                </label>
                <br></br>
                <label>
                Password:
                  <input type="text" name="lastname"/>
                </label>
                <br></br>
                <input type="submit" value="Submit" />
                </form>
            </header>
          </div>
        );
        break;
      default:
        return (
          <div className="App"></div>
        );
    }
  }
}

export default App;
