import React, { createRef, useRef } from 'react';
import styled from 'styled-components';

const VideoList = props => {
  const _videoData = [
    {
      url: 'https://furthermore-cdn.equinox.com/hawaii/videos/water-video.mp4',
      poster:
        'https://furthermore-cdn.equinox.com/hawaii/images/water_home_bg.png',
      name: 'water'
    },
    {
      url: 'https://furthermore-cdn.equinox.com/hawaii/videos/fire-video.mp4',
      poster: 'https://furthermore-cdn.equinox.com/hawaii/images/fire_home.jpg',
      name: 'fire'
    },
    {
      url: 'https://furthermore-cdn.equinox.com/hawaii/videos/air-video.mp4',
      poster: 'https://furthermore-cdn.equinox.com/hawaii/images/air_home.jpg',
      name: 'air'
    },
    {
      url: 'https://furthermore-cdn.equinox.com/hawaii/videos/earth-video.mp4',
      poster:
        'https://furthermore-cdn.equinox.com/hawaii/images/earth_poster.jpg',
      name: 'earth'
    }
  ];
  const videoRefs = useRef(_videoData.map(() => createRef()));
  const playVideo = i => {
    for (let ref in videoRefs.current) {
      videoRefs.current[ref].current.pause();
    }
    videoRefs.current[i].current.play();
  };
  return (
    <div>
      {_videoData.map(({ url, name }, i) => {
        return (
          <VideoContainer key={`video-${i}`}>
            <div>
              <p>Click to play {name} video</p>
              <button className="btn btn-primary" onClick={() => playVideo(i)}>
                Play Me
              </button>
            </div>
            <div>
              <video
                width="320"
                height="240"
                controls
                ref={videoRefs.current[i]}
              >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </VideoContainer>
        );
      })}
    </div>
  );
};

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  justify-content: space-between;
`;

export default VideoList;
