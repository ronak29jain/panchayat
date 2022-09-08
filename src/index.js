import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Style/login.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Feed from './pages/Feed';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import AddingProfile from './pages/AddingProfile';
import UserProfile from './pages/UserProfile';
import Accounts from './pages/Accounts';
import Protected from './components/Protected';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Protected> <Home /> </Protected>} />
            <Route path='user' element= {<Protected> <Home /> </Protected>} >
              <Route index element={<Protected> <Feed /> </Protected>} />
              <Route path='feed' element={<Protected> <Feed /> </Protected>} />
              <Route path='profile' element={<Protected> <UserProfile /> </Protected>} />
            </Route>
            <Route path='add-profile' element={<Protected> <AddingProfile /> </Protected>} />
            <Route path='accounts' element={<Accounts />}>
              <Route index element={<SignIn />} />
              <Route path='signin' element={<SignIn />} />
              <Route path='signup' element={<Register />} />
              <Route path='forgot-password' element={<ForgotPassword />} />
            </Route>
            <Route 
              path='*' 
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              } 
              />
          </Route>
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
