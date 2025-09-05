export const convertYouTubeUrlToCDN = (url: string): string => {
  if (!url) return '';

  const videoIdMatch = url.match(/(?:\/|=)([a-zA-Z0-9_-]{11})/);

  if (!videoIdMatch) return '';

  const videoId = videoIdMatch[1];

  return `https://play-games.googleusercontent.com/vp/mp4/1280x720/${videoId}.mp4`;
};
