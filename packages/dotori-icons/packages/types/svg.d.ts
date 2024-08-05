declare module '*.svg?react' {
  import * as React from 'react';

  const content: React.ComponentType<React.SVGProps<SVGSVGElement> & { className?: string }>;
  export default content;
}
