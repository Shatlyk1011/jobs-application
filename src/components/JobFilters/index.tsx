'use client'
import { FC, useState } from 'react';
import { MultiSelect } from '../MultiSelect';
import { FORMAT, LEVEL, LOCATION, PROFESSION } from '../../../data/filters';
import { XIcon } from 'lucide-react';

interface Props {};

const allFilters: Record<string, string> = [...FORMAT, ...LEVEL, ...LOCATION, ...PROFESSION].reduce(
  (acc, { value, label }) => {
    acc[value] = label;
    return acc;
  },
  {} as Record<string, string>
);

console.log('allFilters', allFilters);

const VacancyFilters:FC<Props> = () => {
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedFormat, setSelectedFormat] = useState<string[]>([]);

  const selectedOptions = [...selectedProfessions, ...selectedLevels, ...selectedLocation, ...selectedFormat] 

  return (
    <div className="w-full max-h-max">
      <div className='flex items-center gap-10 w-full'>
        <h2 className="self-center text-nowrap text-2xl -tracking-two font-semibold">Вакансии: <span className='opacity-75'>662</span></h2>
        <div className="grid grid-cols-4 w-full gap-3">
          <MultiSelect
            singleLine={true}
            maxCount={0}
            placeholder='Профессия'
            animation={0}
            options={PROFESSION}
            onValueChange={setSelectedProfessions}
            defaultValue={selectedProfessions}
          />
          <MultiSelect
            singleLine={true}
            maxCount={0}
            placeholder='Уровень'
            animation={0}
            options={LEVEL}
            onValueChange={setSelectedLevels}
            defaultValue={selectedLevels}
          />
          <MultiSelect
            singleLine={true}
            maxCount={0}
            placeholder='Локация'
            animation={0}
            options={LOCATION}
            onValueChange={setSelectedLocation}
            defaultValue={selectedLocation}
          />
          <MultiSelect
            singleLine={true}
            maxCount={0}
            placeholder='Формат'
            animation={0}
            options={FORMAT}
            onValueChange={setSelectedFormat}
            defaultValue={selectedFormat}
          />
        </div>
      </div>
      {/* all selected filters */}
      <ul className='flex flex-wrap gap-3 mt-5'>
        {selectedOptions.map((o) => (
          <li className='text-sm font-medium px-3 pt-2 pb-1.5 flex items-center gap-1 bg-secondary-foreground text-secondary rounded-full ' key={o}>
            <span className='leading-[100%] mb-0.5 text-nowrap'>{allFilters[o]}</span>
            <button className='leading-0'><XIcon className='text-inherit opacity-80 hover:opacity-100 w-3 h-3' /></button>
          </li>
        ))}
      </ul>
    </div>
  )
};
export default VacancyFilters
