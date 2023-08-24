import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// pages
import Login from './pages/login';
import SignUp from './pages/signUp';
import SignUpManual from './pages/signUpManual';
import UserLanding from './pages/userLandinfpage';
import WriteReview from './pages/WriteReview';
import PostReview from './pages/PostReview';
import RebaAgent from './pages/rebaAgent';
import ResetPassword from './pages/resetPassword';
import ResetPasswordConfirm from './pages/resetPawwordConfirm';
import Activate from './pages/activate';

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
  {
    path : "/reset-password",
    element : (<ResetPassword />)
  },
  {
    path : "/password/reset/confirm/:uid/:token",
    element : (<ResetPasswordConfirm />)
  },
   {
    path : "/activate/:uid/:token",
    element : (<Activate />)
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
