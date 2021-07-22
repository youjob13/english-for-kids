import { Next } from 'react-router-guards';

const requireLogin = (to: any, from: unknown, next: Next) => {
  if (to.meta.auth) {
    if (localStorage.token) {
      next();
    }
    next.redirect('/');
  } else {
    next();
  }
};

export default requireLogin;
