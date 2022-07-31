import React, { useEffect, useState } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import { RelatedVideo } from "../../components";
import { videodata } from "../../fakedata";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
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
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../../client";
import axios from "axios";
import { format } from "timeago.js";
import { dislike, fetchSuccess, like } from "../../redux/features/videoSlice";
axios.defaults.withCredentials = true;
const Video = () => {
  const user = useSelector((state) => state.user.user);
  const currentVideo = useSelector((state) => state.video.currentVideo);
  const dispatch = useDispatch();

  console.log(currentVideo, "curr");

  const path = useLocation().pathname.split("/")[2];

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(
          `${BASE_URL}/api/videos/find/${path}`,
          {
            withCredentials: true,
          }
        );
        const channelRes = await axios.get(
          `${BASE_URL}/api/users/find/${videoRes.data.userId}`,
          {
            withCredentials: true,
          }
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [path, dispatch]);

  const handleLike = async () => {
    await axios.put(`${BASE_URL}/api/users/like/${currentVideo._id}`, {
      withCredentials: true,
    });
    dispatch(like(user._id));
  };
  const handleDislike = async () => {
    await axios.put(`${BASE_URL}/api/users/dislike/${currentVideo._id}`, {
      withCredentials: true,
    });
    dispatch(dislike(user._id));
  };

  // const handleSub = async () => {
  //   currentUser.subscribedUsers.includes(channel._id)
  //     ? await axios.put(`/users/unsub/${channel._id}`)
  //     : await axios.put(`/users/sub/${channel._id}`);
  //   dispatch(subscription(channel._id));
  // };
  return (
    <Container>
      {currentVideo && (
        <Wrapper>
          <LeftContent>
            <ContentWrapper>
              <ImageContainer>
                <iframe
                  width="100%"
                  height="480"
                  src={currentVideo?.videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  // allowFullScreen
                ></iframe>
              </ImageContainer>
              <InfoContainer>
                <Title>How to Learn Programming Effectively</Title>
                <Details>
                  <Info>
                    {currentVideo.views} views •{" "}
                    {format(currentVideo.createdAt)}
                  </Info>
                  <Buttons>
                    <Button onClick={handleLike}>
                      {currentVideo.likes?.includes(user?._id) ? (
                        <ThumbUpIcon />
                      ) : (
                        <ThumbUpOutlinedIcon />
                      )}{" "}
                      {currentVideo.likes?.length} Like
                    </Button>
                    <Button onClick={handleDislike}>
                      {currentVideo.dislikes?.includes(user?._id) ? (
                        <ThumbDownIcon />
                      ) : (
                        <ThumbDownOffAltOutlinedIcon />
                      )}{" "}
                      Dislike
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Doloribus laborum delectus unde quaerat dolore
                        culpa sit aliquam at. Vitae facere ipsum totam ratione
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
      )}
    </Container>
  );
};

export default Video;
