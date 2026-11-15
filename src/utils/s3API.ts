export const getS3Images = async (): Promise<unknown> => {
  try {
    const response = await fetch('/data/images.json');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching s3 images, err');
    throw new Error('error catching s3 images', { cause: err });
  }
};
