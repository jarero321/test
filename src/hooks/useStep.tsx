import { useParams } from 'react-router-dom';

const useStep = (params: string, defaultValue?: string) => {
  const steps = useParams();
  return {
    step: steps[params] ?? defaultValue ?? '',
  };
};

export default useStep;
