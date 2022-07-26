import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import { RelatedVideo } from "../../components";
import { videodata } from "../../fakedata";
import {
  Container,
  Wrapper,
  LeftContent,
  RightContent,
  ContentWrapper,
  ImageContainer,
  Heading,
  Content,
  InfoContainer,
  Title,
  Details,
  Info,
  Buttons,
  Button,
  Hr,
  Channel,
  ChannelInfo,
  Image,
  ChannelDetail,
  ChannelName,
  ChannelCounter,
  Description,
  Subscribe,
} from "./styles";
import Comments from "../../components/Comments";

const Video = () => {
  return (
    <Container>
      <Wrapper>
        <LeftContent>
          <ContentWrapper>
            <ImageContainer>
              <iframe
                width="100%"
                height="480"
                src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </ImageContainer>
            <InfoContainer>
              <Title>How to Learn Programming Effectively</Title>
              <Details>
                <Info>7,948,154 views • Jun 22, 2022</Info>
                <Buttons>
                  <Button>
                    <ThumbUpOutlinedIcon /> 123
                  </Button>
                  <Button>
                    <ThumbDownOffAltOutlinedIcon /> Dislike
                  </Button>
                  <Button>
                    <ReplyOutlinedIcon /> Share
                  </Button>
                  <Button>
                    <AddTaskOutlinedIcon /> Save
                  </Button>
                </Buttons>
              </Details>
              <Hr />
              <Channel>
                <ChannelInfo>
                  <Image src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
                  <ChannelDetail>
                    <ChannelName>Lama Dev</ChannelName>
                    <ChannelCounter>200K subscribers</ChannelCounter>
                    <Description>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Doloribus laborum delectus unde quaerat dolore culpa sit
                      aliquam at. Vitae facere ipsum totam ratione
                      exercitationem. Suscipit animi accusantium dolores ipsam
                      ut.
                    </Description>
                  </ChannelDetail>
                </ChannelInfo>
                <Subscribe>SUBSCRIBE</Subscribe>
              </Channel>
              <Hr />
              <Comments />
            </InfoContainer>
          </ContentWrapper>
        </LeftContent>
        <RightContent>
          <Heading>Related Videos</Heading>
          <Content>
            {videodata.map((video, index) => (
              <RelatedVideo video={video} key={index} />
            ))}
          </Content>
        </RightContent>
      </Wrapper>
    </Container>
  );
};

export default Video;
