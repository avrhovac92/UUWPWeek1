import React from 'react';

const Word = ({ word, matchedLetters }) => {
  let letters = word.split('');
  return (
    <div className="box">
      {letters.map((item, key) => (
        <div key={key} className="guess">
          {matchedLetters.indexOf(item) !== -1 ? item : ''}
        </div>
      ))}
    </div>
  );
};

export default Word;
