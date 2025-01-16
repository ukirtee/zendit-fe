import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const WTGList = () => {
  const [wtgs, setWtgs] = useState([]);

  useEffect(() => {
    fetchWTGs();
  }, []);

  const fetchWTGs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/wtgs'); // Adjust endpoint as needed
      setWtgs(response.data.data);
    } catch (error) {
      console.error('Error fetching WTGs:', error);
    }
  };

  return (
    <div className="bg-white shadow-md p-5 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">WTGs</h2>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">WTG Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {wtgs.map((wtg) => (
            <tr key={wtg.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{wtg.name}</td>
              <td className="border px-4 py-2 space-x-2 text-center">
                <Link
                  to={`/wtg/${wtg.id}/tasks`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View Tasks
                </Link>
                <Link
                  to={`/wtg/${wtg.id}/summary`}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  View Summary
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WTGList;
