import Head from "next/head";
import tw from "tailwind-styled-components";
import ColorContainer from "./components/ColorContainer";
import Generate from "./components/Generate";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorContainer />
      <Generate />
    </Wrapper>
  );
}

const Wrapper = tw.div`
  h-[100vh] w-[100%] bg-light-bg flex flex-col
  items-center justify-center space-y-[3rem] 
  py-[3rem] overflow-x-hidden overflow-y-hidden px-4
`;
