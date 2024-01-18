import React, { useRef, useState } from "react";
import record from "../Image/record.png";
import stop from "../Image/stop.png";

const RecordButton = () => {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true})
      .then(stream => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        recorder.start();
        setRecording(true);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const handleClick = () => {
    if (recording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <button onClick={handleClick} className="mt-3 w-10 mr-2 h-10 bg-white rounded-r-xl p-2">
      <img className="w-5 h-5" src={recording ? stop : record} alt="Record" />
    </button>
  );
};

export default RecordButton;