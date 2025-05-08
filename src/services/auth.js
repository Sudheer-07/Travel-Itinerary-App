// src/services/auth.js

// Dummy authentication logic for demo
export const loginWithEmail = async (email, password) => {
  // Simulate login and redirect based on email
  if (email.includes('dash')) {
    localStorage.setItem('auth', 'dashboard');
    return { user: { email }, redirect: '/dashboard' };
  }
  if (email.includes('onboard')) {
    localStorage.setItem('auth', 'onboarding');
    return { user: { email }, redirect: '/onboarding' };
  }
  throw new Error('Invalid credentials');
};

export const loginWithFacebook = async () => {
  localStorage.setItem('auth', 'dashboard');
  return { user: { provider: 'facebook' }, redirect: '/dashboard' };
};

export const loginWithGoogle = async () => {
  localStorage.setItem('auth', 'dashboard');
  return { user: { provider: 'google' }, redirect: '/dashboard' };
};

export const loginWithApple = async () => {
  localStorage.setItem('auth', 'dashboard');
  return { user: { provider: 'apple' }, redirect: '/dashboard' };
};

export const resetPassword = async (email) => {
  // Implement password reset
  return true;
}; 