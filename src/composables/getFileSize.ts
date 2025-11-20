export const getFileSize = (file: File) => {
  const sizeBytes = file.size;
  const mb = sizeBytes / 1024 ** 2;

  return mb.toFixed(2);
};
