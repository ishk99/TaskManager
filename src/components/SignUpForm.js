import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import './SignUpForm.css';

const SignUpForm = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const { addUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    setUserDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!userDetails.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (userDetails.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userDetails.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(userDetails.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!userDetails.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (userDetails.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Submit handler
  const submitHandler = () => {
    if (validate()) {
      addUser(userDetails);
      console.log(userDetails);
      setUserDetails({
        name: '',
        email: '',
        password: '',
      });
      navigate('/signup-success');
    }
  };

  return (
    <div className='main-container'>
      <p>Enter Your Details</p>
      <div >
        <input
          placeholder="Enter Name"
          type="text"
          name="name"
          value={userDetails.name}
          onChange={handleInputChange}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      <div>
        <input
          placeholder="Enter Email"
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleInputChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <input
          placeholder="Enter Password"
          type="password"
          name="password"
          value={userDetails.password}
          onChange={handleInputChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default SignUpForm;
