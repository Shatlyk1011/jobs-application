'use client'
import { FC } from 'react';
import { useTheme } from 'next-themes';

interface Props {};

const ImageSample:FC<Props> = () => {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === 'dark'

return (
  <figure className="relative w-full my-6" title="Пример карточки с ментором">
    <img loading="lazy" src={`/images/mentor-card-${isDark ? "sample" : "sample-light"}.webp`} alt="пример карточки с ментором" />
    <span className="text-[12px] font-semibold opacity-30 absolute top-4 right-4">Демо</span>
  </figure>
)
};
export default ImageSample