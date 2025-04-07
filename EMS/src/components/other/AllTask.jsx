import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div id="task" className="bg-[#1c1c1c] p-5 rounded mt-5 h-90">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded ">
        <h2 className="text-xl w-1/6 text-center font-bold">Employee Name</h2>
        <h3 className="text-xl w-1/6 text-center font-bold">New Task</h3>
        <h5 className="text-xl w-1/6 text-center font-bold">Active Task</h5>
        <h5 className="text-xl w-1/6 text-center font-bold">Completed</h5>
        <h5 className="text-xl w-1/6 text-center font-bold">Failed</h5>
      </div>
      <div id="task1" className="h-[80%] overflow-auto">
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="bg-emerald-500 mb-2 py-2 px-4 flex justify-between rounded border-2 "
            >
              <h2 className="w-1/6 font-semibold bg-orange-500 text-center text-xl">
                {elem.firstname}
              </h2>
              <h3 className="w-1/6 font-semibold bg-blue-500 text-center text-xl">
                {elem.taskStats.newTask}
              </h3>
              <h5 className="w-1/6 font-semibold bg-yellow-500 text-center text-xl">
                {elem.taskStats.active}
              </h5>
              <h5 className="w-1/6 font-semibold bg-green-500 text-center text-xl">
                {elem.taskStats.completed}
              </h5>
              <h5 className="w-1/6 font-semibold bg-red-500 text-center text-xl">
                {elem.taskStats.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
