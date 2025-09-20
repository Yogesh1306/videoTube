import styled from "styled-components"
import youtubeLogo from "../assets/logo.png"
import { Home, Explore, Subscriptions, VideoLibraryOutlined, HistoryOutlined, LibraryMusicOutlined, SportsBasketballOutlined, SportsEsportsOutlined, MovieOutlined, ArticleOutlined, FlagOutlined, LiveTvOutlined, SettingsOutlined, HelpOutlineOutlined, SettingsBrightnessOutlined, AccountCircleOutlined } from '@mui/icons-material';
import { NavLink } from "react-router";


const Container = styled.div`
  flex: 1.1;
  background-color: ${({theme})=> theme.bgLighter};
  height: 100vh;
  color: ${({theme})=> theme.text};
  font-size: 14px;
  position: sticky;
  top:0;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  }
  /* z-index: 1; */
`
const Wrapper = styled.div`
  padding: 18px 26px;
  
`
// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   font-weight: bold;
//   margin-bottom: 25px;
//   font-size: 16px;
//   cursor: pointer;
// `
// const Img = styled.img`
//   height: 25px;
// `
const Item = styled.div`
  display: flex;
  align-items: center;
  
  gap: 20px;  
  padding: 10px 10px;
  cursor: pointer;
  &:hover{
    background-color:${({theme})=> theme.soft} ;
    border-radius: 5px;
  }
`
const Hr = styled.hr`
  border: 0.5px solid ${({theme})=> theme.soft};
  margin: 10px 0px;
`
const Login = styled.div``;
const LoginButton = styled.button`
display: flex;
align-items: center;
gap: 5px;
padding: 5px 13px;
background-color: transparent;
color: #3ae6ff;
border: 1px solid #3ae6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
`
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin: 12px 0px;
`
const Sidebar = ({darkMode, setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
        {/* <NavLink to={"/"} style={{"text-decoration":"none","color":"inherit"}}>
        <Logo>
          <Img src={youtubeLogo} />
          videoTube
        </Logo>
        </NavLink> */}
          
        <Item>
          <Home />Home
        </Item>
        <Item>
          <Explore />Explore
        </Item>
        <Item>
          <Subscriptions />Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlined />Library
        </Item>
        <Item>
          <HistoryOutlined />History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <NavLink to={"/signin"} style={{"text-decoration":"none"}}>
          <LoginButton><AccountCircleOutlined/>SIGN IN</LoginButton>
          </NavLink>
        </Login>
        <Hr />
        <Title>BEST OF VIDEOTUBE</Title>
        <Item>
          <LibraryMusicOutlined />Music
        </Item>
        <Item>
          <SportsBasketballOutlined />Sports
        </Item>
        <Item>
          <SportsEsportsOutlined />Gaming
        </Item>
        <Item>
          <MovieOutlined />Movies
        </Item>
        <Item>
          <ArticleOutlined />News
        </Item>
        <Item>
          <LiveTvOutlined />Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlined />Settings
        </Item>
        <Item>
          <FlagOutlined />Report
        </Item>
        <Item>
          <HelpOutlineOutlined />Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlined />{darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Sidebar
