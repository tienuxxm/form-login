import React from 'react';
import LoginForm from './components/LoginForm';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt:', { email, password });
    // Here you would typically make an API call to your Laravel backend
    alert(`Login attempt with email: ${email}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Glass morphism container */}
          <div className="backdrop-blur-xl bg-gray-900/40 border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
            <LoginForm onSubmit={handleLogin} />
          </div>
        </div>
      </div>
      
      {/* Subtle scan line effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-px animate-pulse"></div>
    </div>
  );
}

export default App;