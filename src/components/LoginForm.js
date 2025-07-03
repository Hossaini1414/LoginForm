import React, { useState , useEffect } from 'react';

const userInfo = [
  { username: 'hossaini', password: '1234' },
  { username: 'temori', password: 'abcd' },
  { username: 'kashify', password: '1ab2c3' },
  { username: 'ahmadzia', password: '54321' },
  { username: 'noor', password: '5678' },
];

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false); // مقدار boolean

  useEffect(() => {
    if(darkMode){
        document.body.classList.add('bg-gray-900', 'flex', 'items-center', 'justify-center');
    }else{
        document.body.classList.remove('bg-gray-900');
        document.body.classList.add('flex' ,'items-center', 'justify-center','bg-gray-300');
    };
    
  } , [darkMode]);
  const handleLogin = (e) => {
    e.preventDefault();

    const found = userInfo.find(
      (user) => user.username === username && user.password === password
    );

    if (found) {
      setError('');
      window.location.href = 'https://Hossaini1414.github.io/Team-Profile';
    } else {
      setError('Incorrect!! please try again');
    }
  };
  return (
    <div
      className={`mt-10 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden  
      bg-gradient-to-t 
      ${darkMode ? 'from-purple-800 via-gray-600 to-purple-800 text-white' : 'from-purple-200 via-white to-purple-200 text-black'}
       `}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={' text-3xl '}
      >
        {darkMode ? '🌖' : ' 🌒'}
      </button>

      <div className="p-8 pt-6">
        <h1 className="text-2xl font-semibold text-center">Welcome back</h1>
        <p className={`text-center text-md mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Please enter your details to login
        </p>

        <form autoComplete="off" onSubmit={handleLogin}>
          <label className={`block text-lg font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            User Name
          </label>
          <input
            type="text"
            value={username}
            placeholder="user name...."
            className={`w-full bg-transparent px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500
            ${darkMode ? 'bg-purple-700 border-purple-600 text-white' : 'bg-purple-200 border-purple-400 text-black '}`}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className={`block text-lg font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Password
          </label>
          <input
            type="password"
            value={password}
            placeholder="password....."
            className={`w-full bg-transparent px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500
            ${darkMode ? 'bg-purple-700 border-purple-600 text-white ' : 'bg-purple-200 border-purple-400 text-black '}`}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-between items-center mb-4">
            <label className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-black'}`}>
              <input type="checkbox" className="form-checkbox" />
              Remember for 30 days
            </label>
            <a
              href="#"
              className={`text-sm hover:underline ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-purple-400 w-full rounded-lg hover:bg-purple-600 py-2 text-white"
          >
            Login
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-sm mt-2 mx-auto text-center">{error}</p>
        )}
      </div>
    </div>
  );
}

export default Login;