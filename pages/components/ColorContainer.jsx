import { useEffect } from "react";
import tw from "tailwind-styled-components";
import Colors from "./Colors";
import useKey from "../../hooks/useKey";

const ColorContainer = () => {
  const data = useKey();
  console.log(data);
  return (
    <Wrapper>
      <AnotherContent>Color #006992 copied to your clipboard</AnotherContent>
      <Title>Color palette generator</Title>
      <Colors />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  space-y-[3rem] flex flex-col items-center
`;
const AnotherContent = tw.div`
    text-sm bg-white rounded-full py-2 px-[2rem] text-white bg-[#0c1226] 
    text-[#c2c3ca] 
`;
const Title = tw.div`
    text-2xl font-semibold text-dark-blue text-center
`;
export default ColorContainer;
