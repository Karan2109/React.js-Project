import React, { useEffect, useState } from "react";

// Custom Hook for Count Animation
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // roughly 60fps
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(handle);
      } else {
        setCount(Math.floor(start));
      }
    }, 30); // 16
    return () => clearInterval(handle);
  }, [end, duration]);
  return count;
};

const StatsCard = ({ className = "" }) => {
  const experience = useCountUp(42);
  const members = useCountUp(73);
  const projects = useCountUp(5000);

  return (
    <div
      className={`bg-[#FFF4EE] p-6 rounded-md border border-[#f8d8c2] max-w-7xl mx-auto ${className}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#f8d8c2] text-center">
        {/* Experience */}
        <div className="py-6 px-4">
          <p className="text-3xl font-extrabold text-[#532C1F]">
            {experience}%
          </p>
          <p className="text-[#532C1F] mt-2 font-semibold">
            Years of experience
          </p>
        </div>
        {/* Members */}
        <div className="py-6 px-4">
          <p className="text-3xl font-extrabold text-[#532C1F]">{members}+</p>
          <p className="text-[#532C1F] mt-2 font-semibold">Agency members</p>
        </div>
        {/* Projects */}
        <div className="py-6 px-4">
          <p className="text-3xl font-extrabold text-[#532C1F]">
            {projects.toLocaleString()}
          </p>
          <p className="text-[#532C1F] mt-2 font-semibold">Projects complete</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
