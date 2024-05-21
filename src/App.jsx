


import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from 'react-bootstrap/Table'
import Aos from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';






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

    {/* <div className="swiper">
      <div className="container">
        <div className="swiper_box">
          <img src={Img} alt="" />
        </div>
      </div>
    </div> */}
      <div className="container">
        <div className="col-md-4 table-1">
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
        <Swiper navigation={true} 
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
         loop={true} modules={[Navigation, Autoplay]} className="mySwiper">
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
          {/* <Table striped bordered hover size="sm">
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
          </Table> */}
        </div>
      </div>
    </>
  );
}

export default App;
