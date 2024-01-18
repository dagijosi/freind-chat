import React from "react";
import image from "../Image/R.jpg";

// ChatItem component
const ChatItem = ({ name, message, time, count }) => {
  return (
    // Button container for each chat item
    <button className="flex justify-between h-16 mb-4 focus:bg-red-500 p-2">
      <div className="flex ml-6">
        {/* Profile image */}
        <img
          className="w-16 h-12 rounded-lg border-white"
          src={image}
          alt="Profile"
        />
        <div className="flex flex-col ml-6 w-full">
          {/* Name of the chat */}
          <h1 className="text-left font-bold">{name}</h1>
          <div className="flex flex-row justify-between text-xs text-gray-400">
            {/* Message and time */}
            <label>{message}</label>
            <label>{time}</label>
          </div>
        </div>
      </div>
      {/* Count of new messages */}
      {count > 0 && (
        <div className="mt-3 mr-6 w-6 h-6 text-white bg-red-500 rounded-full">
          {count}
        </div>
      )}
    </button>
  );
};

export default ChatItem;
