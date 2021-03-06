import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video)=>{
    return <VideoListItem
      className="video-list"
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
  });

  return (
    <ul className="col-md-6 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
