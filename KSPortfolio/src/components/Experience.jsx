import React from "react";

const Experience = () => {
  return (
    // <section className="border-b border-neutral-900 pb-4">
    //   <h2 className="text-4xl my-20 text-center mb-16">Experience</h2>
    //   {/* Unified Mentor */}
    //   <div className="mb-12">
    //     <p className="text-sm text-neutral-400 mb-2">2025 - 2025</p>
    //     <h3 className="text-xl font-semibold">
    //       Full Stack Web Developer -{" "}
    //       <span className="text-neutral-400">Unified Mentor</span>
    //     </h3>
    //     <p className="text-neutral-300 mt-2">
    //       Developed and maintained web applications using HTML, CSS, JavaScript,
    //       and PHP. Collaborated with designers to create responsive and
    //       user-friendly interfaces. Implemented database solutions using MySQL
    //       and PostgreSQL.
    //     </p>
    //     <div className="flex flex-wrap gap-2 mt-4">
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         HTML
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         CSS
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         JavaScript
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         React.js
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         Tailwind CSS
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         jQuery
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         AppWrite
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         MongoDB
    //       </span>
    //     </div>
    //   </div>
    //   {/* HNR Tech */}
    //   <div className="mb-12">
    //     <p className="text-sm text-neutral-400 mb-2">2022 - 2024</p>
    //     <h3 className="text-xl font-semibold">
    //       Data Quality Analyst -{" "}
    //       <span className="text-neutral-400">HNR Tech</span>
    //     </h3>
    //     <p className="text-neutral-300 mt-2">
    //       Analyzed and validated data quality for web applications. Developed
    //       automated testing scripts using Python and Selenium. Collaborated with
    //       development teams to identify and resolve data-related issues.
    //     </p>
    //     <div className="flex flex-wrap gap-2 mt-4">
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         HTML
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         CSS
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         JavaScript
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         Databases
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         Testing
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         Debugging
    //       </span>
    //     </div>
    //   </div>
    //   {/* Canvazo */}
    //   <div className="mb-12">
    //     <p className="text-sm text-neutral-400 mb-2">2020 - 2021</p>
    //     <h3 className="text-xl font-semibold">
    //       Web Developer - <span className="text-neutral-400">Canvazo</span>
    //     </h3>
    //     <p className="text-neutral-300 mt-2">
    //       Contributed to the development of web applications using HTML, CSS,
    //       JavaScript, and WordPress. Managed databases and implemented data
    //       storage solutions using GitHub. Worked closely with product managers
    //       to prioritize features and enhancements.
    //     </p>
    //     <div className="flex flex-wrap gap-2 mt-4">
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         HTML
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         CSS
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         JavaScript
    //       </span>
    //       <span className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
    //         WordPress
    //       </span>
    //     </div>
    //   </div>
    // </section>
    <section className="border-b border-neutral-900 pb-4">
      <h2 className="text-4xl my-20 text-center">Experience</h2>

      <div className="space-y-16">
        {/* Unified Mentor */}
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="md:w-1/4">
            <p className="text-sm text-neutral-400">2025 - 2025</p>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold">
              Full Stack Web Developer -{" "}
              <span className="text-neutral-400">Unified Mentor</span>
            </h3>
            <p className="text-neutral-300 mt-2">
              Developed and maintained web applications using HTML, CSS,
              JavaScript, and PHP. Collaborated with designers to create
              responsive and user-friendly interfaces. Implemented database
              solutions using MySQL and PostgreSQL.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Tailwind CSS",
                "jQuery",
                "AppWrite",
                "MongoDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* HNR Tech */}
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="md:w-1/4">
            <p className="text-sm text-neutral-400">2022 - 2024</p>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold">
              Data Quality Analyst -{" "}
              <span className="text-neutral-400">HNR Tech</span>
            </h3>
            <p className="text-neutral-300 mt-2">
              Analyzed and validated data quality for web applications.
              Developed automated testing scripts using Python and Selenium.
              Collaborated with development teams to identify and resolve
              data-related issues.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Databases",
                "Testing",
                "Debugging",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Canvazo */}
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="md:w-1/4">
            <p className="text-sm text-neutral-400">2020 - 2021</p>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold">
              Web Developer - <span className="text-neutral-400">Canvazo</span>
            </h3>
            <p className="text-neutral-300 mt-2">
              Contributed to the development of web applications using HTML,
              CSS, JavaScript, and WordPress. Managed databases and implemented
              data storage solutions using GitHub. Worked closely with product
              managers to prioritize features and enhancements.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["HTML", "CSS", "JavaScript", "WordPress"].map((tech) => (
                <span
                  key={tech}
                  className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
