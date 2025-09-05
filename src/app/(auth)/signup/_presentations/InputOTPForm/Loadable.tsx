import loadable from '@loadable/component';

const Component = loadable(() => import(/* webpackChunkName: "signup-input-otp-form" */ './InputOTPForm'), {
  fallback: <div className="flex-1" />,
});

export default Component;
