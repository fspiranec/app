import Sidebar from '../components/Sidebar';

export default function Wishlist() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold mb-4">Wishlist Page</h1>
      </div>
    </div>
  );
}
