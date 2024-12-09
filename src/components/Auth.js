import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome!</h2>
      <p>Please sign up or log in to continue.</p>
      <button onClick={() => navigate("/signup")}>Signup</button>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default Auth;
