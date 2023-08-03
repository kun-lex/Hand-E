import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signUp';
import SignUpManual from './pages/signUpManual';
import UserLanding from './pages/userLandinfpage';
import WriteReview from './pages/WriteReview';
import PostReview from './pages/PostReview';
import RebaAgent from './pages/rebaAgent';
const router = createBrowserRouter([
  {
    path : "/",
    element : (<App />),
  },
  {
    path : "/login",
    element : (<Login />)
  },
  {
    path : "/sign-up",
    element : (<SignUp />)
  },
  {
    path : "/sign-up-manually",
    element : (<SignUpManual />)
  },
  {
    path : "/home",
    element : (<UserLanding />)
  },
  {
    path : "/write-review",
    element : (<WriteReview />)
  },
  {
    path : "/post-review",
    element : (<PostReview />)
  },
  {
    path : "/reba-agent",
    element : (<RebaAgent />)
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
