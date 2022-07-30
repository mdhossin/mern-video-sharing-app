import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../client";
import { VideoCard } from "../../components";

import { Container, Wrapper } from "./styles";
import axios from "axios";
const Home = ({ type }) => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${BASE_URL}/api/videos/${type}`);

        setVideos(data);
        setErr("");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErr(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        );
      }
    };

    fetchVideos();
  }, [type]);

  return (
    <Container>
      <Wrapper>
        {loading ? (
          <h2>Loading....</h2>
        ) : err ? (
          <h2>{err}</h2>
        ) : (
          videos.map((video, index) => (
            <VideoCard video={video} key={`index-${video._id}`} />
          ))
        )}

        {videos.length < 0 && <h2>Video not found.</h2>}
      </Wrapper>
    </Container>
  );
};

export default Home;
