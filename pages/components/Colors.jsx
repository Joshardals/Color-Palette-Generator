import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import Color from "./Color";
import useColors from "../../hooks/useColors";
import CopyToClipboard from "react-copy-to-clipboard";

const Colors = () => {
  const data = useColors();
  // const colors = data?.map((res, index) => {
  //   return res
  // }); 
  useEffect(() => {
    console.log('hello');
  }, [data]); 
  return (
    <Wrapper>
      {data?.map((res, index) => {
        return (
          <Color key={index} color={res.toUpperCase()} />
        )
      })}
    </Wrapper>
  );
};

const Wrapper = tw.div`
    lg:flex items-center
    grid grid-cols-2 gap-4
`;
export default Colors;
