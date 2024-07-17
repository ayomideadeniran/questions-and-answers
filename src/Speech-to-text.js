import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

const SpeechToText = () => {
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();
  const [isCopied, setCopied] = useClipboard(transcript, {
    successDuration: 1000,
  });

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="container">
      <p style={{ color: "red" }}>Quiz App by knights.dev ( Ayomide )</p>
      <h2>Speech to Text Converter</h2>
      <p>A React hook that converts speech from the microphone to text.</p>
      <div className="main-content">{transcript}</div>
      <div className="btn-style">
        <button onClick={setCopied}>
          {isCopied ? "Copied!" : "Copy to clipboard"}
        </button>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>
          Stop Listening
        </button>
        <button onClick={resetTranscript}>Restart</button>
      </div>
    </div>
  );
};

export default SpeechToText;
