import logo from './logo.svg';
import './App.scss';
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
    </div>
  );
}

export default App;
