import { useCallback, useState } from 'react';

const useDisclosure = (isOpenDefault = false) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return { isOpen, open, close, toggle };
};

export default useDisclosure;
