import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWords } from '../../store/cardsSlice';
import { getWordsState } from '../../store/selectors';

const usePaginate = (limit = 10) => {
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
  }, [pageCount]);

  const lastCategoryElem = useCallback((node: HTMLDivElement) => {
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
  }, []);

  return lastCategoryElem;
};
export default usePaginate;
