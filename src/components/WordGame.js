import { useState, useEffect, useRef } from "react";

// DICTIONARY
const dictionary = ["word", "player", "test", "english", "jupiter", "potato"];

// PICK AND SPLIT NEW WORD
function newWord() {
  return dictionary[Math.floor(Math.random() * dictionary.length)].split("");
}

// LETTERS UNTRIED
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// INCORRECT LETTERS TRIED
// count
// which

// UI OF WORD

const WordGame = () => {
  const [lettersTried, setLettersTried] = useState([""]);
  const [word, setWord] = useState(newWord);

  const lettersTriedRef = useRef(lettersTried);

  // KEY INPUT
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  // KEY INPUT LISTENER
  function handleKeyDown(event) {
    if (
      !lettersTriedRef.current.includes(event.key) &&
      alphabet.includes(event.key)
    ) {
      return setLettersTried((prevState) => prevState.concat(event.key));
    }
  }

  useEffect(() => {
    return (lettersTriedRef.current = lettersTried), lettersTried;
  });

  const WordList = () => {
    return (
      <ul>
        {dictionary.map((word) => {
          return <li>{word}</li>;
        })}
      </ul>
    );
  };

  const WordEntry = () => {
    return <input type="text" onSubmit={console.log("gf")} />;
  };

  //letterholder
  const LetterHolder = ({ letter }) => {
    const letterVisible = lettersTried.includes(letter) ? true : false;
    return (
      <div
        style={{
          background: "white",
          color: "black",
          display: "inline-block",
          border: "2px solid black",
          textTransform: "uppercase",
          fontWeight: "bold",
          padding: 20,
          margin: 5,
        }}
      >
        {letterVisible && letter}
      </div>
    );
  };

  //wordholder
  const WordHolder = ({ word }) => {
    return word.map((letter) => <LetterHolder letter={letter} />);
  };

  useEffect(() => {
    setLettersTried([]);
  }, word);

  return (
    <>
      <div>
        <WordHolder word={word} />
      </div>
      <button onClick={() => setWord(newWord)}>NEW WORD</button>
      <WordList />
      <WordEntry />
    </>
  );
};

export default WordGame;
