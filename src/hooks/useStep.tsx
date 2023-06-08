import { useState } from 'react';
import { useParams } from 'react-router-dom';

const useStep = (params: string, defaultValue?: string) => {
  const steps = useParams();
  const [step] = useState(steps[params] ?? defaultValue ?? '');

  return {
    step,
  };
};

export default useStep;
