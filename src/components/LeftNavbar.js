// Importing necessary modules and images
import React from "react";
import image from "../Image/R.jpg"; // adjust the path as needed
import user from "../Image/User.png";
import message from "../Image/message-white.png";
import date from "../Image/date-white.png";
import setting from "../Image/setting-white.png";

// Button component that takes an image source and alt text as props
const Button = ({ imgSrc, altText }) => (
  <button className="btn btn-square rounded-lg w-10 h-8 mb-8 focus:bg-red-500">
    <img className="w-8 h-6 m-1" src={imgSrc} alt={altText} />
  </button>
);

// LeftNavbar component
const LeftNavbar = () => {
  return (
    // Container for the navbar
    <div className="bg-black flex flex-col items-center w-24 ">
      {/* Profile image*/}
      <img
        className="w-16 h-16 rounded-2xl mt-20 mb-10 w-14 h-14 border-white"
        src={image}
        alt="Profile"
      />
      {/* Buttons for user, message, date, and setting */}
      <Button imgSrc={user} altText="User" />
      <Button imgSrc={message} altText="Message" />
      <Button imgSrc={date} altText="Date" />
      <Button imgSrc={setting} altText="Setting" />
    </div>
  );
};

// Exporting the LeftNavbar component
export default LeftNavbar;
