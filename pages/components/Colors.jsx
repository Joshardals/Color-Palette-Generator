import React from "react";
import tw from "tailwind-styled-components";
import Color from "./Color";
import useColors from "../../hooks/useColors";

const Colors = () => {
  const data = useColors();

  return (
    <Wrapper>
      {data?.map((res, index) => {
        return (
          <>
            <Color key={index} color={res.toUpperCase()} />
          </>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = tw.div`
    lg:flex items-center
    grid grid-cols-2 gap-8
    md:grid-cols-3
`;
export default Colors;
