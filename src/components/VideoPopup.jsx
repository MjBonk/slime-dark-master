import React from 'react';
import VimeoPlayer from './VimeoPlayer';
import CloseCursor from '../assets/close.png';

const VideoPopup = ({ onClose, videoId }) => {

  return (
    <div
      className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90 animate-fadeIn'
      style={{ cursor: `url(${CloseCursor}), auto` }}
      onClick={onClose}
    >
      <div className='relative'>
        {/* Close button */}
        <div
          className='relative top-4 right-4 cursor-pointer z-50 text-white animate-fadeInVideoPlaceholder'
          onClick={onClose}
        >
          X
        </div>

        {/* VimeoPlayer component */}
        <div className='w-full h-full flex items-center justify-center bg-accent animate-fadeInVideoPlaceholder aspect-video'>
          <VimeoPlayer videoId={videoId} className="animate-fadeInVideoPlaceholder" />
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
