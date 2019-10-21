import React, { useState } from 'react'

const AddCase = () => {
  const [inputs, setInputs] = useState({
    name: '',
    age: '',
    city: '',
    state: '',
    contact: ''
  });

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const submitForm = e => {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={submitForm}>
      <input type="text" name="name" id="name" value={inputs.name} onChange={handleChange} placeholder="Enter a name..." />
      <input type="number" name="age" id="age" value={inputs.age} onChange={handleChange} min="16" max="100" placeholder="16" />
      <input type="text" name="city" id="city" value={inputs.city} onChange={handleChange} placeholder="Los Angeles" />
      <input type="text" name="state" id="state" value={inputs.state} onChange={handleChange} placeholder="CA" />
      <input type="text" name="contact" id="contact" value={inputs.contact} onChange={handleChange} placeholder="Phone # or Address" />
      <button type="submit">Create Post</button>
    </form>
  )
}

export default AddCase
