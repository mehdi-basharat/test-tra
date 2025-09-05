import { getTyradsInstance } from '@/lib/axios';

interface Dependencies {
  params?: unknown;
}

const useAxios = (deps?: Dependencies) => {
  return getTyradsInstance(deps);
};

export default useAxios;
