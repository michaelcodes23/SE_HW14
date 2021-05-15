import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const list = [
    {
    item: 'banana',
    brand: '',
    units: '',
    quantity: 5,
    isPurchased: true
    },
    {
      item: 'avocado',
      brand: '',
      units: '',
      quantity: 2,
      isPurchased: false
      },
      {
        item: 'mango',
        brand: '',
        units: '',
        quantity: 3,
        isPurchased: true
        }
    ]

  const Form=()=>{
    const [values, setValues] = useState(list)
  }
  //States
  const [item, setItem] = useState("");
  const [brand, setBrand] = useState("");
  const [units, setUnits] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [isPurchased, setIsPurchased] = useState(true);
  const [groceryList, setGroceryList] = useState(list)
  const [change, setChange] = useState(true) //Setting it to true or false does not matter

  //Handles
  const handleChangeItem=(event)=>{
    setItem(event.target.value)
  } 
  const handleChangeBrand=(event)=>{
    setBrand(event.target.value)
  } 
  const handleChangeUnits=(event)=>{
    setUnits(event.target.value)
  } 
  const handleChangeQuantity=(event)=>{
    setQuantity(event.target.value)
  } 
  const handleChangeIsPurchased=(event)=>{
    console.log(event.target.checked)
    setIsPurchased(event.target.checked)
  } 

 const handleDelete=(index)=>{
    const tempArray = groceryList;
    tempArray.pop(index)
    setGroceryList(tempArray)
    setChange(!change)
 }
  
  const handleSubmit=(event)=>{
    event.preventDefault();
      const newItem = {
        item: item,
        brand: brand,
        units: units,
        quantity: quantity,
        isPurchased: isPurchased
      }
      const tempArray = groceryList;
      tempArray.push(newItem);
      setGroceryList(tempArray);
      setChange(!change);
      console.log("Form Submitted")
      console.log(event.value)
    }
  return (
    <div>
      <ul>
        {groceryList.map((value, index)=>{
          if(value.isPurchased){
          return (<>
            <li key={index}>{value.item}, Quanity: {value.quantity}
            <button onClick={()=>handleDelete(index)} className = "button">Delete</button>
            </li>
          </>)
          }
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        New Grocery Item: <input type = "text" value={item} onChange= {handleChangeItem} name="item"/><br/>
        Brand:  <input type = "text" value={brand} onChange= {handleChangeBrand} name="brand"/><br/>
        Units:  <input type = "text" value={units} onChange= {handleChangeUnits} name="units"/><br/>
        Quantity:  <input type = "text" value={quantity} onChange= {handleChangeQuantity} name="quantity"/><br/>
        Did You Purchase?  <input type = "checkbox" value={isPurchased} onChange= {handleChangeIsPurchased} name="isPurchased"/><br/>
        <input className = "button" type = "submit" value = "Submit"/>
      </form>
      
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
