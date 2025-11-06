const dateConvert = (date: string): string => {
  
  const dt: Date = new Date(date);
  const now: Date = new Date();
  const diff: number = now.getTime() - dt.getTime();
  if (diff < 24 * 60 * 60 * 1000) {
    return "сегодня";
  }
  return "недавно";
}

export default dateConvert;