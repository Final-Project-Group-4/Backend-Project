import React from "react";
import "./_MainDown.scss";

const YouTubeEmbed = ({ embedId }) => (
  <iframe
    width="853"
    height="400"
    src={`https://www.youtube.com/embed/${embedId}`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope;picture-in-picture"
    allowFullScreen
    title="Embed Youtube Video"
  />
);

export default YouTubeEmbed;
