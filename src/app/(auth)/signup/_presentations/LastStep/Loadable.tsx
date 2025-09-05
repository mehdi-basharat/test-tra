import loadable from '@loadable/component';

const Component = loadable(() => import(/* webpackChunkName: "signup-last-step" */ './LastStep'), {
  fallback: <div className="flex-1" />,
});

export default Component;
