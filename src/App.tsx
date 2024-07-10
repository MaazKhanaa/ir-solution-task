import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginForm } from './components/loginForm';
import AuthGuard from './auth/authGuard';
import { Dashboard } from './components/dashboard';
import { AuthLayout } from './layout/authLayout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthGuard />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path='/' element={<LoginForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
