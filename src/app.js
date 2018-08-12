import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RegistrationForm from "./components/RegistrationForm";


const App = () => (
  <MuiThemeProvider>
    <RegistrationForm />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
