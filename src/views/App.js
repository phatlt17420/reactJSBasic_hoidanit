import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import MyComponent from './example/MyComponent.js';
import ListToDo from './Todos/ListToDo.js';
import MyComponent from './example/MyComponent.js'
import Nav from './Nav/Nav.js';
import Home from './example/Home.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

/**
 * class component / function component (function, arrow)
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">

          <Nav />
          <img src={logo} className="App-logo" alt="logo" />



          {/* <ListToDo /> */}
          {/* <MyComponent></MyComponent> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/about">
              <MyComponent></MyComponent>
            </Route>


          </Switch>




        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </div>
    </BrowserRouter>

  );
}

export default App;
