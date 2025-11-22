export const getFileSize = (file: File) => {
  const sizeBytes = file.size;
  const mb = sizeBytes / 1024 ** 2;

  return mb.toFixed(2);
};

export function nameToSlug(name: string) {
  const [first, second] = name.split(" ");
  return `${first}-${second}`;
}
