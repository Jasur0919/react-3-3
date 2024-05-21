// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
// import Table from 'react-bootstrap/Table';


// function App() {
//   const [name, setName] = useState("")
//   const [lastName, setLastName] = useState("")
//   const [age, setAge] = useState("")
//   const [gender, setGender] = useState("")
//   const [users, setUsers] = useState("")
//   const addUser = () => {
//     console.log(name);
//     console.log(lastName);
//     console.log(age);
//     console.log(gender);
//     users.push({name, lastName, age, gender})
//     setUsers([...users])
//   }
  

//   return (
//     <>
 
//       <div className="container">
//       <div className="col-md-4">
//       <div className="card">
//         <div className="card-header">
//           <h1>Add User</h1>
//         </div>
//         <div className="card-body">
//           <form>
//             <input type="text" onChange={(e) => setName(e.target.value)}  placeholder='FirstName' className='form-control  my-2' />
//             <input type="text" onChange={(e) => setLastName(e.target.value)}  placeholder='LastName' className='form-control  my-2' />
//             <input type="number" onChange={(e) => setAge(e.target.value)}  placeholder='Age' className='form-control  my-2' />
//             <input type="text" onChange={(e) => setGender(e.target.value)}  placeholder='Gender' className='form-control  my-2' />
//           </form>
//         </div>
//         <div className="card-footer">
//           <button className='btn btn-primary' onClick={addUser}>add user</button>
//         </div>
//       </div>
//     </div>
//          <div className="logo_section">
//             {/* <table>
//               <thead>
//                 <tr className='table_tr'>
//                   <td>T/R</td>
//                   <td>FirstName</td>
//                   <td>LastName</td>
//                   <td>Age</td>
//                   <td>Mail</td>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>1</td>
//                   <td>Olim</td>
//                   <td>Umar</td>
//                   <td>17</td>
//                   <td>Mail</td>
//                 </tr>
//               </tbody>
//             </table> */}

// <Table striped bordered hover size="sm">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Age</th>
//           <th>Genner</th>
//         </tr>
//       </thead>
//       <tbody>

//             {
//               console.log(users, "users")
//             }
         
//         {/* {
//           users.map((item, index) => (
//             <tr key={index}>
//               <td>{item}</td>

//             </tr>
            
//           ))
//         } */}


//         {/* <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>16</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//         </tr> */}
//       </tbody>
//     </Table>

    
//           </div> 
//         </div>
  

//     </>
//   )
// }

// export default App



import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from 'react-bootstrap/Table'
import Aos from 'aos';



function App() {
 
  // useEffect(() => {
  //   Aos.init({duration: 1000})
  // },[])

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [users, setUsers] = useState([]);

  const addUser = () => {
    const newUser = { name, lastName, age, gender };
    setUsers([...users, newUser]);
    setName("");
    setLastName("");
    setAge("");
    setGender("");
  };

  return (
    <>
      <div className="container">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h1>Add User</h1>
            </div>
            <div className="card-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='FirstName'
                  className='form-control my-2'
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder='LastName'
                  className='form-control my-2'
                />
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder='Age'
                  className='form-control my-2'
                />
                <input
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  placeholder='Gender'
                  className='form-control my-2'
                />
              </form>
            </div>
            <div className="card-footer">
              <button className='btn btn-primary' onClick={addUser}>Add User</button>
            </div>
          </div>
        </div>

        <div className="logo_section" >
          <Table striped bordered hover size="sm">
            <thead>
              <tr >
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody >
              {users.map((user, index) => (
                <tr key={index}   >
                  <td >{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default App;
