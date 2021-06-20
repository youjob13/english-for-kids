import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const withNavigation = (Component: ReactElement): ReactElement => {
  return <Link to="cat1">{Component}</Link>;
};

export default withNavigation;
