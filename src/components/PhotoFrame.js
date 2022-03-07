import React from "react";

export default function PhotosFrame(props) {

  function convertPhotosToFrames(props) {
    console.log(props)
    const photos = props;
    let photoFrames = null;
    if (photos !== undefined) {
      photoFrames = photos.map((photo) =>
        <img src={photo.path} alt={photo.path}/>
      );
    }
    return photos !== undefined ? (<ul>{photoFrames}</ul>) : (<div>No photos for that spot.</div>)
  }

  return (
    <div className="photos-frame">
      {convertPhotosToFrames(props.photo)}
    </div>
  );
} 