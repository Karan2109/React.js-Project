import { useSelector } from "react-redux";

const StudentTable = () => {
  const students = useSelector((state) => state.students.students);

  return (
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Name</th>
          <th className="border p-2">Roll No</th>
          <th className="border p-2">Class</th>
          <th className="border p-2">Attendance</th>
        </tr>
      </thead>
      <tbody>
        {students.slice(0, 5).map((student) => (
          <tr key={student.id} className="border">
            <td className="border p-2">{student.name}</td>
            <td className="border p-2">{student.rollNo}</td>
            <td className="border p-2">{student.class}</td>
            <td className="border p-2">{student.attendance}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
