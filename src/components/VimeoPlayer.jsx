import React, { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

function VimeoPlayer({ videoId, autoplay }) {
  const playerRef = useRef(null);

  useEffect(() => {
    // Initialize Player with the passed videoId
    const player = new Player(playerRef.current, {
      url: `https://vimeo.com/${videoId}`,
      width: 640,
      height: 360,
      autoplay: autoplay,
      controls: true,
      title: false,
    });

    // Cleanup function to destroy player instance
    return () => {
      player.destroy();
    };
  }, [videoId, autoplay]); // Dependency array updated to reinitialize player on videoId change

  return <div ref={playerRef} className='vimeo-player' />;
}

export default VimeoPlayer;
