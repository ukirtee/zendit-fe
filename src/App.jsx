import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WTGList from "./components/WTGList.jsx";
import TaskList from "./components/TaskList.jsx";
import UpdateTask from "./components/UpdateTask.jsx";
import WTGSummary from "./components/WTGSummary.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-5">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          WTG Task Manager
        </h1>
        <Routes>
          <Route path="/" element={<WTGList />} />
          <Route path="/wtg/:wtgId/tasks" element={<TaskList />} />
          <Route path="/task/:taskId/update" element={<UpdateTask />} />
          <Route path="/wtg/:wtgId/summary" element={<WTGSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
