// AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8788/api/users'); // Updated port number
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error('Invalid data received from the server:', response.data);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleUpdate = (userId) => {
    // Implement update functionality
    console.log('Update user:', userId);
  };

  const handleDelete = async (userId, userName) => {
    try {
      await axios.delete(`http://localhost:8788/api/users/${userId}`); // Use the correct port
      setUsers(users.filter(user => user._id !== userId));
      console.log('Delete user:', userId);
      toast.success(`${userName} deleted successfully`);
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Error deleting user');
    }
  };
  

  return (
    <div style={{ margin: '20px auto', maxWidth: '600px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
      <h3 style={{ color: '#333' }}><b>Admin Dashboard -User Details</b></h3>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead style={{ backgroundColor: '#3498db', color: '#fff' }}>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#fff' }}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button style={{ backgroundColor: '#28a745', color: '#fff', padding: '5px 10px', marginRight: '5px', cursor: 'pointer' }} onClick={() => handleUpdate(user._id)}>Update</button>
                <button style={{ backgroundColor: '#dc3545', color: '#fff', padding: '5px 10px', marginRight: '5px', cursor: 'pointer' }} onClick={() => handleDelete(user._id, user.name)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
