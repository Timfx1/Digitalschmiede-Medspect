// src/components/VoiceRecorder.jsx

import React, { useState } from "react";

const VoiceRecorder = ({ onTextRecorded }) => {
  const [recordingText, setRecordingText] = useState("");

  const startRecording = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setRecordingText(transcript);
      onTextRecorded(transcript); // Send the text back to the parent component
    };

    recognition.start();

    recognition.onend = () => {
      console.log("Recording stopped.");
    };
  };

  return (
    <div>
      <button onClick={startRecording}>Record Voice</button>
      <p>Recorded Text: {recordingText}</p>
    </div>
  );
};

export default VoiceRecorder;
