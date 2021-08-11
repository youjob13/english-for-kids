import React, { ReactElement } from 'react';
import Answer from './Answer/Answer';
import { IAnswerListProps } from '../../../../shared/interfaces/props-models';
import {
  FAIL_ANSWER_IMAGE,
  RIGHT_ANSWER_IMAGE,
  SHOWN_STARS_LIMIT,
} from '../../../../shared/globalVariables';
import classes from './answers.module.scss';

const AnswerList = ({ answerList }: IAnswerListProps): ReactElement => (
  <ul className={classes.answerList}>
    {answerList.map((answer, index) => {
      if (answerList.length - SHOWN_STARS_LIMIT <= index) {
        return answer ? (
          <Answer key={index.toString()} image={RIGHT_ANSWER_IMAGE} />
        ) : (
          <Answer key={index.toString()} image={FAIL_ANSWER_IMAGE} />
        );
      }
      return null;
    })}
  </ul>
);
export default AnswerList;
