export const setFallbackImage = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const target = event.target as HTMLImageElement;

  target.id = '/assets/images/no-image.webp';
  target.srcset = '/assets/images/no-image.webp';
};

export const getImageDimensions = async (images: string[]) => {
  const dimensions: Array<{ url: string; height: number; width: number }> = await Promise.all(
    images.map(async url => {
      return new Promise(resolve => {
        const image = new Image();

        image.src = url;
        image.onload = () => {
          resolve({ url, width: image.width, height: image.height });
        };
        image.onerror = () => {
          resolve({ url, width: 0, height: 0 });
        };
      });
    }),
  );

  return dimensions;
};
