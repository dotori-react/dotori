import { useState } from 'react';

import { cn, getFileItemsInfo } from 'dotori-utils';

import { Input } from '@/components';

const FileInput = ({ className, placeholder: defaultPlaceholder, multiple, accept, onChange }: FileInputProps) => {
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);
  const [isDragEntered, setIsDragEntered] = useState(false);
  const mimeArray = [accept ?? []].flat();

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    fileUpload(e.target.files);
  };

  const preventDefaults: React.DragEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const fileUpload = (fileList: FileList | null) => {
    const files = Object.values(fileList ?? {});
    const newPlaceholder = files.map(file => file.name).join(', ');
    const isFileTypeAllow = files.every(file => mimeArray.length === 0 || mimeArray.includes(file.type));

    if (!isFileTypeAllow) {
      setPlaceholder(defaultPlaceholder);
      setIsDragEntered(false);
      return;
    }

    if (onChange) onChange(files);
    setPlaceholder(newPlaceholder);
  };

  const handleDragOver: React.DragEventHandler<HTMLInputElement> = e => {
    preventDefaults(e);
  };

  const handleDragEnter: React.DragEventHandler<HTMLInputElement> = e => {
    if (isDragEntered) return;
    preventDefaults(e);

    const fileInfos = getFileItemsInfo(e.dataTransfer.items);
    const isFileTypeAllow = fileInfos.every(fileInfo => mimeArray.length === 0 || mimeArray.includes(fileInfo.type));

    if (!isFileTypeAllow) {
      setIsDragEntered(false);
      return;
    }

    setIsDragEntered(true);
  };

  const handleDragLeave: React.DragEventHandler<HTMLInputElement> = e => {
    if (e.currentTarget.contains(e.relatedTarget as HTMLElement)) return;
    preventDefaults(e);

    setIsDragEntered(false);
  };

  const handleDrop: React.DragEventHandler<HTMLInputElement> = e => {
    preventDefaults(e);

    fileUpload(e.dataTransfer.files);
  };

  return (
    <div
      onChange={handleFileInputChange}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}>
      <Input
        accept={accept?.flat().join(',')}
        className={fileInputStyle({ className })}
        defaultFocused={isDragEntered}
        multiple={multiple}
        placeholder={placeholder}
        type="file"
      />
    </div>
  );
};

interface FileInputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'accept'> {
  onChange?: (files: File[]) => void;
  accept?: string[];
}

const fileInputStyle = cn('cursor-pointer text-gray-400');

// const fileTypeMap = {
//   pdf: '.pdf',
//   png: '.png',
//   jpg: '.jpg',
//   xlsx: '.xlsx',
//   xls: '.xls',
//   csv: '.csv',
//   get excel() {
//     return [this.xlsx, this.xls, this.csv];
//   },
//   get image() {
//     return [this.jpg, this.png];
//   },
// };

export default FileInput;
