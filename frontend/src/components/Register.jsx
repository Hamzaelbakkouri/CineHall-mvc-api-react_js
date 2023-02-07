import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost/CineHall/api/createUser', formData)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name:
        </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="text"
          id="name"
          name="name"
          value={formData.fullname}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
          Password:
        </label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type='submit' className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
        Submit
      </button>
    </form>
  );
};

export default Register;
