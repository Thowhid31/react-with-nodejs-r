import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  const handleAddUser = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {name, email}

    //post data to server
    console.log(name, email);
  }

  return (
    <div className="App">
      <h1>My Own Dynamic API: {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text"  name='name' placeholder='Name'/>
        <input type="text"  name='email' placeholder='Email'/>
        <input type="submit"  value='Add User'/>
      </form>
      <ul>
        {
          users.map(user => <li key={user.id}>{user.name}, {user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
