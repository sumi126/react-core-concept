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
        <Product product={products}> </Product>

          
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
const products =[
  {name:"Photoshop",price:"$99.9"}
]
function Product(props){
  const productStyle = {
    border:"1px solid lightgray",
    borderRadius:"5px",
    backgroundColor:"gray",
    height:"200px",
    weight:"600px",
    margin:"10px",
    padding:"10px"
  }
  console.log("Hi",props)
  return (
    <div>
        <div style={productStyle} >
          
          <p>Product Name:  {props.product[0].name}</p>
          <p>Product Price: {props.product[0].price}</p>
        </div>
    </div>
  )
}
export default App;
