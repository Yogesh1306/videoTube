import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 10px;
  color: ${({theme}) => theme.text}
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Time = styled.span`
  font-size: 12px;
  font-weight: 400;
  color : ${({theme}) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`font-size: 14px;`;
const Comment = () => {
  return (
    <Container>
      <Avatar src="" />
      <Details>
        <Name>
          John Doe <Time>1 day ago</Time>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          aspernatur quod explicabo cumque at nihil nesciunt architecto libero
          voluptatum possimus excepturi, corrupti soluta perspiciatis magni! Cum
          aliquam itaque beatae doloribus.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
