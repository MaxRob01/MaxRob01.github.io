import React, { useState, useEffect } from 'react';

const TextContainer = () => {
  const [text, setText] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [correct, setCorrect] = useState(true); // Assuming the initial text is correct


  const practiceText = "React has been designed from the start for gradual adoption, and you can use as little or as much React as you need";

  useEffect(() => {

    setHighlightedText(practiceText.slice(0, inputValue.length));


    if (practiceText.startsWith(inputValue)) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Typing Speed App</h1>
      <div>
        <p>
          <span style={{ color: correct ? 'black' : 'red' }}>
            {highlightedText}
          </span>
          {practiceText.slice(inputValue.length)}
        </p>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Start typing here..."
        />
      </div>
    </div>
  );
};

export default TextContainer;