import React from "react";
import tw from "tailwind-styled-components";
import Color from "./Color";

const Colors = () => {
  return (
    <Wrapper>
      <Color color="#ECA400" />
      <Color color="#EAF8BF"/>
      <Color color="#006992"/>
      <Color color="#27476E"/>
      <Color color="#001D4A"/>
    </Wrapper>
  );
};

const Wrapper = tw.div`
    flex items-center space-x-4
`;
export default Colors;
