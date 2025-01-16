import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const WTGSummary = () => {
  const { wtgId } = useParams();
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/v1/wtg/${wtgId}/summary`)
      .then((response) => {
        setSummary(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching summary:", error);
        setLoading(false);
      });
  }, [wtgId]);

  return (
    <div className="bg-white shadow-md p-5 rounded-lg">
      {loading && <p className="text-blue-500">Loading...</p>}
      {/* Summary Section */}
      {summary && (
        <div className="bg-white shadow-md p-5 mb-6 rounded-lg w-full max-w-2xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            WTG Summary
          </h2>
          <ul className="space-y-2">
            <li>Total Planned Hours: {summary.total_planned_hours}</li>
            <li>Total Actual Hours: {summary.total_actual_hours}</li>
            <li>Tasks Behind Schedule: {summary.tasks_behind_schedule}</li>
            <li>
              Average Variance: {summary.variance_statistics?.average_variance}
            </li>
            <li>Max Variance: {summary.variance_statistics?.max_variance}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default WTGSummary;
