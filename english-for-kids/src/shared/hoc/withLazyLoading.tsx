import React, { ComponentType, Suspense } from 'react';
import Preloader from '../baseComponents/Preloader/Preloader';

const withLazyLoading = (Component: ComponentType) => () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Component />
    </Suspense>
  );
};

export default withLazyLoading;
