import React, { ReactElement } from 'react';
import { IAnswerProps } from '../../../../../shared/interfaces/props-models';
import { ImageDescription } from '../../../../../shared/globalVariables';
import classes from '../answers.module.scss';

const Answer = ({ image }: IAnswerProps): ReactElement => (
  <li className={classes.answerItem}>
    <img className={classes.star} src={image} alt={ImageDescription.STAR} />
  </li>
);

export default Answer;
