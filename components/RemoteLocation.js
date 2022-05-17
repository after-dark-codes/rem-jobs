import React, { useState } from "react";

function RemoteLocation({ name, label, wasChecked }) {
  const [checked, setChecked] = useState(false);

  const changeHandler = () => {
    wasChecked(label);
    setChecked(!checked);
  };

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={changeHandler}
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={name} className="font-medium text-gray-700">
          {label}
        </label>
      </div>
    </div>
  );
}

export default RemoteLocation;
