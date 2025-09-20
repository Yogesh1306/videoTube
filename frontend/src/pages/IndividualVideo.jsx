import styled, { ThemeProvider } from "styled-components"
import Sidebar from '../components/Sidebar'
import { darkTheme, lightTheme } from '../utils/Theme'
import { useState } from 'react'
import Navbar from "../components/Navbar"
import IndividualVideoContent from "../components/IndividualVideoContent"

const Container = styled.div`
  
    display: flex;
`
const Main = styled.div`
  flex: 7;
  background-color: ${({theme})=> theme.bg};
`
const Wrapper = styled.div``



const IndividualVideo = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Main>
          <Navbar/>
          <Wrapper>
            <IndividualVideoContent/>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default IndividualVideo



