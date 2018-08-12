import React, {Component} from "react";
import RaisedButton from 'material-ui/RaisedButton';
import EmailField from './EmailField.jsx';
import PasswordField from './PasswordField.jsx';
import {strengthColor, strengthIndicator} from "./StrenghtIndicator";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
        color: "red",
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlePasswordChange(event) {
    this.setState({
        password: event.target.value,
        color: strengthColor(strengthIndicator(this.state.password)),
    });
  }
  handleEmailChange(event) {
    this.setState({
        email: event.target.value,
    });
  }
  handleSubmit(event) {
    if (this.state.password === " ") {
        this.setState({passwordError: "Vasya"});
    } else {
        this.setState({passwordError: ""});
    }
    alert('An email was submitted: ' + this.state.email);
    alert('A password was submitted: ' + this.state.password);
    event.preventDefault();
  }
  render() {
    return (
        <form className="container" onSubmit={this.handleSubmit}>
          <h2>Sign up or die</h2>
            <div>
              <EmailField
                  emailError={this.state.emailError}
                  email={this.state.email}
                  handleEmailChange={this.handleEmailChange}
              />
            </div>
            <div>
              <PasswordField
                  passwordError={this.state.passwordError}
                  password={this.state.password}
                  handlePasswordChange={this.handlePasswordChange}
                  color={this.state.color}
              />
            </div>
          <RaisedButton type="submit" label="Sign up" className="primary mt-10" />
        </form>
    )
  }
}

export default RegistrationForm;
