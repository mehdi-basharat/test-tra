/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect } from 'react';

import { useStep } from 'usehooks-ts';

import Switch from '@/components/data-display/switch-component';

import useAmplitudeContext from '@/hooks/use-amplitude';

import useEmitter from './_hooks/use-emitter';
import InputOTPForm from './_presentations/InputOTPForm';
import SignupForm from './_presentations/SignupForm';
import SignupOpt from './_presentations/SignupOpt';
import SignupProvider from './_context';

const SignupPage = () => {
  const { trackAmplitudeEvent, stateVariant }: any = useAmplitudeContext();

  const emitter = useEmitter();

  const [currentStep, helpers] = useStep(3);
  const { goToNextStep, goToPrevStep } = helpers;

  const handleAmplitudeViewSignupPage = () => {
    trackAmplitudeEvent('Registration Flow', {
      step_name: 'view_signup_page',
    });
  };

  useEffect(() => {
    handleAmplitudeViewSignupPage();
  }, []);

  useEffect(() => {
    emitter.on('@signup/next', goToNextStep);
    emitter.on('@signup/prev', goToPrevStep);

    return () => {
      emitter.off('@signup/next', goToNextStep);
      emitter.off('@signup/prev', goToPrevStep);
    };
  }, [emitter, goToNextStep, goToPrevStep]);

  return (
    <SignupProvider emitter={emitter}>
      {stateVariant === 'no_otp' || stateVariant === 'no_terms_otp' ? (
        <Switch condition={currentStep}>
          <Switch.Case component={SignupOpt} when={1} />
          <Switch.Case component={SignupForm} when={2} />
        </Switch>
      ) : (
        <Switch condition={currentStep}>
          <Switch.Case component={SignupOpt} when={1} />
          <Switch.Case component={SignupForm} when={2} />
          <Switch.Case component={InputOTPForm} when={3} />
        </Switch>
      )}
    </SignupProvider>
  );
};

export default SignupPage;
