import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name:"Samsu",
    job:'singer',
    monthlySalary:25000
  }
  var style = {
    color:'red',
    backgroundColor:'green'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{color:"cyan"}}>I can emmet language</p>
        <h1 className="style">I am a new learner in reactjs</h1>
        <p style={style}>I am Bangladeshi</p>
        <h3>I am {person.name}</h3>
        <p>I am a {person.job}</p>
        <p>My yearly salary is about {person.monthlySalary*12}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
