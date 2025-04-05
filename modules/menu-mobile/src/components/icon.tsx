import * as React from 'react';

const chevronRight = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <rect width="24" height="24" fill="none" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m9 18l6-6l-6-6"
    />
  </svg>
);

const iconByName = {
  'chevron-right': chevronRight,
} as const;

const Icon = ({ className, name }: { className?: string; name: keyof typeof iconByName }) => {
  return <>{iconByName[name] && React.cloneElement(iconByName[name], { className })}</>;
};

export default Icon;
