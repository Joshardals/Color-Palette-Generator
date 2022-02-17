import React from "react";
import tw from "tailwind-styled-components";
import Color from "./Color";
import useColors from "../../hooks/useColors";


const Colors = () => {
  const data = useColors();

  return (
    <Wrapper>
      {/* <Color color="#ECA400" />
      <Color color="#EAF8BF" />
      <Color color="#006992" />
      <Color color="#27476E" />
      <Color color="#001D4A" /> */}
      {data?.map((res, index) => {
        return <Color key={index} color={`rgb(${res})`} />;
      })}
    </Wrapper>
  );
};

const Wrapper = tw.div`
    flex items-center space-x-4
`;
export default Colors;
