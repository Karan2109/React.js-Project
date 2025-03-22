import React from "react";

const InterestsTab = ({
  formData,
  setFormData,
  nextTab,
  setErrors,
  errors,
}) => {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((i) => i !== value),
    }));
  };

  const validateInterests = () => {
    if (formData.interests.length === 0) {
      setErrors({ interests: "Select at least one interest." });
    } else {
      setErrors({});
      nextTab();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Interests</h3>

      <div className="flex flex-col space-y-3">
        {/* Checkbox Options */}
        {["Sports", "Music", "Technology"].map((interest) => (
          <label
            key={interest}
            className="flex items-center space-x-2 text-gray-700 font-medium"
          >
            <input
              type="checkbox"
              value={interest}
              onChange={handleCheckboxChange}
              checked={formData.interests.includes(interest)}
              className="w-5 h-5 text-blue-500 border-gray-300 focus:ring focus:ring-blue-300"
            />
            <span>{interest}</span>
          </label>
        ))}
      </div>

      {/* Error Message */}
      <p className="text-red-500 text-sm mt-2">{errors.interests}</p>

      {/* Next Button */}
      <button
        onClick={validateInterests}
        className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Next
      </button>
    </div>
  );
};

export default InterestsTab;
