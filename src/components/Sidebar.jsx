import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="w-48 bg-gray-100 p-4 min-h-screen">
      <nav className="flex flex-col space-y-2">
        <Link to="/dashboard" className="px-3 py-2 rounded hover:bg-gray-200">
          Dashboard
        </Link>
        <Link to="/wishlist" className="px-3 py-2 rounded hover:bg-gray-200">
          Wishlist
        </Link>
        <Link to="/kids-gift" className="px-3 py-2 rounded hover:bg-gray-200">
          Kids Gift
        </Link>
        <Link to="/event" className="px-3 py-2 rounded hover:bg-gray-200">
          Event
        </Link>
      </nav>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-3 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
