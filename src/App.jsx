

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from 'react-bootstrap/Table';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import AnimatedCursor from "react-animated-cursor"
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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  const addUser = () => {
    const newUser = { name, lastName, age, gender };
    setUsers([...users, newUser]);
    setName("");
    setLastName("");
    setAge("");
    setGender("");
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setError("Qidiruv so'rovi talab qilinadi.");
      setSearchResults([]);
    } else {
      setError("");
      const results = users.filter(
        user =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const renderTable = (data) => (
    <Table striped bordered hover size="sm">
      <thead>
        <tr className='inter'>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>
              <button className="btn btn-danger" onClick={() => deleteUser(index)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <>
      <div className="App">
        <AnimatedCursor color='11, 11, 96' />
      </div>
      <div className="container">
        <div className="logo">
          <div className="input " >
            <input
              type="search"
              placeholder="User name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-primary ml-2" onClick={handleSearch}>
              Search
            </button>
            {error && <div className="text-danger mt-2">{error}</div>}
          </div>

          <div className="col-md-4 table-1">
            <div className="card">
              <div className="card-header">
                <h1>Add User</h1>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="FirstName"
                    className="form-control my-2"
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="LastName"
                    className="form-control my-2"
                  />
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                    className="form-control my-2"
                  />
                  <input
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    placeholder="Gender"
                    className="form-control my-2"
                  />
                </form>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary" onClick={addUser}>
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="logo_section">
          <Swiper
            navigation={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                {renderTable(users)}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                {renderTable(users)}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default App;
