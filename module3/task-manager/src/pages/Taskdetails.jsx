import { useParams, Link } from "react-router-dom";
import { tasks } from "../data/tasks";

function TaskDetails() {

  const { taskId } = useParams();

  const task = tasks.find(
    (t) => t.id === Number(taskId)
  );

  if (!task) {
    return (
      <div className="container">
        <h2>Task Not Found</h2>
        <Link to="/">Back to Dashboard</Link>
      </div>
    );
  }

  return (

    <div className="container">

      <h1>Task Details</h1>

      <div className="task-card">

        <h2>{task.title}</h2>

        <p>
          <strong>Description:</strong>
          {task.description}
        </p>

        <p>
          <strong>Status:</strong>
          {task.status}
        </p>

        <p>
          <strong>Priority:</strong>
          {task.priority}
        </p>

        <p>
          <strong>Task ID:</strong>
          {task.id}
        </p>

      </div>

      <Link to="/">
        Back to Dashboard
      </Link>

    </div>

  );
}

export default TaskDetails;