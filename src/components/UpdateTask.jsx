import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateTask = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    forecast_date: '',
    planned_hours: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/v1/tasks/${taskId}/forecast`, formData)
      .then(() => {
        alert('Task updated successfully!');
        navigate('/');
      })
      .catch((error) => console.error('Error updating task:', error));
  };

  return (
    <div className="bg-white shadow-md p-5 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Update Task Forecast</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Forecast Date</label>
          <input
            type="date"
            name="forecast_date"
            value={formData.forecast_date}
            onChange={(e) => setFormData({ ...formData, forecast_date: e.target.value })}
            className="border px-4 py-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Planned Hours</label>
          <input
            type="number"
            name="planned_hours"
            value={formData.planned_hours}
            onChange={(e) => setFormData({ ...formData, planned_hours: e.target.value })}
            className="border px-4 py-2 w-full rounded"
            step="0.01"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
