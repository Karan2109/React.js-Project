import React from "react";

const Completetask = ({ data }) => {
  return (
    <>
      <div className="flex-shrink-0 h-full w-[300px] bg-orange-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm font-semibold">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">{data.description}</p>
        <div className="mt-6 ">
          <button className="w-full bg-green-500 rounded font-medium py-1 px-2 text-sm">
            Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default Completetask;
