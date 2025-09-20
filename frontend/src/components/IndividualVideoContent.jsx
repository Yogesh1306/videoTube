import styled from "styled-components";
import {
  AddTask,
  Reply,
  ThumbDownOffAlt,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import Comments from "./Comments";
import VideoCard from "./VideoCard"

const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 10px;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  }
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div`
  border: 2px solid;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
`;
const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight:500;
  color: white;
  border:none;
  border-radius:10px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const IndividualVideoContent = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/yIaXoop8gl4?si=SdzDwO-a_Kh02czo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Video1 Title</Title>
        <Details>
          <Info>45,000 views . Sep 19, 2025</Info>
          <Buttons>
            <Button>
              <ThumbUpOffAlt style={{}} /> 1234
            </Button>
            <Button>
              <ThumbDownOffAlt />
            </Button>
            <Button>
              <Reply /> Share
            </Button>
            <Button>
              <AddTask /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <ChannelImage />
            <ChannelDetails>
              <ChannelName>Channel1</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Description>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                minima officia ratione!
              </Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <VideoCard type="sm"/>
      </Recommendation>
    </Container>
    
  );
};

export default IndividualVideoContent;
