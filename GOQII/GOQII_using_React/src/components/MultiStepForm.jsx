import React, { useState } from "react";
import ProfileTab from "./ProfileTab";
import InterestsTab from "./InterestsTab";
import SettingsTab from "./SettingsTab";
import SummaryTab from "./SummaryTab";

const MultiStepForm = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        interests: [],
        notifications: false
    });

    const [errors, setErrors] = useState({});

    const nextTab = () => setCurrentTab((prev) => prev + 1);
    const prevTab = () => setCurrentTab((prev) => prev - 1);

    return (
        <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Multi-Tab Form</h2>

            {/* Navigation Tabs */}
            <div className="flex justify-between mb-6">
                <button 
                    onClick={() => setCurrentTab(0)} 
                    className={`px-4 py-2 rounded ${currentTab === 0 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    Profile
                </button>
                <button 
                    onClick={() => setCurrentTab(1)} 
                    className={`px-4 py-2 rounded ${currentTab === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    Interests
                </button>
                <button 
                    onClick={() => setCurrentTab(2)} 
                    className={`px-4 py-2 rounded ${currentTab === 2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    Settings
                </button>
            </div>

            {/* Conditional Rendering for Tabs */}
            {currentTab === 0 && <ProfileTab formData={formData} setFormData={setFormData} nextTab={nextTab} setErrors={setErrors} errors={errors} />}
            {currentTab === 1 && <InterestsTab formData={formData} setFormData={setFormData} nextTab={nextTab} setErrors={setErrors} errors={errors} />}
            {currentTab === 2 && <SettingsTab formData={formData} setFormData={setFormData} nextTab={nextTab} />}
            {currentTab === 3 && <SummaryTab formData={formData} />}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                {currentTab > 0 && (
                    <button onClick={prevTab} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                        Back
                    </button>
                )}
                {currentTab < 3 && (
                    <button onClick={nextTab} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        {currentTab === 2 ? "Submit" : "Next"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default MultiStepForm;
