import * as React from 'react';

function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent | null) => void,
  enabled = true
) {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent | null) => {
      if (!enabled || !ref.current || ref.current.contains(event?.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, enabled]);
}

export default useOutsideClick;
