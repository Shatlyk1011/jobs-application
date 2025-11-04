'use client'
import { FC, useState } from 'react';
import { MultiSelect } from '../MultiSelect';
import { FORMAT, LEVEL, LOCATION, PROFESSION } from '../../../data/filters';

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
    <div className="flex flex-wrap w-full items-center gap-3">
      <div className='flex-1'>
        <MultiSelect
          singleLine={true}
          maxCount={0}
          placeholder='Профессия'
          animation={0}
          options={PROFESSION}
          onValueChange={setSelectedProfessions}
          defaultValue={selectedProfessions}
        />
      </div>
      <div className='flex-1'>
        <MultiSelect
          singleLine={true}
          maxCount={0}
          placeholder='Уровень'
          animation={0}
          options={LEVEL}
          onValueChange={setSelectedLevels}
          defaultValue={selectedLevels}
        />
      </div>
      <div className='flex-1'>
        <MultiSelect
          singleLine={true}
          maxCount={0}
          placeholder='Локация'
          animation={0}
          options={LOCATION}
          onValueChange={setSelectedLocation}
          defaultValue={selectedLocation}
        />
      </div>
      <div className='flex-1'>
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
  )
};
export default VacancyFilters
