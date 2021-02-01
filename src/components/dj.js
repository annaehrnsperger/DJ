import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DJ = () => {
  const [data, setData] = useState(null);
  const [height, setHeight] = useState(null);

  const image = data?.images[0].url;
  const artist = data?.tracks.items[0].track.artists[0].name;
  const album = data?.tracks.items[0].track.album.name;

  useEffect(() => {
    const fetchData = async () => {
      const authResponse = await fetch(
        'https://accounts.spotify.com/api/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `grant_type=client_credentials&client_id=${process.env.GATSBY_SPOTIFY_CLIENT_ID}&client_secret=${process.env.GATSBY_SPOTIFY_SECRET}`,
        }
      );
      const authData = await authResponse.json();

      const playlistResponse = await fetch(
        'https://api.spotify.com/v1/playlists/5LfHHdQiBodtePB8CyovgW',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${authData.access_token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const playlistData = await playlistResponse.json();

      setData(playlistData);
    };

    fetchData().catch((error) => console.error(error));

    setHeight(typeof window !== 'undefined' && window.innerHeight);
  }, []);

  return (
    <StyledDJ className="dark">
      <div className="text spacing-inner">
        <p>{artist}</p>
        <p>{album}</p>
      </div>
      <div className="vinyl-wrapper" style={{ height }}>
        <motion.div
          className="vinyl"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        >
          <div className="bg" />
          <div className="img-wrapper">
            <img src={image} alt="Cover" />
          </div>
          <div className="inner">
            <div className="dot" />
          </div>
        </motion.div>
      </div>
    </StyledDJ>
  );
};

const StyledDJ = styled.div`
  .text {
    position: absolute;
    bottom: 0;
  }

  .vinyl-wrapper {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .vinyl {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    .bg {
      width: 75vw;
      height: 75vw;
      background: black;
      border-radius: 50%;
      position: relative;
      display: flex;
      justify-content: center;
    }

    .img-wrapper,
    .inner {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 22vw;
      height: 22vw;
      clip-path: circle(50% at 50% 50%);
    }

    .dot {
      width: 1.4vw;
      height: 1.4vw;
      background: var(--bg-color);
      border-radius: 50%;
    }
  }

  @media (min-width: 1024px) {
    .vinyl {
      .bg {
        width: 45vw;
        height: 45vw;
      }

      img {
        width: 14vw;
        height: 14vw;
      }

      .dot {
        width: 1vw;
        height: 1vw;
      }
    }
  }
`;

export default DJ;
