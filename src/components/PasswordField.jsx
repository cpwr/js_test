import React, {Component} from "react";
import TextField from 'material-ui/TextField';

class PasswordField extends Component {
    render () {
        return (
            <TextField
              errorText={this.props.passwordError}
              type="password"
              name="password"
              floatingLabelText="Password"
              value={this.props.password}
              onChange={this.props.handlePasswordChange}
              required
            />
        )
    }
}

export default PasswordField;
