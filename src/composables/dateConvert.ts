export const dateConvert = (date: string): string => {
  const dt: Date = new Date(date);
  const now: Date = new Date();
  const diff: number = now.getTime() - dt.getTime();
  if (diff < 24 * 60 * 60 * 1000) {
    return "сегодня";
  }
  return "недавно";
};

export function isoToDate(isoString: string) {
  const dt = new Date(isoString);
  const months = ['', 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const day = dt.getUTCDate();
  const month = months[dt.getUTCMonth() + 1];
  const year = dt.getUTCFullYear();
  return `${day} ${month} ${year}`;
}