import React, { useState, useEffect, useRef } from "react";

const WordHolder = ({ word }) => {
  const splitWord = word.split(""); // word split into an array
  const lettersNeeded = Array.from(new Set(splitWord)); // which letters exist in the word, no duplicates
  const [lettersRemaining, setLettersRemaining] = useState([]);
  const [lettersPressed, setLettersPressed] = useState([]);

  useEffect(() => {
    setLettersRemaining(lettersNeeded);
  }, lettersNeeded.join(","));
  console.log(`lettersRemaining ${lettersRemaining}`);
  const [wordLetters, setWordLetters] = useState(splitWord);
  // setLettersRemaining(lettersNeeded)

  function removeLetterFromArray(e) {
    console.log(`removingLetter ${e}`);
    let filteredArray = lettersRemaining.filter((item) => item !== e);
    setLettersRemaining([...filteredArray]);
  }

  const handleKeyDown = (e) => {
    console.log(e.key);
    console.log(lettersRemaining);
    return lettersRemaining.includes(e.key)
      ? (console.log("!"), removeLetterFromArray(e.key))
      : console.log("?");
  };

  function keyInputs() {
    return document.addEventListener("keydown", function (e) {
      return (
        lettersPressed.includes(e.key)
          ? null
          : setLettersPressed([...lettersPressed, e.key]),
        lettersRemaining.includes(e.key) ? removeLetterFromArray(e.key) : null
      );
    });
  }
  keyInputs();

  //keyInputs works but is sloppy

  // useEffect(() => {
  //     document.addEventListener('keydown', handleKeyDown)
  //     return () => {
  //         document.removeEventListener('keydown', handleKeyDown);
  //     };
  // },[])

  let allLetters = splitWord.map((letter, i) => {
    // for each letter in the word
    if (!lettersRemaining.includes(letter)) {
      return (
        <div id={i} key={i} className="letterholder">
          {letter}
        </div>
      );
    } else {
      return (
        <div id={i} key={i} className="letterholder">
          _
        </div>
      );
    }
  });
  return (
    <>
      <div className="wordholder">{allLetters}</div>
      <div>letters Pressed= {lettersPressed}</div>
    </>
  );
};

const LanguageGamePage = () => {
  const gameRef = useRef();
  const arrayOfWords = ["book", "spaghetti", "peanuts", "poopoo", "zombie"];
  const randomWord = () => {
    return arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
  };
  const [newWord, setNewWord] = useState(randomWord);

  return (
    <>
      <h1>Game</h1>
      {newWord.length}
      <WordHolder word={newWord} />
      <button onClick={() => setNewWord(randomWord())}>new word </button>
      {/* {newWord} */}
    </>
  );
};

export default LanguageGamePage;
