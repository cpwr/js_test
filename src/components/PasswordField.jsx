import React, {Component} from "react";
import TextField from 'material-ui/TextField';


class PasswordField extends Component {

    render () {
        console.log(this.props.color)
        return (
            <div>
                <TextField
                  errorText={this.props.passwordError}
                  type="password"
                  name="password"
                  floatingLabelText="Password"
                  value={this.props.password}
                  onChange={this.props.handlePasswordChange}
                  inputStyle={{
                    classes: {
                        root: this.props.color,
                    },
                  }}
                  required
                />
            </div>
        )
    }
}

export default PasswordField;
