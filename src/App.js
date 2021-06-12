import logo from './logo.svg';
import './App.css';
import ExampleClassComponent from './components/ExampleClassComponent/ExampleClassComponent';
import Button from './components/Button/Button';
import Counter from './components/Counter/Counter';
import CounterWithHooks from './components/CounterWithHooks/CounterWithHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ExampleClassComponent />
      {/* <Button type="button" bgColor="red">Search button</Button> */}

      <Counter />
      <CounterWithHooks />

       
      </header>
    </div>
  );
}

export default App;
