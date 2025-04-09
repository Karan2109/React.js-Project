import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

const ChartVisualization = () => {
  const students = useSelector((state) => state.students.students);

  const data = {
    labels: students.map((s) => s.name),
    datasets: [
      {
        label: "Attendance",
        data: students.map((s) => s.attendance),
        backgroundColor: "blue",
      },
    ],
  };

  return <Bar data={data} />;
};

export default ChartVisualization;
