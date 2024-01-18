// Import necessary modules and components
import React from "react";
import edit from "../Image/edit.png";
import ChatItem from "./ChatItem";

// Define the ChatList component
const ChatList = () => {
  // Define the chat categories and their respective items
  const chatCategories = [
    {
      title: "Favorites",
      items: [
        { name: "Louise", message: "girimiss", time: "12:24 pm", count: 4 },
        {
          name: "Parents",
          message: "Love you too",
          time: "08:43 am",
          count: 0,
        },
      ],
    },
    {
      title: "Groups",
      items: [
        { name: "Workout", message: "I am dead", time: "05:40 pm", count: 8 },
        { name: "Holidays", message: "booked !", time: "Yesterday", count: 2 },
      ],
    },
    {
      title: "Direct",
      items: [
        { name: "Anais", message: "erggh again..", time: "06:17 pm", count: 4 },
        { name: "Ryan", message: "Next week", time: "12:24 pm", count: 0 },
        { name: "Lena", message: "ok bye", time: "Thursday", count: 5 },
        { name: "Henriet", message: "Let me know", time: "Friday", count: 1 },
      ],
    },
  ];

  // Return the JSX to render for this component
  return (
    <div className="w-80 ">
      {/* Header section with title and edit button */}
      <div className="flex flex-wrap justify-between">
        <h1 className="m-6 mb-4 font-bold text-3xl">Chat</h1>
        <button className="mr-14 mt-3">
          <img className="w-7 h-6" src={edit} alt="Edit" />
        </button>
      </div>

      {/* Form for the search input */}
      <form className="ml-6 mr-14">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          {/* Icon for the search input */}
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-grey-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          {/* Search input field */}
          <input
            type="search"
            className="block w-full h-4 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-200 "
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </form>

      {/* Container for the chat list */}
      <div className="chat-list-container h-5/6 overflow-y-scroll">
        {/* Map over each chat category and render its items */}
        {chatCategories.map((category, index) => (
          <React.Fragment key={index}>
            {/* Title for the category and a button to add more items */}
            <div className="flex flex-row">
              <h1 className="m-4 font-extrabold">{category.title}</h1>
              <button className="font-extrabold text-xl">+</button>
            </div>

            {/* Container for the items in the category */}
            <div className="flex flex-col w-full">
              {/* Map over each item in the category and render it */}
              {category.items.map((item, index) => (
                <React.Fragment key={index}>
                  {/* Render the ChatItem component for this item */}
                  <ChatItem {...item} />
                  {/* Divider between items */}
                  <div className="border-t border-gray-200 w-36 ml-24"></div>
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// Export the ChatList component
export default ChatList;
