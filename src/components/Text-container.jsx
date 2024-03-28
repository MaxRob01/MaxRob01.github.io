import React, { useState, useEffect } from 'react';

const TextContainer = () => {
  const [text, setText] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [correct, setCorrect] = useState(true);
  const [timerStarted, setTimerStarted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [typingTime, setTypingTime] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Added to keep track of the current text index

  const practiceText = [
    "The quick brown fox jumps over the lazy dog.",
    "All their equipment and instruments are alive.",
    "A watched pot never boils.",
    "Hummingbirds are the only animals that can fly backwards."
  ];

  // Function to get the current text
  const getCurrentText = () => practiceText[currentIndex];

  useEffect(() => {
    let currentText = getCurrentText();
    setHighlightedText(currentText.slice(0, inputValue.length));

    if (currentText.startsWith(inputValue)) {
      setCorrect(true);
      if (!timerStarted) {
        setTimerStarted(true);
        setStartTime(Date.now());
      }
      if (inputValue === currentText) {
        setEndTime(Date.now());
        setTypingTime((endTime - startTime) / 1000);
        // Optionally, move to next text here or prompt the user to do so
      }
    } else {
      setCorrect(false);
    }
  }, [inputValue, timerStarted, startTime, endTime, currentIndex]); // Added currentIndex as a dependency

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleStartAgain = () => {
    setText('');
    setInputValue('');
    setHighlightedText('');
    setCorrect(true);
    setTimerStarted(false);
    setStartTime(null);
    setEndTime(null);
    setTypingTime(0);
    // Optionally reset the currentIndex or move to the next text
    // For cycling through texts:
    setCurrentIndex((currentIndex + 1) % practiceText.length);
  };

  return (
    <div>
      <div>
        <p>
          <span style={{ color: correct ? 'black' : 'red' }}>
            {highlightedText}
          </span>
          {getCurrentText().slice(inputValue.length)}
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
