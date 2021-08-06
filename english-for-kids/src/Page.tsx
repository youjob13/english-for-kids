import React, { PropsWithChildren, ReactElement } from 'react';

const Page = ({ children }: PropsWithChildren<ReactElement>): ReactElement => {
  return <>{children}</>;
};

export default Page;
