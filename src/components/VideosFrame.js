import React from "react";

export default function VideosFrame(props) {

  function convertVideoToFrames(props) {
    const videos = props;
    let videoFrames = null;
    if (videos !== undefined) {
      videoFrames = videos.map((video) =>
        <iframe
          key={video.id}
          width="480"
          height="360"
          src={`https://www.youtube.com/embed/${video.path}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      );
    }
    return videos !== undefined ? (<ul>{videoFrames}</ul>) : (<div>No videos for that spot.</div>)
  }

  return (
    <div className="video-responsive">
      {convertVideoToFrames(props.video)}
    </div>
  );
} 