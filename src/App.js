import React from "react";
import logo from "./media/key-backgroiund.jpg";
import success from "./media/success.png";
import lock from "./media/lock.png";
import "./App.css";
import Footer from "./components/footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "swordfish",
      authorized: false,
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password === this.state.password;

    if (password !== this.state.password) {
      const Err = document.getElementById("error");
      Err.innerHTML =
        "Error, you've entered the wrong password. <br> Please enter the password 'swordfish'.";
    }
    this.setState({
      authorized: auth,
    });
  }

  render() {
    const login = (
      <form action="#" onSubmit={this.authorize}>
        <input
          type="password"
          placeholder=" Please Enter the Password"
          className="input"
        />
        <br />
        <input type="submit" className="button" />
        <div id="error"></div>

        <img src={logo} alt={logo} className="logo" />
      </form>
    );

    const loggedIn = (
      <ul>
        <a href="https://jkmagnussen-reactsfasystem.netlify.app/">
          <button className="return" type="button">
            Logout
          </button>
        </a>
        <br />
        <img src={success} alt={success} />
      </ul>
    );

    const intro = (
      <h1 style={{ color: "grey", margin: 50 }}>
        The purpose of this project is to excercise my ability in creating an
        SFA in <span style={{ color: "rgb(70, 208, 226)" }}>React</span>.
        <span
          style={{ color: "#282c34", backgroundColor: "rgb(243, 228, 91)" }}
        >
          js
        </span>
        . To action the system, please enter the password{" "}
        <span style={{ color: "black", backgroundColor: "rgb(255, 255, 175)" }}>
          swordfish
        </span>
        .
        <br />
        <img
          style={{
            width: 200,
            paddingTop: 30,
          }}
          src={lock}
          alt={lock}
        />
      </h1>
    );

    return (
      <div id="authorization">
        <h1 className="title">Single-Factor Authentication (SFA) System</h1>
        <div>{this.state.authorized ? " " : intro}</div>
        {this.state.authorized ? loggedIn : login}
        <Footer />
      </div>
    );
  }
}

export default App;
