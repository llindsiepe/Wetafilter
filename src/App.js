import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contato from "./pages/Contato";
import Products from "./pages/Products";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import './style.css'

const baseTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" exact={true} component={Home} />
          <Route exact path="/sobre" component={About} />
          <Route path="/contato" component={Contato} />
          <Route path="/produtos" component={Products} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
