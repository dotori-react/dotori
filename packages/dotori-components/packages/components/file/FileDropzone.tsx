import { useState } from 'react';

import { cn, getFileItemsInfo } from 'dotori-utils';

import { Paper, PaperProps, Polymorphic } from '@dotori-components/components';

import { FileDropzoneProvider } from './FileDropzone.context';
import { FileDropzoneAllow, FileDropzoneDeny, FileDropzoneIdle } from './FileDropzoneStatus';

const FileDropzone = ({
  onUpload,
  accept,
  className,
  children,
  multiple = false,
  renderFileDropzone,
  ...paperProps
}: FileDropzoneProps) => {
  const [fileDropzoneStatus, setFileDropzoneStatus] = useState<FileDropzoneStatus>('idle');
  const mimeArray = accept ?? [];

  const preventDefaults: React.DragEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const updateFileDropzoneStatus = (newStatus: FileDropzoneStatus) => {
    setFileDropzoneStatus(newStatus);
  };

  const fileUpload = (files: File[] | null) => {
    if (!files) return;

    updateFileDropzoneStatus('idle');
    if (onUpload) onUpload(files);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLInputElement>) => {
    preventDefaults(e);

    const fileInfos = getFileItemsInfo(e.dataTransfer.items);
    const isDeny = hasDenyFileType(fileInfos.map(fileInfo => fileInfo.type));

    updateFileDropzoneStatus(isDeny ? 'deny' : 'allow');
  };

  const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
    preventDefaults(e);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLInputElement>) => {
    if (e.currentTarget.contains(e.relatedTarget as HTMLElement)) return;
    preventDefaults(e);

    updateFileDropzoneStatus('idle');
  };

  const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
    preventDefaults(e);
    const files = Object.values(e.dataTransfer.files ?? {});

    updateFileDropzoneStatus('idle');
    if (hasDenyFileType(files.map(file => file.type))) return;

    fileUpload(files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Object.values(e.target.files ?? {});

    if (hasDenyFileType(files.map(file => file.type))) return;
    if (onUpload) onUpload(files);

    e.target.value = '';
  };

  const hasDenyFileType = (types: string[]) => {
    const isFileTypeDeny = !types.every(type => mimeArray.length === 0 || mimeArray.includes(type));
    const isFileLimitExceeded = types.length > 1 && !multiple;

    return isFileLimitExceeded || isFileTypeDeny;
  };

  return (
    <FileDropzoneProvider value={{ fileDropzoneStatus }}>
      <label className="w-full cursor-pointer">
        <Paper
          className={dropzoneStyle({ className })}
          fullWidth
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          {...paperProps}>
          <Polymorphic
            accept={accept?.join(', ')}
            as="input"
            multiple={multiple}
            type="file"
            onChange={handleInputChange}
          />
          {renderFileDropzone ? renderFileDropzone(fileDropzoneStatus) : children}
        </Paper>
      </label>
    </FileDropzoneProvider>
  );
};

type FileDropzoneStatus = 'idle' | 'allow' | 'deny';

interface FileDropzoneProps extends PaperProps {
  children?: React.ReactNode;
  className?: string;
  accept?: string[];
  multiple?: boolean;
  onUpload?: (files: File[]) => void;
  renderFileDropzone?: (fileDropzoneStatus: FileDropzoneStatus) => React.ReactNode;
}

const dropzoneStyle = cn('rounded-md border-2 border-dotted border-gray-200 hover:bg-gray-200');

FileDropzone.Idle = FileDropzoneIdle;
FileDropzone.Allow = FileDropzoneAllow;
FileDropzone.Deny = FileDropzoneDeny;

export default FileDropzone;
