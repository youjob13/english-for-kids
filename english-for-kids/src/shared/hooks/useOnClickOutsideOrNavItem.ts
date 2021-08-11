import { RefObject, useEffect } from 'react';
import { EventName, MENU_BUTTON_ID } from '../globalVariables';

const useOnClickOutsideOrNavItem = (
  ref: RefObject<HTMLElement>,
  handler: (event: Event) => void
): void => {
  useEffect(() => {
    const listener = (event: Event) => {
      const target = event.target as HTMLElement;

      const condition =
        !ref.current ||
        ref.current.contains(target) ||
        (target.closest('label') &&
          target.closest('label')!.getAttribute('for') === MENU_BUTTON_ID);

      if (condition) {
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
