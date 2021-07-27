import { Next } from 'react-router-guards';
import { Path } from '../globalVariables';

const requireLogin = (to: any, from: unknown, next: Next) => {
  if (to.meta.auth) {
    if (localStorage.token) {
      next();
    }
    next.redirect(Path.ROOT);
  } else {
    next();
  }
};

export default requireLogin;
