import React, {Component} from "react";
import RaisedButton from 'material-ui/RaisedButton';
import EmailField from './EmailField.jsx';
import PasswordField from './PasswordField.jsx';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
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
              <EmailField />
            </div>
            <div>
              <PasswordField />
            </div>
          <RaisedButton type="submit" label="Sign up" className="primary mt-10" />
        </form>
    )
  }
}

export default RegistrationForm;
