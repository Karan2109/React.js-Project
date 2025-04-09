import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/studentSlice";

const AddStudentForm = () => {
  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    class: "",
    attendance: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !student.name ||
      !student.rollNo ||
      !student.class ||
      !student.attendance
    )
      return;

    dispatch(addStudent({ ...student, id: Date.now() }));
    setStudent({ name: "", rollNo: "", class: "", attendance: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">Add Student</h2>
      <input
        type="text"
        placeholder="Name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
        className="w-full p-2 border rounded mb-2"
      />

      <input
        type="text"
        placeholder="Roll No"
        value={student.rollNo}
        onChange={(e) => setStudent({ ...student, rollNo: e.target.value })}
        className="w-full p-2 border rounded mb-2"
      />

      <input
        type="text"
        placeholder="Class"
        value={student.class}
        onChange={(e) => setStudent({ ...student, class: e.target.value })}
        className="w-full p-2 border rounded mb-2"
      />

      <input
        type="number"
        placeholder="Attendance (%)"
        value={student.attendance}
        onChange={(e) => setStudent({ ...student, attendance: e.target.value })}
        className="w-full p-2 border rounded mb-2"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Add Student
      </button>
    </form>
  );
};

export default AddStudentForm;
