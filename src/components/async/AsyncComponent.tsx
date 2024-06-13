import { Suspense } from 'react';
import { Await, AwaitProps } from 'react-router-dom';

interface IProps {
  data: unknown;
  errorElement?: React.ReactNode;
  loadingElement?: React.ReactNode;
  children: AwaitProps['children'];
}

const AsyncComponent = ({ data, errorElement = DefaultErrorElement, loadingElement, children }: IProps) => {
  return (
    <Suspense fallback={loadingElement}>
      <Await resolve={data} errorElement={errorElement} children={children} />
    </Suspense>
  );
};

const DefaultErrorElement = <div className="AsyncComponent__error">Something wrongs...</div>;

export default AsyncComponent;
