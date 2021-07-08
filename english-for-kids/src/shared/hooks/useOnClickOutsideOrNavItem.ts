import { RefObject, useEffect } from 'react';
import { EventName } from '../globalVariables';

const useOnClickOutsideOrNavItem = (
  ref: RefObject<HTMLElement>,
  handler: (e: Event) => void
): void => {
  useEffect(() => {
    const listener = (event: Event) => {
      const target = event.target as HTMLElement;
      if (
        !ref.current ||
        ref.current.contains(target) ||
        (target.closest('label') &&
          target.closest('label')!.getAttribute('for') === 'menuId')
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener(EventName.MOUSEDOWN, listener);
    return () => {
      document.removeEventListener(EventName.MOUSEDOWN, listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutsideOrNavItem;
