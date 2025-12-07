export const dateConvert = (date: string): string => {
  const dt: Date = new Date(date);
  const now: Date = new Date();
  const diff: number = now.getTime() - dt.getTime();
  // 24 hours
  if (diff < 24 * 60 * 60 * 1000) {
    return "today";
  }
  return "recently";
};

export function isoToDate(isoString: string) {
  const dt = new Date(isoString);
  const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = dt.getUTCDate();
  const month = months[dt.getUTCMonth() + 1];
  const year = dt.getUTCFullYear();
  return `${day} ${month} ${year}`;
}
