// src/View.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function View() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user:', error));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className='bg-gradient screen-size d-flex-content'>
      <div className='card'>
      <h2>User Details</h2>
      <br/>
      {/* <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Website:</strong> {user.website}</p> */}
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
         
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default View;

