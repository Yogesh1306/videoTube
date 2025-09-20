import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => (props.type !== "sm" && "25vw")};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "")};
  border-radius: 10px;
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "100px" : "250px")};
  background-color: #999;
  flex:1;
`;
const TextContainer = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  padding: 0px 5px;
  gap: 12px;
  flex: 1;
`;
const ProfilePic = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;
const VideoInfoContainer = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
const VideoCard = ({ type }) => {
  return (
    <Container type={type}>
      <Image
        type={type}
        src={
          "https://images.unsplash.com/photo-1757502399162-2ce03568bd0e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <TextContainer type={type}>
        <ProfilePic
          type={type}
          src={"https://randomuser.me/api/portraits/men/75.jpg"}
        />
        <VideoInfoContainer>
          <Title>Test Video</Title>
          <ChannelName>Channel1</ChannelName>
          <Info>660,666 views . 1 day ago</Info>
        </VideoInfoContainer>
      </TextContainer>
    </Container>
  );
};

export default VideoCard;
