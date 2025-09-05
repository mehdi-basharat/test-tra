'use client';
import { createContext, useEffect, useState } from 'react';

import { init, track } from '@amplitude/analytics-browser';

import { TYRADS_AMPLITUDE_API_KEY, TYRADS_AMPLITUDE_API_KEY_STG } from '@/constants';
import { Experiment } from '@amplitude/experiment-js-client';

export const AmplitudeContext = createContext({});

const AmplitudeContextProvider = ({ children }: any) => {
  const [stateVariant, setStateVariant] = useState<string | undefined>();

  const loginVerisoul = async () => {
    try {
      await window?.Verisoul?.session();
      // console.log('@dataVerisoul', dataVerisoul);
    } catch (e) {
      console.log('Verisoul failed get session_id', e);
    }
  };

  const initExperimentAmplitude = async (isStaging: any) => {
    // (1) Initialize the experiment client with Amplitude Analytics.
    const experiment = Experiment.initializeWithAmplitudeAnalytics(
      isStaging ? TYRADS_AMPLITUDE_API_KEY_STG : TYRADS_AMPLITUDE_API_KEY,
    );

    // (2) Fetch variants and await the promise result.
    await experiment.fetch();

    // (3) Lookup a flag's variant.
    const variant = experiment.variant('registration-flow-configs');

    setStateVariant(variant.value);
  };

  useEffect(() => {
    let baseUrl: any;
    if (typeof window !== 'undefined') {
      baseUrl = window.location.origin;
    }

    const isStaging = baseUrl.includes('localhost') || baseUrl.includes('staging');

    init(isStaging ? TYRADS_AMPLITUDE_API_KEY_STG : TYRADS_AMPLITUDE_API_KEY, undefined, {
      defaultTracking: {
        sessions: true,
      },
    });

    loginVerisoul();
    initExperimentAmplitude(isStaging);
  }, []);

  const trackAmplitudeEvent = (eventName: any, eventProperties: any) => {
    track(eventName, eventProperties);
  };

  const value = { trackAmplitudeEvent, stateVariant };

  return <AmplitudeContext.Provider value={value}>{children}</AmplitudeContext.Provider>;
};

export default AmplitudeContextProvider;
