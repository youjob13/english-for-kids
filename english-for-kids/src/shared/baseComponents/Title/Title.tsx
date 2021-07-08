import React, { Props, ReactElement } from 'react';
import { TITLE_STYLES } from '../../stylesVariables';

const Title = ({ children }: Props<string>): ReactElement => (
  <h2 className={TITLE_STYLES}>{children}</h2>
);

export default Title;
