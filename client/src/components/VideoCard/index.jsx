import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import {
  Container,
  ImageContainer,
  Image,
  ContentWraper,
  Logo,
  TitleContainer,
  LogoImage,
  Title,
  ViewsContent,
  Name,
  Views,
  Days,
  ViewsContainer,
} from "./styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../client";

const VideoCard = ({
  video: { imgUrl, name, title, views, createdAt, userId, _id },
}) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/users/find/${userId}`);
      setChannel(data);
    };

    fetchChannel();
  }, [userId]);
  return (
    <Link to={`/video/${_id}`}>
      <Container>
        <ImageContainer>
          <Image src={imgUrl} />
          <ContentWraper>
            <Logo>
              <LogoImage src={channel.img} />
            </Logo>
            <TitleContainer>
              <Title>{title}</Title>

              <ViewsContent>
                <Name>{channel.name}</Name>
                <ViewsContainer>
                  <Views>{views} •</Views>
                  <Days>{format(createdAt)}</Days>
                </ViewsContainer>
              </ViewsContent>
            </TitleContainer>
          </ContentWraper>
        </ImageContainer>
      </Container>
    </Link>
  );
};

export default VideoCard;
