import { useNavigate } from "react-router-dom";
import './SignUpSuccess.css'
const SignUpSuccess = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        //redirect to the Login Page
        navigate('/login');
    }
    return (
        <div className='main-container'>
            <h2>Signup Successful</h2>
            <p>Your account has been created. Please log in to continue</p>
            <button onClick={handleLoginRedirect}>Login Now!</button>
        </div>
    )
}

export default SignUpSuccess;