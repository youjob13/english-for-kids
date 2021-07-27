import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWords } from '../../store/cardsSlice';
import { CardsReducerType } from '../interfaces/store-models';

const usePaginate = (limit = 10) => {
  const dispatch = useDispatch();
  const observer = useRef<any>(null);
  const [pageCount, setPageCount] = useState(1);
  const { totalPageCount } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const [hasMorePage, setHasMorePage] = useState(true); // TODO

  const hasMore = () => {
    return totalPageCount > pageCount * limit;
  };

  useEffect(() => {
    dispatch(getWords(limit, pageCount));

    setHasMorePage(hasMore());
  }, [pageCount]);

  const lastCategoryElem = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMorePage) {
            setPageCount((prevState) => prevState + 1);
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [0]
  );

  return lastCategoryElem;
};

export default usePaginate;
