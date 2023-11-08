import { useState } from "react";
import "./UsersList.css";
import Buttons from './Buttons';

const UsersList = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    usertype: "Admin",
  });

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  // 2 stany z tablicami, które beda przechowywac userów - metoda filter 

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    setFormData((prevDataForm) => {
      return { ...prevDataForm, [name]: target.value };
    });
  };

  const setUser = (e) => {
    e.preventDefault();
    setUsers(users.concat({ ...formData, id: Date.now() }));
  };

  const filterUsers = (userType) => {
    const filteredList = users.filter(user => user.usertype == userType || userType == "All");
    setFilteredUsers(filteredList);
  };

  const removeUser = (id) => {
    const filteredUsers = users.filter(user => user.id !== id)
    setUsers(filteredUsers)
  }


  return (
    <div className="usersList">
      <form onSubmit={setUser}>
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="User name"
          onChange={handleInputChange}
          value={formData.username}
        />
        <label htmlFor="email">User email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="User email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <label htmlFor="usertype">User type</label>
        <select id="usertype" name="usertype" onChange={handleInputChange}>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button>Save</button>
      </form>
      <Buttons setFilteredUsers={filterUsers} />

      <div className="list">
        {filteredUsers.map((user) => {
          return (
            <div className="userItem" key={user.id} onClick={() => removeUser(user.id)} >
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.usertype}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;

//element z lista, ktora wyswietla wszystkich el. z local storage
// drugi element na wifiltrowaną liste
// kolejny stan 01 po klik na button ustawiasz stan (jak 0 to pokaz wszystkich)