import React, { useRef, useEffect } from "react";

const SpotifyPlaylist = ({ link, onClose }) => {
  const playlistRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (playlistRef.current && !playlistRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <iframe
      title="Slime – New music"
      src={`https://open.spotify.com/embed/playlist/${link}`}
      width="350"
      height="380"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
};

export default SpotifyPlaylist;
