import { defer, LoaderFunctionArgs } from 'react-router-dom';

export const userLoader = async ({ params }: LoaderFunctionArgs) => {
  const { userId } = params;
  const fullName = delay(3000, `Ngo Duc Long: ${userId}`);
  const company = delay(2000, 'Powergate Australia');

  return defer({
    info: { fullName, company },
  });
};

function delay(ms: number, value: string): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
