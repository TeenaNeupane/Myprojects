// import { useState } from 'react';
import './App.css';
// function App() {
//   let [cnt, setCnt] = useState(0);
//   let date = new Date();
//   date.setDate(date.getDate() + cnt); // Corrected date modification

//   return (
//    //div style ={{backgroundColor:}}
//     <header>
//       <button onClick={() => setCnt(cnt + 1)}>+</button>
//       <p>Count = {cnt}</p>
//       <button onClick={() => setCnt(cnt - 1)}>-</button>
//       <br></br>
//       <button>A</button>
//       <button>B</button>
//       <button>C</button>
//       <button>D</button>
//       <button>E</button>

//       <div>
//         <p>{date.toDateString()}</p>
//       </div>
//     </header>
//   );
// }
// export default App;
// function App() {
//   const handler = (e) => {
//     e.target.textContent = e.target.textContent === "Click me Please!" 
//       ? "Click Again!" 
//       : "Click me Please!";
//   };
//   return (
//     <>
//       <button onClick={handler}>Click me Please!</button>
//     </>
//   );
// }
// export default App
// {[1,2,3,4,5].map((ele,idx)=>
//   {
//     return(
//       <button onClick={}>{ele}</button>
//    )
//   })}
// function App() {
//   const [color, setcolor] = useState(0); 
//   const handleClick = (index) => {
//     setcolor(index);
//   };
//   return (
//     <div>
//       {Array.from({ length: 5 }).map((_, index) => (
//         <button
//           key={index}
//           style={{ 
//             backgroundColor: color === index ? "red" : "white", 
//             padding: "10px", 
//             margin: "5px", 
//             border: "none" 
//           }}
//           onClick={() => handleClick(index)}
//         >
//           Button {index + 1}
//         </button>
//       ))}
//     </div>
//   );
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log({ name, age, comment, shipping, payment });
//   };
//   return (
//     <div>
//       <h1>User Details Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Name:<input type="text"value={name}onChange={(e) => setName(e.target.value)}/>
//         </label>
//         <br />
//         <label>Age:<input type="number"value={age}onChange={(e) => setAge(e.target.value)}/>
//         </label>
//         <br />
//         <label>Shipping:<input type="text"value={shipping}onChange={(e) => setShipping(e.target.value)} />
//         </label>
//         <br />
//         <label>Payment:<input type="text"value={payment} onChange={(e) => setPayment(e.target.value)}/>
//         </label>
//         <br />
//         <label>Comment:<textarea value={comment}onChange={(e) => setComment(e.target.value)}/>
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// function App() {
//   const [name, setName] = useState("Guest");
//   const [age, setAge] = useState("0");
//   const [comment, setComment] = useState("");
//   const [payment, setPayment] = useState("");
//   const [shipping, setShipping] = useState("");
//   const handleSubmit = () => {
//     alert(`Name: }\nAge: ${age}\nComment: ${comment}\nPayment: ${payment}\nShipping: ${shipping}`);
//   };
//   return (
//     <div>
//       <h1>User Details Form</h1>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <p>Name: {name}</p>
//       <label>
//         Age:
//         <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//       </label>
//       <p>Age: {age}</p>
//       <label>
//       <p>Comment: {comment}</p>
//       <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Enter your comment" />
//       </label>
//       <p>Payment: {payment}</p>
//       <select value={payment} onChange={(e) => setPayment(e.target.value)}>
//         <option value="">Select your payment choice</option>
//         <option value="Visa Card">Visa Card</option>
//         <option value="Master Card">Master Card</option>
//         <option value="Online">Online</option>
//         <option value="Gift Card">Gift Card</option>
//       </select>
//       <p>Delivery Mode:</p>
//       <label>
//         <input type="radio" value="Pickup" checked={shipping === "Pickup"} onChange={(e) => setShipping(e.target.value)} />
//         Pickup
//       </label>
//       <label>
//         <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={(e) => setShipping(e.target.value)} />
//         Delivery
//       </label>
//       <p>Shipping: {shipping}</p>
//       <button onClick={handleSubmit}>Submit</button>
//     </div> 
//   );
// }
// import { useState } from "react";
// import "./App.css";
// function App() {
//   const [food, setFood] = useState(["Pasta", "Pizza", "Burger"]);
//   function AddItem(event)
//   {
//     const newItem=document.getElementById('FoodItem').value="";
//     setFood(f=>[...f,newItem]);
//   }
//   function RemoveItem(index)
//   {
//   //remove huna paryo
//     setFood(food.filter((_,i)=>i!==index));//onchange updater
//   }
//   return (
//     <div>
//       <h1>Food List!!</h1>
//       <ul>
//         {food.map((item, index) =>
//           <li key={index} onClick={()=>RemoveItem(item)}> </li>)
//         }
//         </ul>
//         <input type="FoodItem"></input>/
//         <button onClick={AddItem}>Add item</button>        
//         </div>
//   )
// }
// export default App
// function App()
// {
// const [count,setCount]=useState(0)
// useEffect(()=>
// {
//  console.log("Called useeffect")
// },[count])
// return (
//  <div>
//   <h1>Button</h1> 
//   <p>You clicked={count} </p>
//   <button onClick={()=>
//     {
//       setCount(count+1)
//     }
//   }>Click me</button>
//  </div>
// )
// }
// export default App;
// import { useRef } from "react";
// import "./App.css";
// function App() {
//   const input = useRef(null);

//   const inputHandler = () => {
//     input.current.focus();
//   };

//   return (
//     <div>
//       <input ref={input} type="text" />
//       <button onClick={inputHandler}>Focus</button>
//     </div>
//   );
// }

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <p>You Laughed 😂: {count} times</p>
      <button onClick={() => setCount(count + 1)}>Laugh Again</button>
      <br></br>
    </Router>
  );
}
export default App;




