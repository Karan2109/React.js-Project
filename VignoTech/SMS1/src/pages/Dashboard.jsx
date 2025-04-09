import { useSelector } from "react-redux";
import StudentTable from "../components/StudentTable";
import AddStudentForm from "../components/AddStudentForm";
import ChartVisualization from "../components/ChartVisualization";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) return <p>Please log in</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome, {user.name} ({user.role})
      </h1>
      {user.role === "admin" && <AddStudentForm />}
      <StudentTable />
      <ChartVisualization />
    </div>
  );
};

export default Dashboard;
