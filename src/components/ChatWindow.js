import React from "react";
import image from "../Image/R.jpg";
import star from "../Image/star.png";
import video from "../Image/video.png";
import info from "../Image/info.png";
import record from "../Image/record.png";
import send from "../Image/send.png";
import attachment from "../Image/attachment.png";
import emoji from "../Image/emoji.png";
import RecordButton from "./RecordButton";

// Button component for the chat window
const Button = ({ imgSrc, altText }) => (
  <button className="w-8 h-8 m-2">
    <img className="" src={imgSrc} alt={altText} />
  </button>
);

// Message component for the chat window
const Message = ({ isOutgoing, text }) => (
  <div
    className={`flex ${isOutgoing ? "justify-end" : ""} mb-4 cursor-pointer`}
  >
    {!isOutgoing && (
      <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
        <img className="w-8 h-8 rounded-full" src={image} alt="Profile" />
      </div>
    )}
     <div className={`flex max-w-96 rounded-lg p-3 gap-3 ${isOutgoing ? "bg-red-500" : "bg-white"}`}>
      <p className="text-gray-700">{text}</p>
    </div>
    {isOutgoing && (
      <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
        <img className="w-8 h-8 rounded-full" src={image} alt="Profile" />
      </div>
    )}
  </div>
);

// Main ChatWindow component
class ChatWindow extends React.Component {
  fileInput = React.createRef();

  state = {
    currentMessage: '',
    //existing message
    messages: [
      { isOutgoing: false, text: "Hey Bob, how's it going?" },
      {
        isOutgoing: true,
        text: "Hi Alice! I'm good, just finished a great book. How about you?",
      },
      { isOutgoing: false, text: "I'm good, Just looking for a job." },
      { isOutgoing: false, text: "Can you find me a job, If you can?" },
      {
        isOutgoing: true,
        text: "That sounds great! What kind of job are you looking for?",
      },
      {
        isOutgoing: false,
        text: "I'm open to most things, but I'm particularly interested in tech jobs. Have you heard of any opportunities in that area?",
      },
      {
        isOutgoing: true,
        text: "Yes, I know a company that's hiring. They're looking for someone with experience in JavaScript.",
      },
      {
        isOutgoing: false,
        text: "That's perfect! I've got experience in JavaScript and other web technologies. Let me know how I can apply.",
      },
      {
        isOutgoing: true,
        text: "Great! Here's the link to the application page. Good luck!",
      },
      // Add more messages here...
    ],
  };

  handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    // handle the file here
  };

  render() {
    // Buttons for the chat window
    const buttons = [
      { imgSrc: video, altText: "Video" },
      { imgSrc: info, altText: "Info" },
    ];


    return (
      <div className="bg-gray-200 flex-grow ">
        <div className="flex flex-row justify-between mt-6 ml-6">
          <div className="flex">
            <img
              className="w-16 h-12 rounded-lg border-white"
              src={image}
              alt="Profile"
            />
            <div className=" ml-6  w-44">
              <div className="flex flex-row justify-between">
                <h1 className="font-extrabold text-2xl">Ryan Paris</h1>
                <img className="w-6 h-4 m-2" src={star} alt="Star" />
              </div>
              <h6 className="text-xs text-green-600">online</h6>
            </div>
          </div>
          <div className="flex flex-row mr-14">
            {buttons.map((button, index) => (
              <Button
                key={index}
                imgSrc={button.imgSrc}
                altText={button.altText}
              />
            ))}
          </div>
        </div>
        <div className="h-3/4 overflow-y-auto p-4 pb-36 ml-10 mr-8">
          {this.state.messages.map((message, index) => (
            <Message
              key={index}
              isOutgoing={message.isOutgoing}
              text={message.text}
            />
          ))}
        </div>
        <div className="flex flex-row ml-14 mt-4 mr-6">
          <button className="mt-3 w-10 mr-0 h-10 bg-white rounded-l-xl p-2">
            <img className="w-5 h-5" src={emoji} alt="Emoji" />
          </button>
          <textarea
            type="textarea"
            placeholder="Message"
            className="block w-full h-10 mt-3 p-2 ps-4 text-sm text-black bg-white "
            value={this.state.currentMessage}
            onChange={(e) => this.setState({ currentMessage: e.target.value })}
          />
          <button className="mt-3 w-10 mr-0 h-10 bg-white p-2">
            <input
              type="file"
              style={{ display: "none" }}
              ref={this.fileInput}
              onChange={this.handleFileChange}
            />
            <img
              className="w-5 h-5"
              src={attachment}
              alt="Attachment"
              onClick={() => this.fileInput.current.click()}
            />
          </button>
          <RecordButton />
          <button className="mt-3 w-10 mr-0 h-10 bg-white rounded-xl p-2"
          onClick={() => {
            this.setState((prevState) => ({
              messages: [...prevState.messages, { isOutgoing: true, text: prevState.currentMessage }],
              currentMessage: '',
            }));
          }}
          >
            <img className="w-5 h-5" src={send} alt="Send" />
          </button>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
