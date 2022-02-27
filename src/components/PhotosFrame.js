import React from "react";

export default function PhotosFrame(props) {

  function convertPhotosToFrames(props) {
    const photos = props.photo;
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