import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/SignUpForm';
import SignUpSuccess from './components/SignUpSuccess';
import LoginForm from './components/LoginForm';
import TaskManager from './components/TaskManager';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './components/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />
  },
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/signup',
    element: <SignUpForm/>
  },
  {
    path: '/signup-success',
    element: <SignUpSuccess />
  },
  {
    path: '/login',
    element: <LoginForm />
  },
  {
    path: '/task-manager',
    element: <TaskManager/>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
