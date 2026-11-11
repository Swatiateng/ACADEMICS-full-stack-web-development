import { Link } from "react-router-dom";
import { tasks } from "../data/tasks";

function Dashboard() {

  return (
    <div className="container">

      <h1>Dashboard</h1>

      <p>Here are all your tasks.</p>

      <div className="task-list">

        {tasks.map((task) => (

          <div className="task-card" key={task.id}>

            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
              Status: {task.status}
            </p>

            <p>
              Priority: {task.priority}
            </p>

            <Link to={`/tasks/${task.id}`}>
              View Details
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;