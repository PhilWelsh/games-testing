import { opChars } from "./opChars";
import styled from "@emotion/styled";

import Flippy, { FrontSide, BackSide } from "react-flippy";

// let SomeComponent = props => {
//   return (
//     <div
//       css={{
//         color: 'hotpink'
//       }}
//       {...props}
//     />
//   )
// }

// on reveal forEach change each tile's properties with timeout

const Tiles = ({ className }) => {
  return (
    <ul className={className}>
      {" "}
      {opChars.map((char) => {
        return (
          <StyledTilesTile>
            <Flippy
              flipOnHover={false}
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
      })}
    </ul>
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
  return <StyledTiles />;
};

export default OnePieceLaughGame;
