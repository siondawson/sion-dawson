const videos = require("./src/_data/videos.json");

module.exports = function () {
  console.log("Generating individual video watch pages...");
  
  return videos.map(video => ({
    permalink: `/videos/${video.id}-${video.slug}/`, // Dynamic URL
    data: {
      layout: "video", // Use video.html layout in _includes
      video: video, // Pass video data to the layout
    },
    content: "This is a placeholder",

  }));
};
