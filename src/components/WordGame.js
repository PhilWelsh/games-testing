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

// const getGold = async () => {

// };

//Check for if game is won
const gameWon = (gold, ...rest) => {
  console.log(gold);
  // fetch("url","PUT")
};

// DISPLAY FOR GAMES WON, USING FETCHED DATA
const FetchButton = ({ gold }) => {
  return (
    <button
      onClick={() => {
        console.log(gold);
      }}
    >
      {gold}
    </button>
  );
};

// MOCK PLAYER ID
const id = 2;
const WordGame = () => {
  const [gold, setGold] = useState();
  const [lettersTried, setLettersTried] = useState([""]);
  const [word, setWord] = useState(newWord);

  // if (lettersTried contains all letters in word) {endgame()}

  // RETRIEVE SCORE FROM DB AT START
  useEffect(
    () =>
      fetch(
        `http://localhost:5000/books/` + id,
        // "https://testing-phils-api.herokuapp.com/books/",
        { headers: { "Content-Type": "application/json" } },
        "GET"
      )
        .then((response) => response.json())
        .then((result) => {
          setGold(result[0].author);
        })
        .catch((error) => console.log(error)),
    []
  );

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
    // IF VALID LETTER AND UNTRIED ADD TO LETTERS TRIED
    if (
      !lettersTriedRef.current.includes(event.key) &&
      alphabet.includes(event.key)
    ) {
      setLettersTried((prevState) => prevState.concat(event.key));
    }
    let lettersArray = word.map((l) => l);
    if (
      lettersArray.every((l) =>
        [...lettersTriedRef.current, event.key].includes(l)
      )
    ) {
      // console.log(typeof gold);
      gameWon(gold);
    } else {
      console.log(lettersArray, "...", [...lettersTriedRef.current, event.key]);
    }
    // word.map(letter=> letter.every(v => arr.includes(v))
    // if lettersTried
    return;
  }

  useEffect(() => {
    return (lettersTriedRef.current = lettersTried), lettersTried;
  });

  // ALL WORDS AVAILABLE IN DICTIONARY
  const WordList = () => {
    return (
      <ul>
        {dictionary.map((word, idx) => {
          return <li key={idx}>{word}</li>;
        })}
      </ul>
    );
  };

  // TBA FUNCTIONALITY TO ADD WORD TO DICTIONARY
  const WordEntry = () => {
    return <input type="text" onSubmit={console.log("gf")} />;
  };

  // LETTER, HIDDEN OR REVEALED
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

  // CURRENT WORD CONTAINING LETTERHOLDERS
  const WordHolder = ({ word }) => {
    return word.map((letter, idx) => (
      <LetterHolder key={idx} letter={letter} />
    ));
  };

  useEffect(() => {
    setLettersTried([]);
  }, [word]);

  return (
    <>
      <FetchButton gold={gold} />
      <div>
        <WordHolder word={word} />
      </div>
      <button onClick={() => setWord(newWord)}>NEW WORD</button>
      <WordList />
      {/* <WordEntry /> */}
    </>
  );
};

export default WordGame;
