import { opChars } from "./opChars";
import styled from "@emotion/styled";

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
        return <StyledTilesTile>{char.laugh}</StyledTilesTile>;
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
  background: white;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-break: anywhere;
`;

const OnePieceLaughGame = () => {
  return <StyledTiles />;
};

export default OnePieceLaughGame;
