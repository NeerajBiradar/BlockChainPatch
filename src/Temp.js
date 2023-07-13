// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </>
//   );
// }

// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 user={user} />
//     </>
//   );
// }

// function Component4({ user }) {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 user={user} />
//     </>
//   );
// }

// function Component5({ user }) {
//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);

// // import React,{createContext,useContext} from 'react';

// // const Mycontext = createContext();

// // const App = (props) => {
// //   return <Mycontext.Provider value={{hello:"Hello World"}}>
// //     <ChildOne/>
// //   </Mycontext.Provider>
// // }

// // const ChildOne = () =>{
// //   return <ChildTwo/>
// // }

// // const ChildTwo = () =>{
// //   const ContextData = useContext(Mycontext);
// //   return <div>{ContextData.hello}</div>
// // }

// // export default App;

// // import { useState, useEffect, useRef } from "react";
// // import ReactDOM from "react-dom/client";

// // function App() {
// //   const [inputValue, setInputValue] = useState("");
// //   const previousInputValue = useRef("");

// //   useEffect(() => {
// //     previousInputValue.current = inputValue;
// //   }, [inputValue]);

// //   return (
// //     <>
// //       <input
// //         type="text"
// //         value={inputValue}
// //         onChange={(e) => setInputValue(e.target.value)}
// //       />
// //       <h2>Current Value: {inputValue}</h2>
// //       <h2>Previous Value: {previousInputValue.current}</h2>
// //     </>
// //   );
// // }

// // export default App;

// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [inputValue, setInputValue] = useState(0);
//    const count = useRef(0);
//   // var count = 0;

//   /useEffect(() => {
//      count.current = count.current + 1;
//     //count = count + 1;
//     //setInputValue(count);
//   });



//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//       {/* <h1>Render Count: {count}{inputValue}</h1> */}

//     </>
//   );
// }

// export default App;



//Pooja ma'am Task

// import React, { useState } from 'react';

// function App() {
//   const [entries, setEntries] = useState([]);
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [jsondata, setJsondata] = useState('');

//   const addEntry = () => {
//     const newEntry = { name, age };
//     setEntries([...entries, newEntry]);
//     setName('');
//     setAge('');
//   };

//   const removeEntry = (index) => {
//     const updatedEntries = [...entries];
//     updatedEntries.splice(index, 1);
//     setEntries(updatedEntries);
//   };

//   const submitForm = () => {
//     const jsonData = JSON.stringify(entries);
//     setJsondata(jsonData);
//     console.log(jsonData);
//   };

//   return (
//     <div>
//       <form className='m-2 p-2'>
//         <div className='m-2'>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div className='m-2'>
//           <label>Age:</label>
//           <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//         </div>
//         <button className='m-2' type="button" onClick={addEntry}>Add</button>
//       </form>

//       {entries.map((entry, index) => (
//         <div key={index} className="entry ">
//           <span className='m-4 '>{entry.name}, {entry.age}</span>
//           <button type="button" onClick={() => removeEntry(index)} className='m-2'>Remove</button>
//         </div>
//       ))}
//       <button className='m-2' type="button" onClick={submitForm}>Submit</button>

//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";

// function App() {
//   const [items, setItems] = useState([{ Name: "", Age: "" }]);
//   const [jsondata, setJsondata] = useState({});

//   const handleInputChange = (event, index) => {
//     const { id, value } = event.target;
//     const updatedItems = [...items];
//     updatedItems[index][id] = value;
//     setItems(updatedItems);
//   };

//   const handleAddClick = () => {
//     setItems([...items, { Name: "", Age: "" }]);
//   };

//   const removeEntry = (index) => {
//     const updatedEntries = [...items];
//     updatedEntries.splice(index, 1);
//     setItems(updatedEntries);
//     console.log(index,items);
//   };

//   const submitForm = () => {
//     const jsonData = JSON.stringify(items);
//     setJsondata(jsonData);
//     console.log(jsonData);
//   };

//   return (
//     <div className="m-5">
//       {items.map((item, index) => (
//         <span className="inline" key={index}>
//           <input
//             type="text"
//             placeholder="Name"
//             id="Name"
//             value={item.Name}
//             onChange={(event) => handleInputChange(event, index)}
//           />
//           <input
//             type="number"
//             placeholder="Age"
//             id="Age"
//             value={item.Age}
//             onChange={(event) => handleInputChange(event, index)}
//           />
//           <button type="button" className="btn btn-primary" onClick={handleAddClick}>
//         ADD ITEMS
//       </button>
//       <button type="button" onClick={() => removeEntry(index)} className='m-2'>Remove</button>
//           <br></br>
//         </span>
//       ))}
//       <button className='m-2' type="button" onClick={submitForm}>Submit</button>
      
      
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// function App() {
//   const [entries, setEntries] = useState([]);
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [jsondata, setJsondata] = useState('');

//   const addEntry = () => {
//     const newEntry = { name, age };
//     setEntries([...entries, newEntry]);
//     setName('');
//     setAge('');
//   };

//   const removeEntry = (index) => {
//     const updatedEntries = [...entries];
//     updatedEntries.splice(index, 1);
//     setEntries(updatedEntries);
//   };

//   const submitForm = () => {
//     const jsonData = JSON.stringify(entries);
//     setJsondata(jsonData);
//     console.log(jsonData);
//   };

//   return (
//     <div>
//       <form className='m-2 p-2'>
//         <div className='m-2'>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div className='m-2'>
//           <label>Age:</label>
//           <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//         </div>
//         <button className='m-2' type="button" onClick={addEntry}>Add</button>
//       </form>

//       {entries.map((entry, index) => (
//         <div key={index} className="entry ">
//           <span className='m-4 '>{entry.name}, {entry.age}</span>
//           <button type="button" onClick={() => removeEntry(index)} className='m-2'>Remove</button>
//         </div>
//       ))}
//       <button className='m-2' type="button" onClick={submitForm}>Submit</button>

//     </div>
//   );
// }

// export default App;

