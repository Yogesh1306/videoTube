import styled, { ThemeProvider } from "styled-components";
import Sidebar from "../components/Sidebar";
import { darkTheme, lightTheme } from "../utils/Theme";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Videos from "../components/Videos";

const Container = styled.div`
  display: flex;
  /* border: 3px solid red; */
  position: relative;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div``;

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
        <Navbar />
          <Wrapper>
            <Videos />
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
