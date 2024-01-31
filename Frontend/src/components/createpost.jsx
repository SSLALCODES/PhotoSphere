import React, { useState } from 'react';

const CreatePost = () => {
  const [state, setState] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const containerStyle = {
    backgroundColor: 'white', // White background
    color: 'black', // Black color for text
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Shadow effect
    width: '50%', // Adjust the width as needed
    margin: '50px auto', // Center the container and add margin
    textAlign: 'center', // Center the content
  };

  const tableStyle = {
    width: '100%',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF', // Blue color for button
    color: 'white', // White color for text
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold', // Bold text
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic for handling form submission
    console.log('Form submitted:', state);
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#007BFF' }}>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td>
                <label style={{ color: '#007BFF', fontWeight: 'bold' }}>Title:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="title"
                  value={state.title}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter title"
                  style={inputStyle}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{ color: '#007BFF', fontWeight: 'bold' }}>Description:</label>
              </td>
              <td>
                <textarea
                  name="description"
                  value={state.description}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter description"
                  style={inputStyle}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{ color: '#007BFF', fontWeight: 'bold' }}>Image URL:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="imageUrl"
                  value={state.imageUrl}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter image URL"
                  style={inputStyle}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" style={buttonStyle}>
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
