import React, { useState, useEffect } from 'react'
import { Check } from 'lucide-react'
import { UsersContext } from './userscontext';
import { useContext } from 'react';
import Moment from 'react-moment';
import moment from 'moment';

const Form = ({create}) => {
  const { users, setUsers } = useContext(UsersContext);
  
  const [newUser, setNewUser] = useState({
    name: '',
    pic: '',
    usage: 0,
    type:'',
    registered:'',
    country:'',
    activity:'',
    bg:''
  }, localStorage.getItem('users'));
  const[message, setmessage]=useState(null)
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUsers = [...users, { id: users.length + 1, ...newUser }];
    setUsers(updatedUsers);
    setNewUser({
      name: '',
      pic: '',
      usage: 0,
      type:'',
    registered:moment().format('YYYY-MM-DD'),
    country:'',
      
    
    });
    
    setmessage(`User ${newUser.name} is created successfully`)
  setTimeout(() => {
    setmessage(null)
  }, 3000);
  };
  
  return (
    <div className='form-cnt'>
        <div>
          <div className='form-image'> 
            <h1>Add New User</h1>
          {message && <p style={{color:'green'}}>{message}</p>}
          </div>
          <form className='form-body' onSubmit={handleSubmit}>
          Username:<input
          type="text"
          value={newUser.name}
          onChange={(event) =>
            setNewUser({ ...newUser, name: event.target.value })
          }
          placeholder="Username"
          required
        />
        Picture:
        <input
          type="text"
          value={newUser.pic}
          onChange={(event) =>
            setNewUser({ ...newUser, pic: event.target.value })
          }
          placeholder="Picture URL"
          required
        />
        Usage Number:
        <input
          type="number"
          value={newUser.usage}
          onChange={(event) =>
            setNewUser({ ...newUser, usage: event.target.valueAsNumber })
          }
          placeholder="Usage Number"
          required
        />
        User Type
        <input
          type="text"
          value={newUser.type}
          onChange={(event) =>
            setNewUser({ ...newUser, type: event.target.value })
          }
          placeholder="New or Recurring"
          required
        />
        Country:
        <input
          type="text"
          value={newUser.country}
          onChange={(event) =>
            setNewUser({ ...newUser, country: event.target.value })
          }
          placeholder="country"
          required
        />
            <button type='submit' className='users-btn' >Add user</button>
          </form>
          
        </div>
    </div>
  )
}

export default Form

