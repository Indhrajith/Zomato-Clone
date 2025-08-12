
import { useNavigate } from 'react-router-dom';
const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/login');
  };
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1
        onClick={() => navigate('/restaurants')}
        className="text-2xl font-bold text-red-500 cursor-pointer"
      >
        Zomato Clone
      </h1>
      <nav className="flex gap-4 items-center">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-red-500 font-semibold hover:underline"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={() => navigate('/login')}
              className="text-red-500 font-semibold hover:underline"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="text-red-500 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </>
        )}
      </nav>
    </header>
  );
};
export default App;
