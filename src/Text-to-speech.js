import React, { useState, useEffect, useRef } from "react";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const synth = useRef(window.speechSynthesis);

  useEffect(() => {
    const updateVoices = () => {
      setVoices(synth.current.getVoices());
    };
    updateVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, []);

  const speak = () => {
    if (synth.current.speaking) {
      console.error("speechSynthesis.speaking");
      return;
    }
    if (text !== "") {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = selectedVoice || voices[0];
      utterance.rate = rate;
      utterance.pitch = pitch;
      synth.current.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    synth.current.cancel();
  };

  const clearText = () => {
    setText("");
    stopSpeaking();
  };

  return (
    <div className="container">
      <p style={{ color: "red" }}>Quiz App by knights.dev ( Ayomide )</p>

      <h2>Text to Speech Converter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to be spoken"
        rows="4"
      ></textarea>
      <div className="btn-style">
        <button onClick={speak}>Speak Text</button>
        <button onClick={stopSpeaking}>Stop</button>
        <button onClick={clearText}>Clear</button>
      </div>
      <div className="tts-controls">
        <select
          onChange={(e) => setSelectedVoice(voices[e.target.value])}
          defaultValue=""
        >
          <option value="" disabled>
            Select a voice
          </option>
          {voices.map((voice, index) => (
            <option key={index} value={index}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
        <div className="slider-container">
          <label>Rate: </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
          />
        </div>
        <div className="slider-container">
          <label>Pitch: </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={pitch}
            onChange={(e) => setPitch(parseFloat(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default TextToSpeech;
