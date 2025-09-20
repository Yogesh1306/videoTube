import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { NavLink } from "react-router";
import youtubeLogo from "../assets/logo.png";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
  width: 100%;
`;
const Logo = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;
const Img = styled.img`
  height: 25px;
`;

const Wrapper = styled.div`
  width: 100%;
`;
const Search = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 15px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  outline: none;
`;

const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-right: 10px;
`;
const SignInButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 13px;
  background-color: transparent;
  color: #3ae6ff;
  border: 1px solid #3ae6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <NavLink
          to={"/"}
          style={{ "text-decoration": "none", color: "inherit" }}
        >
          <Logo>
            <Img src={youtubeLogo} />
            videoTube
          </Logo>
        </NavLink>
      </Wrapper>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlined  />
        </Search>
      </Wrapper>
      <SignInContainer>
        <SignInButton>
          <AccountCircleOutlined style={{ cursor: "pointer" }} />
          SIGN IN
        </SignInButton>
      </SignInContainer>
    </Container>
  );
};

export default Navbar;
