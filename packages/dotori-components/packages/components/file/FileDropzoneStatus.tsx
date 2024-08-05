import { FileDropzoneContextValue, useFileDropzoneContext } from './FileDropzone.context';

const createComponent = (status: FileDropzoneContextValue[keyof FileDropzoneContextValue]) => {
  const Component: React.FC<FileDropzoneStatusComponentProps> = ({ children }) => {
    const ctx = useFileDropzoneContext();

    return <>{ctx.fileDropzoneStatus === status && <>{children}</>}</>;
  };

  return Component;
};

export interface FileDropzoneStatusComponentProps {
  children: React.ReactNode;
}

export const FileDropzoneAllow = createComponent('allow');
export const FileDropzoneDeny = createComponent('deny');
export const FileDropzoneIdle = createComponent('idle');
