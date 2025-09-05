// eslint-disable-next-line no-restricted-imports
import { sendGTMEvent as sendEvent } from '@next/third-parties/google';

import type { DataLayerParameters } from '../types';

export const sendGTMEvent = <T>(dataLayers: DataLayerParameters<T>) => {
  if (typeof window.webengage !== 'undefined') sendEvent(dataLayers);
};
