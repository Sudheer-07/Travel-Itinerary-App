import React, { useState } from 'react';
import { FaFacebookF, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {
  loginWithEmail,
  loginWithFacebook,
  loginWithGoogle,
  loginWithApple,
} from '../services/auth';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await loginWithEmail(email, password);
      // Redirect to dashboard or onboarding based on dummy logic
      window.location.href = result.redirect;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setError('');
    setLoading(true);
    try {
      let result;
      if (provider === 'facebook') result = await loginWithFacebook();
      if (provider === 'google') result = await loginWithGoogle();
      if (provider === 'apple') result = await loginWithApple();
      window.location.href = result.redirect;
    } catch (err) {
      setError('Social login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Implement the logic to handle forgot password
    console.log('Forgot Password clicked');
  };

  const handleSignUp = () => {
    // Implement the logic to handle sign up
    console.log('Sign Up clicked');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 bg-opacity-60 dark:bg-black dark:bg-opacity-80">
      <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col items-center mx-4 md:mx-0 my-8 md:my-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-neutral-900 dark:text-white">Log in to view this page</h2>
        <button
          className="w-full flex items-center justify-center gap-3 bg-[#3b4fe2] text-white font-bold py-4 rounded-full text-lg mb-4 shadow-md hover:bg-[#2d3bb3] transition"
          onClick={() => handleSocialLogin('facebook')}
          disabled={loading}
        >
          <FaFacebookF className="text-2xl" />
          Log in with Facebook
        </button>
        <button
          className="w-full flex items-center justify-center gap-3 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-semibold py-4 rounded-full text-lg mb-4 shadow-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          onClick={() => handleSocialLogin('google')}
          disabled={loading}
        >
          <FcGoogle className="text-2xl" />
          Log in with Google
        </button>
        <button
          className="w-full flex items-center justify-center gap-3 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-semibold py-4 rounded-full text-lg mb-6 shadow-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          onClick={() => handleSocialLogin('apple')}
          disabled={loading}
        >
          <FaApple className="text-2xl" />
          Log in with Apple
        </button>
        <div className="flex items-center w-full my-4">
          <div className="flex-grow border-t border-neutral-200 dark:border-neutral-700" />
          <span className="mx-4 text-neutral-400 font-semibold">or</span>
          <div className="flex-grow border-t border-neutral-200 dark:border-neutral-700" />
        </div>
        {error && (
          <div className="w-full mb-4 text-red-500 text-center font-semibold">{error}</div>
        )}
        <form className="w-full" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-300 transition"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <div className="relative mb-2">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-300 transition pr-12"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 dark:hover:text-white"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 2.25 12c2.036 3.807 6.07 6.75 9.75 6.75 1.563 0 3.06-.362 4.396-1.02M21.75 12c-.512-.96-1.24-1.885-2.142-2.737M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12C3.285 7.943 7.11 5.25 12 5.25c4.89 0 8.715 2.693 9.75 6.75-1.035 4.057-4.86 6.75-9.75 6.75-4.89 0-8.715-2.693-9.75-6.75Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={() => handleForgotPassword()} 
              className="text-blue-600 hover:text-blue-800"
            >
              Forgot Password?
            </button>
          </div>
          <button type="submit" className="w-full bg-neutral-900 dark:bg-lime-300 text-white dark:text-neutral-900 font-bold py-3 rounded-lg text-lg shadow-md hover:bg-neutral-800 dark:hover:bg-lime-400 transition mb-2" disabled={loading}>
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
        <p className="mt-6 text-neutral-500 dark:text-neutral-400 text-center">Don't have an account yet? <button 
          onClick={() => handleSignUp()} 
          className="text-blue-600 hover:text-blue-800"
        >
          Sign Up
        </button></p>
      </div>
    </div>
  );
};

export default Login; 