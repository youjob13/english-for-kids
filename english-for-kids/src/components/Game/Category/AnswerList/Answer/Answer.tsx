import React, { ReactElement } from 'react';
import {
  ANSWER_ITEM_STYLES,
  STAR_STYLES,
} from '../../../../../shared/stylesVariables';
import { IAnswerProps } from '../../../../../shared/interfaces/props-models';

const Answer = ({ image }: IAnswerProps): ReactElement => (
  <li className={ANSWER_ITEM_STYLES}>
    <img className={STAR_STYLES} src={image} alt="star" />
  </li>
);

export default Answer;
