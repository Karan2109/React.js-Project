import { useState } from "react";

const SearchFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [sectionFilter, setSectionFilter] = useState("");
  const [attendanceRange, setAttendanceRange] = useState({ from: "", to: "" });

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = () => {
    onFilter({ classFilter, sectionFilter, attendanceRange });
  };

  return (
    <div className="flex flex-wrap gap-3 mb-4 p-4 bg-white shadow-md rounded">
      <input
        type="text"
        placeholder="Search Name or Roll No"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded"
      />

      <select
        value={classFilter}
        onChange={(e) => setClassFilter(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Classes</option>
        <option value="10">Class 10</option>
        <option value="12">Class 12</option>
      </select>

      <select
        value={sectionFilter}
        onChange={(e) => setSectionFilter(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Sections</option>
        <option value="A">Section A</option>
        <option value="B">Section B</option>
      </select>

      <input
        type="number"
        placeholder="Attendance From"
        value={attendanceRange.from}
        onChange={(e) =>
          setAttendanceRange({ ...attendanceRange, from: e.target.value })
        }
        className="p-2 border rounded"
      />

      <input
        type="number"
        placeholder="Attendance To"
        value={attendanceRange.to}
        onChange={(e) =>
          setAttendanceRange({ ...attendanceRange, to: e.target.value })
        }
        className="p-2 border rounded"
      />

      <button
        onClick={handleSearch}
        className="px-3 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
      <button
        onClick={handleFilter}
        className="px-3 py-2 bg-green-500 text-white rounded"
      >
        Filter
      </button>
    </div>
  );
};

export default SearchFilter;
