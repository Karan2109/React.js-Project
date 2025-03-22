import React from "react";

const SettingsTab = ({ formData, setFormData, nextTab }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Settings</h3>

            <label className="flex items-center justify-center space-x-3 text-lg text-gray-700">
                <input 
                    type="checkbox" 
                    checked={formData.notifications} 
                    onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })} 
                    className="w-5 h-5 text-blue-500 border-gray-300 focus:ring focus:ring-blue-300"
                />
                <span>Enable Notifications</span>
            </label>

            <button 
                onClick={nextTab} 
                className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-all"
            >
                Submit
            </button>
        </div>
    );
};

export default SettingsTab;
