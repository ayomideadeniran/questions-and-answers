import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import TextToSpeech from './Text-to-speech';
import SpeechToText from './Speech-to-text';
import Quiz from './Quiz';

const App = () => {
    return (
        <Router>
            <div className='home'>
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/text-to-speech">Text to Speech</Link>
                        </li>
                        <li>
                            <Link to="/speech-to-text">Speech to Text</Link>
                        </li>
                        <li>
                            <Link to="/quiz">Quiz</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/text-to-speech" element={<TextToSpeech />} />
                    <Route path="/speech-to-text" element={<SpeechToText />} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </div>
        </Router>
    );
};

const Home = () => {
    return (
      <div className="home-container">
        <h1 className="home-title">Welcome to <br/> Knights.dev  ( Ayomide ) App</h1>
        <p className="home-description">Choose a feature from the navigation menu.</p>
      </div>
    );
  };

export default App;