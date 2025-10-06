import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import MyComponent from './example/MyComponent.js';
import ListToDo from './Todos/ListToDo.js';
/**
 * class component / function component (function, arrow)
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple toDo App
        </p>


        <ListToDo />
        {/* <MyComponent></MyComponent> */}
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
  );
}

export default App;
