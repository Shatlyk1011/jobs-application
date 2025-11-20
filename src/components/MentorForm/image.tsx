import { ChangeEvent, FC, RefObject, useRef } from 'react';
import { getFileSize } from '@/composables/getFileSize';
import { CheckIcon, Paperclip } from 'lucide-react';
import ErrorMsg from '../ui/ErrorMsg';

interface Props {
  image?: File | null
  handleFile: (e: ChangeEvent<HTMLInputElement>) => void
  errorMsg?: string
};

const ImageSelect:FC<Props> = ({ image, handleFile, errorMsg }) => {
  const imageRef = useRef<HTMLInputElement | null>(null);

return (
<>
  <div className="mb-6 inline-block text-sm font-medium">
    <span className="mb-2 inline-block">Фотография для профиля ({"<"} 1 mb)</span>

    <div className="flex items-center gap-4">
      <button
        onClick={() => imageRef.current?.click()}
        type="button"
        className="bg-input/30 border-input flex h-[41px] max-w-max items-center justify-center gap-2 rounded-md border py-1 pr-4 pl-3 text-[14px] transition focus-within:ring-1 focus-within:ring-white/50 focus-within:outline-none hover:bg-white/10"
      >
        {image ? <CheckIcon className="h-4 w-4" /> : <Paperclip className="h-4 w-4" />}
        <span>{image ? "Выбрано" : "Выберите фото"}</span>
      </button>

      {image && (
        <div className="-tracking-one flex flex-col text-[12px]">
          
          <p title={image.name} className="line-clamp-1">
            <span className="opacity-80">Название:</span> {image.name}
          </p>
          <p>
            <span className="opacity-80">Размер:</span> {getFileSize(image)} мб
          </p>
        </div>
      )}
    </div>
      {}
      <ErrorMsg errorMsg={errorMsg}/>
  </div>

  <input
    ref={imageRef}
    onChange={handleFile}
    type="file"
    accept=".jpg,.png,.webp"
    id="image"
    tabIndex={-1}
    className="sr-only absolute left-[-999px] z-[-100]"
  />
</>
)
};
export default ImageSelect