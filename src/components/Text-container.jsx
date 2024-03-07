import React, { useState, useEffect } from 'react';

const TextContainer = () => {
  const [text, setText] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [correct, setCorrect] = useState(true); // Assuming the initial text is correct
  const [timerStarted, setTimerStarted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [typingTime, setTypingTime] = useState(0);

  // Example text for typing practice
  const practiceText = "The quick brown fox jumps over the lazy dog.";

  useEffect(() => {
    // Update highlightedText based on the length of inputValue
    setHighlightedText(practiceText.slice(0, inputValue.length));

    // Check if the typed text matches the practice text
    if (practiceText.startsWith(inputValue)) {
      setCorrect(true);
      // Start the timer if it hasn't already been started
      if (!timerStarted) {
        setTimerStarted(true);
        setStartTime(Date.now());
      }
      // Check if the user has finished typing correctly
      if (inputValue === practiceText) {
        setEndTime(Date.now());
        setTypingTime((endTime - startTime) / 1000); // Calculate typing time in seconds
      }
    } else {
      setCorrect(false);
    }
  }, [inputValue, timerStarted, startTime, endTime]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleStartAgain = () => {
    // Reset all state variables to their initial values
    setText('');
    setInputValue('');
    setHighlightedText('');
    setCorrect(true);
    setTimerStarted(false);
    setStartTime(null);
    setEndTime(null);
    setTypingTime(0);
  };

  return (
    <div>
      <div>
        <p>
          {/* Display the highlighted text */}
          <span style={{ color: correct ? 'black' : 'red' }}>
            {highlightedText}
          </span>
          {/* Display the remaining text */}
          {practiceText.slice(inputValue.length)}
        </p>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Start typing here..."
        />
        {typingTime > 0 && (
          <p>
            Typing time: {typingTime} seconds
          </p>
        )}
        <button onClick={handleStartAgain}>Start Again</button>
      </div>
    </div>
  );
};

export default TextContainer;