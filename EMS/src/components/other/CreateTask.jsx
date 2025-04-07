import React from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = React.useState("");
  const [taskDate, setTaskDate] = React.useState("");
  const [assignedTo, setAssignedTo] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [taskDescription, setTaskDescription] = React.useState("");

  const [newTask, setNewTask] = React.useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      // assignedTo,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = userData;

    data.forEach(function (elem) {
      if (assignedTo == elem.firstname) {
        elem.tasks.push(newTask);
        // console.log(elem); // When logging the elem its giving me the data of successiding sunbmit data
        elem.taskStats.newTask += 1;
        // localStorage.setItem("employees", JSON.stringify(data));
        alert("Task Created Successfully");
      }
    });
    setUserData(data);

    setTaskTitle("");
    setTaskDate("");
    setAssignedTo("");
    setCategory("");
    setTaskDescription("");
  };
  return (
    <>
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-wrap w-full items-start justify-between"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="text"
                placeholder="Make a UI Design"
              />
            </div>
            <div className="mt-3">
              <h3>Date</h3>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="date"
              />
            </div>
            <div className="mt-3">
              <h3>Assigned To</h3>
              <input
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="text"
                placeholder="Employee Name"
              />
            </div>
            <div className="mt-3">
              <h3>Catagory</h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="text"
                placeholder="Design, Dev, etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Elaborate task"
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 rounded px-5 text-sm mt-4 w-full ">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
