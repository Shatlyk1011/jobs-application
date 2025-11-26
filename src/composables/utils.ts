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

  export const copyToClipboard = async (text:string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };