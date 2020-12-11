import React from "react";
import styled from "@emotion/styled";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled("div")`
  width: 1000px;
  max-width: calc(100% - 20px);
  margin: auto;
  height: 100vh;
`;

export default Container;
