import { useNavigate } from "react-router-dom";
import styles from './Auth.module.css';
const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.authcontainer}>
      <h2>Welcome!</h2>
      <p>Please sign up or log in to continue.</p>
      <button onClick={() => navigate("/signup")}>Signup</button>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default Auth;
