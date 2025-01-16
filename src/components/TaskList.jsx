import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const TaskList = () => {
  const { wtgId } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/wtg/${wtgId}/tasks`)
      .then((response) => setTasks(response.data.data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, [wtgId]);

  return (
    <div className="bg-white shadow-md p-5 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Task Name</th>
            <th className="px-4 py-2">Forecast Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{task.task_name}</td>
              <td className="border px-4 py-2">{task.forecast_date}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/task/${task.task_id}/update`}
                  className="text-blue-500 hover:underline"
                >
                  Update Forecast
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
