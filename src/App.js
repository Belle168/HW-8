import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
const [users, setUsers] = useState([]);

const addUserHandler = (name, age) =>{
  setUsers([...users, {name,age, id: Math.random().toString() }]);
};

const getUsersData = (usersData) =>{
  setUsers(usersData)
}
  return (
     <div>
<AddUser onAddUser={addUserHandler}/>
<UserList users={users} onGetUsersData={getUsersData}/>
    </div>
  );
}

export default App;
