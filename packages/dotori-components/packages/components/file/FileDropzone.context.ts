import { createSafeContext } from 'dotori-context';

export interface FileDropzoneContextValue {
  fileDropzoneStatus: 'idle' | 'allow' | 'deny';
}

export const [FileDropzoneProvider, useFileDropzoneContext] = createSafeContext<FileDropzoneContextValue>(
  'FileDropzone component was not found in the tree',
);
