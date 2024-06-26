import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/stores';
import { getExampleAction } from '@/stores/example';
import './Home.scss';

function HomePage() {
  const dispatch = useAppDispatch();

  const example = useAppSelector((state) => state.example);

  const getExample = useCallback(() => {
    dispatch(getExampleAction(1));
  }, [dispatch]);

  useEffect(() => {
    getExample();
  }, [getExample]);

  return (
    <div className="HomePage">
      <h1>HomePage</h1>
      {example?.detail?.title}
    </div>
  );
}

export default HomePage;
