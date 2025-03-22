import React from "react";

const ProfileTab = ({ formData, setFormData, nextTab, setErrors, errors }) => {
  const validateProfile = () => {
    let newErrors = {};
    if (formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters.";
    if (!formData.age || isNaN(formData.age) || formData.age < 18)
      newErrors.age = "Age must be at least 18.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Enter a valid email.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) nextTab();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Profile</h3>

      {/* Name Input */}
      <label className="block text-gray-700 font-medium">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
      />
      <p className="text-red-500 text-sm mt-1">{errors.name}</p>

      {/* Age Input */}
      <label className="block text-gray-700 font-medium mt-4">Age</label>
      <input
        type="number"
        placeholder="Enter your age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
      />
      <p className="text-red-500 text-sm mt-1">{errors.age}</p>

      {/* Email Input */}
      <label className="block text-gray-700 font-medium mt-4">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
      />
      <p className="text-red-500 text-sm mt-1">{errors.email}</p>

      {/* Next Button */}
      <button
        onClick={validateProfile}
        className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Next
      </button>
    </div>
  );
};

export default ProfileTab;
