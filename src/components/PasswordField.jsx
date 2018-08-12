import React, {Component} from "react";
import TextField from 'material-ui/TextField';

class PasswordField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            passwordError: "",
        };
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value,
        });
    }
    render () {
        return (
            <TextField
              errorText={this.state.passwordError}
              type="password"
              name="password"
              floatingLabelText="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              required
            />
        )
    }
}

export default PasswordField;
