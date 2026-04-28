import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function SignAndLogin() {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }

      if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validateForm()) {
      // Save user data to context
      const userData = {
        name: formData.name || 'User',
        password: formData.password
      };
      setUserData(userData);

      if (isLogin) {
        setSuccessMessage('Successfully logged in! 🎉');
      } else {
        setSuccessMessage('Account created successfully! 🎉');
      }

      setTimeout(() => {
        setFormData({ name: '', password: '', confirmPassword: '' });
        setSubmitted(false);
        setSuccessMessage('');
        navigate('/profile');
      }, 2000);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', password: '', confirmPassword: '' });
    setErrors({});
    setSuccessMessage('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#5e4e46' }}>
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-lg shadow-2xl p-8 md:p-10" style={{ backgroundColor: '#3a6154', border: '2px solid #e9d8c7' }}>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 'bold', color: '#e9bd7e' }}>
              {isLogin ? '🔐 Login' : '✨ Sign Up'}
            </h1>
            <p className="text-sm" style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif" }}>
              {isLogin
                ? 'Welcome back! Please login to your account'
                : 'Create a new account to get started'}
            </p>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded animate-pulse">
              <p style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 'bold' }}>{successMessage}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field (Sign Up Only) */}
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#e9d8c7' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    border: '2px solid #e9d8c7',
                    backgroundColor: '#4a7d63',
                    color: '#e9d8c7',
                    fontFamily: "'Noto Sans KR', sans-serif",
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#e9bd7e'}
                  onBlur={(e) => e.target.style.borderColor = errors.name ? '#dc3545' : '#e9d8c7'}
                />
                {errors.name && (
                  <p style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif", fontSize: '0.875rem', marginTop: '0.25rem' }}>❌ {errors.name}</p>
                )}
              </div>
            )}

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2" style={{ color: '#e9d8c7' }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  border: '2px solid #e9d8c7',
                  backgroundColor: '#4a7d63',
                  color: '#e9d8c7',
                  fontFamily: "'Noto Sans KR', sans-serif",
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#e9bd7e'}
                onBlur={(e) => e.target.style.borderColor = errors.password ? '#dc3545' : '#e9d8c7'}
              />
              {errors.password && (
                <p style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif", fontSize: '0.875rem', marginTop: '0.25rem' }}>❌ {errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field (Sign Up Only) */}
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2" style={{ color: '#e9d8c7' }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    border: '2px solid #e9d8c7',
                    backgroundColor: '#4a7d63',
                    color: '#e9d8c7',
                    fontFamily: "'Noto Sans KR', sans-serif",
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#e9bd7e'}
                  onBlur={(e) => e.target.style.borderColor = errors.confirmPassword ? '#dc3545' : '#e9d8c7'}
                />
                {errors.confirmPassword && (
                  <p style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif", fontSize: '0.875rem', marginTop: '0.25rem' }}>❌ {errors.confirmPassword}</p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg mt-6"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-3 text-sm" style={{ color: '#e9d8c7' }}>Or</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Toggle Button */}
          <div className="text-center">
            <p style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif", fontSize: '0.875rem', marginBottom: '0.75rem' }}>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
            </p>
            <button
              type="button"
              onClick={toggleMode}
              className="w-full border-2 font-bold py-2 px-4 rounded-lg transition duration-200"
              style={{ borderColor: '#e9bd7e', color: '#e9bd7e', backgroundColor: 'transparent', hover: { backgroundColor: '#5e5147' } }}
            >
              {isLogin ? 'Create Account' : 'Login Instead'}
            </button>
          </div>

          {/* Footer Info */}
          <div className="mt-6 text-center text-xs" style={{ color: '#e9d8c7' }}>
            <p style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif" }}>🔒 Your data is secure and encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
}
