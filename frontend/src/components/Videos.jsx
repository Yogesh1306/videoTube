import styled from "styled-components"
import VideoCard from "./VideoCard"
import { NavLink } from "react-router"

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`
const Videos = () => {
  return (
    <Container>
      <NavLink to={"/video/1"} style={{"text-decoration": "none"}}>
        <VideoCard/>
      </NavLink>
      <NavLink to={"/video/1"} style={{"text-decoration": "none"}}>
        <VideoCard/>
      </NavLink>
    </Container>
  )
}

export default Videos
