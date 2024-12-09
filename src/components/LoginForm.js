import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/userContext";
import './LoginForm.css';

const LoginForm = () => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { users } = useContext(UserContext); // Ensure `users` is an array in the context

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitHandler = () => {
    const { email, password } = userInput;

    // Check if user exists
    const userExists = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      setError('');
      // Save the logged-in user's details to localStorage
      localStorage.setItem('CurrentUser', JSON.stringify(userExists));

      // Navigate to the task manager
      console.log('Logged In');
      navigate('/task-manager');
    } else {
      setError('Invalid Email or Password');
    }
  };

  return (
    <div className="main-container">
      <p>Please Login</p>
      <input
        placeholder="Please Enter Email"
        type="email"
        name="email"
        value={userInput.email} // Ensure state is reflected in the input
        onChange={handleInputChange}
      />
      <input
        placeholder="Please Enter Password"
        type="password"
        name="password"
        value={userInput.password} // Ensure state is reflected in the input
        onChange={handleInputChange}
      />
      <button onClick={submitHandler}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginForm;
