export const getFileSize = (file: File) => {
  const sizeBytes = file.size;
  const mb = sizeBytes / 1024 ** 2;

  return mb.toFixed(2);
};

export function nameToSlug(name: string) {
  const [first = "", second = ""] = name.split(" ");
  return `${first.toLowerCase()}-${second.toLowerCase()}`;
}

export function debounce(func: Function, delay: number) {
  let timeoutId: undefined | ReturnType<typeof setTimeout>;

  return function (...args: any) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args);
    }, delay);
  };
}
