import React, {Component} from "react";
import TextField from 'material-ui/TextField';

class EmailField extends Component {
    render () {
        return (
            <TextField
              errorText={this.props.emailError}
              type="email"
              name="email"
              floatingLabelText="E-mail"
              value={this.props.email}
              onChange={this.props.handleEmailChange}
              required
            />
        )
    }
}

export default EmailField;
