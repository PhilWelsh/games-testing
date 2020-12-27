import { useState, useRef } from "react";
import { opChars } from "./opChars";
import styled from "@emotion/styled";

import Flippy, { FrontSide, BackSide } from "react-flippy";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//TODO

// * ADD FLIP ALL BUTTON
// * CASCADE ANIMATIONS FROM FLIP ALL

// * SHUFFLE ALL CARDS

// CASCADE ANIMATIONS TO FLIP ENTER
// transform: rotateY(-90deg) on flippy-cardContainer, remove and setTimeout
// LAZYLOAD

// ADD GAME MODE, ONE BY ONE, SELF EVALUATE WITH TICK OR CROSS
// ADD SWIPE CORRECT/FALSE TO GAME MODE
// SCORE CONTEXT FOR GAME MODE

// ADD GAME MODE, FIND 'RANDOMNAME' FROM AVAILABLE CARDS

// REPLACE IMAGES

// ADD LANGUAGE SWITCH -> CONTEXT

// P4 REMOVE AUTO-DETECT 'SHONA' LANGUAGE

const Tiles = ({ className }) => {
  const flipContainerRef = useRef(null);
  const handleFlipAll = (reveal) => {
    const flippableChildren = flipContainerRef.current.children;
    let timeoutCount = 0;
    for (let i = 0; i < flippableChildren.length; i++) {
      const current = flippableChildren
        .item(i)
        .querySelector(".flippy-cardContainer");
      const currentActive = flippableChildren.item(i).querySelector(".isActive")
        ? true
        : false;
      if (!currentActive === reveal) {
        setTimeout(() => {
          current.click();
        }, timeoutCount * 50);
        timeoutCount += 1;
      }
    }
  };
  const [counter, setCounter] = useState(0);
  function handleReload() {
    setCounter(counter + 1);
  }

  const ShuffledTiles = () => {
    console.log(counter);
    return shuffle(opChars).map((char) => {
      return (
        <StyledTilesTile>
          <Flippy
            flipOnClick={true}
            style={{ height: "100%", borderRadius: 7, overFlow: "hidden" }}
          >
            <FrontSide
              style={{
                backgroundImage: `url(https://res.cloudinary.com/philwelsh/image/upload/v1607661143/projects/onepiece-game/onepiece-card-back_xapfp6.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 0,
              }}
            >
              <span
                style={{
                  lineBreak: "anywhere",
                  padding: 5,
                  background: "#ffffffd9",
                  color: "black",
                  fontWeight: "bold",
                  transform: "rotate(-0)",
                }}
              >
                {char.laugh}
              </span>
            </FrontSide>
            <BackSide
              style={{
                backgroundImage: `url(${char.charImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <span
                style={{
                  padding: 5,
                  background: "#ffffff80",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {char.name}
              </span>
            </BackSide>
          </Flippy>
        </StyledTilesTile>
      );
    });
  };

  return (
    <>
      <button onClick={() => handleFlipAll(true)} label="reveal all">
        Reveal All
      </button>
      <button onClick={() => handleFlipAll(false)} label="hide all">
        Hide All
      </button>
      <button onClick={handleReload} label="shuffle all">
        Shuffle Characters
      </button>
      <ul className={className} ref={flipContainerRef}>
        <ShuffledTiles />
      </ul>
    </>
  );
};

const StyledTiles = styled(Tiles)`
  /*reset*/
  margin: 0;
  padding: 0;
  list-style: none;
  /*start*/
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-column-gap: 10px;
  grid-auto-rows: 150px;
  grid-row-gap: 10px;
  font-size: 20px;
`;
const StyledTilesTile = styled.li`
  /*reset*/
  margin: 0;
  padding: 0;
  list-style: none;
  /*start*/
`;

const OnePieceLaughGame = () => {
  return (
    <>
      <StyledTiles />
    </>
  );
};

export default OnePieceLaughGame;

// Thanks to https://listfist.com/list-of-one-piece-characters-by-laugh as well as the One Piece 'smile' art exhibition at Tokyo Tower for these resources and inspiration, as well as the main man Oda for all the years of One Piece
