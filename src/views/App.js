import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent.js';
/**
 * class component / function component (function, arrow)
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React.js (Hoi Dan IT)
        </p>

        <MyComponent />

        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;
