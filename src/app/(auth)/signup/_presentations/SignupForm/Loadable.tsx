import loadable from '@loadable/component';

const Component = loadable(() => import(/* webpackChunkName: "signup-form" */ './SignupForm'), {
  fallback: <div className="flex-1" />,
});

export default Component;
