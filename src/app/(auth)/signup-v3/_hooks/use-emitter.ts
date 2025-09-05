import { useRef } from 'react';

import type { SignupEmitter, SignupEventType } from '../_model';

import mitt from '@/helpers/emitter';

/**
 * @function useEmitter
 * @param {SignupEmitter} emitter
 */
const useEmitter = (emitter?: SignupEmitter) => {
  const _emmiter = useRef(emitter ?? mitt<SignupEventType>());

  return _emmiter.current;
};

export default useEmitter;
