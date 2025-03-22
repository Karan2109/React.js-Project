import React from "react";

const SummaryTab = ({ formData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Summary
      </h3>

      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <tbody>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Name</th>
            <td className="px-4 py-2">{formData.name}</td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left">Age</th>
            <td className="px-4 py-2">{formData.age}</td>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Email</th>
            <td className="px-4 py-2">{formData.email}</td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left">Interests</th>
            <td className="px-4 py-2">
              {formData.interests.length > 0
                ? formData.interests.join(", ")
                : "None"}
            </td>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Notifications</th>
            <td className="px-4 py-2">
              {formData.notifications ? "Enabled" : "Disabled"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTab;
