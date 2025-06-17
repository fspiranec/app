import Sidebar from '../components/Sidebar';

export default function Event() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold mb-4">Event Page</h1>
      </div>
    </div>
  );
}
