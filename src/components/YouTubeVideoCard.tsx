import { useState } from 'react';

interface YouTubeVideoCardProps {
  videoUrl: string;
  title: string;
  thumbnailUrl?: string;
}

const YouTubeVideoCard = ({ videoUrl, title, thumbnailUrl }: YouTubeVideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Function to extract YouTube ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);
  
  if (!videoId) {
    console.error('Invalid YouTube URL');
    return null;
  }

  const displayThumbnail = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="bg-white rounded-lg  overflow-hidden transition-all duration-300 hover:shadow-xl h-full">
      <div className="relative aspect-video">
        {!isPlaying ? (
          <>
            <img 
              src={displayThumbnail} 
              alt={title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <button
                onClick={() => setIsPlaying(true)}
                className="p-4 rounded-full bg-red-600 hover:bg-red-700 transition-colors duration-200"
                aria-label="Play video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        {/* <p className="text-gray-600">{description}</p> */}
      </div>
    </div>
  );
};

export default YouTubeVideoCard;