import React, { ReactElement } from 'react';
import Answer from './Answer/Answer';
import { IAnswerListProps } from '../../../../shared/interfaces/props-models';
import { ANSWER_LIST_STYLES } from '../../../../shared/stylesVariables';

const AnswerList = ({ answerList }: IAnswerListProps): ReactElement => (
  <ul className={ANSWER_LIST_STYLES}>
    {answerList.map((answer, index) => {
      if (answerList.length - 10 <= index) {
        return answer ? (
          <Answer
            key={index.toString()}
            image={`${process.env.PUBLIC_URL}/assets/star.webp`}
          />
        ) : (
          <Answer
            key={index.toString()}
            image={`${process.env.PUBLIC_URL}/assets/lose_star.png`}
          />
        );
      }
      return null;
    })}
  </ul>
);

export default AnswerList;
