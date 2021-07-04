import { RefObject, useEffect } from 'react';

const useOnClickOutsideOrNavItem = (
  ref: RefObject<HTMLElement>,
  handler: (e: Event) => void
): void => {
  useEffect(() => {
    const listener = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        !ref.current ||
        ref.current.contains(target) ||
        (target.closest('label') &&
          target.closest('label')!.getAttribute('for') === 'menuId')
      ) {
        return;
      }
      handler(e);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutsideOrNavItem;
