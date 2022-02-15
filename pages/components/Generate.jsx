import React from "react";
import tw from "tailwind-styled-components";

const Generate = () => {
  return (
    <Wrapper>
      <GenerateButton>Generate palette</GenerateButton>
      <SomeContent>
        Or just press the "Spacebar" to generate new palettes.
      </SomeContent>
      <AnotherContent>
        Click to copy individual color . Press "C" to copy palette
      </AnotherContent>
    </Wrapper>
  );
};

const Wrapper = tw.div`
    flex items-center justify-center flex-col
`;
const GenerateButton = tw.button`
    bg-[#7e6cca] px-[6rem] py-3 rounded-md text-white text-sm outline-none mb-3
`;
const SomeContent = tw.div`
    text-sm text-[#5e6473] mb-[3rem]
`;
const AnotherContent = tw.div`
    text-sm bg-white rounded-full p-2 text-[#5c606e]
`;
export default Generate;
