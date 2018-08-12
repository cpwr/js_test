import React, {Component} from "react";
import TextField from 'material-ui/TextField';

class EmailField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailError: "",
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }
    handleEmailChange(event) {
        this.setState({
            email: event.target.value,
        });
    }
    render () {
        return (
            <TextField
              errorText={this.state.emailError}
              type="email"
              name="email"
              floatingLabelText="E-mail"
              value={this.state.email}
              onChange={this.handleEmailChange}
              required
            />
        )
    }
}

export default EmailField;
