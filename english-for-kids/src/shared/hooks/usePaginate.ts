import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWords } from '../../store/wordsSlice';
import { getWordsState } from '../../store/selectors';

const usePaginate = (limit = 10): ((node: HTMLDivElement) => void) => {
  const dispatch = useDispatch();
  const observer = useRef<IntersectionObserver | null>(null);
  const [pageCount, setPageCount] = useState(1);
  const { totalPageCount } = useSelector(getWordsState);
  const [hasMorePage, setHasMorePage] = useState(true);

  const hasMore = () => {
    return totalPageCount > pageCount * limit;
  };

  useEffect(() => {
    dispatch(getWords(limit, pageCount));

    setHasMorePage(hasMore());
  }, [dispatch, pageCount]);

  const lastCategoryElem = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMorePage) {
            setPageCount((prevState) => prevState + 1);
          }
        },
        { threshold: 1 }
      );

      if (node) {
        observer.current.observe(node);
      }
    },
    [hasMorePage]
  );

  return lastCategoryElem;
};
export default usePaginate;
