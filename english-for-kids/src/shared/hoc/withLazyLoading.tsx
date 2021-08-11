import React, { ComponentType, ReactElement, Suspense } from 'react';
import Preloader from '../baseComponents/Preloader/Preloader';

const withLazyLoading = (Component: ComponentType) => (): ReactElement => {
  return (
    <Suspense fallback={<Preloader />}>
      <Component />
    </Suspense>
  );
};

export default withLazyLoading;
