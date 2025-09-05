/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react';

type CaseProps = {
  component?: React.ComponentType<any>;
  children?: React.ReactNode;
  when: string | number;
};

type DefaultProps = {
  component?: React.ComponentType<any>;
  children?: React.ReactNode;
  when?: never;
};

type Props = {
  condition: undefined | string | number;
  children?: React.ReactNode;
};

interface SwitchComponentType extends FC<Props> {
  Case: FC<CaseProps>;
  Default: FC<DefaultProps>;
}

const Switch: SwitchComponentType = props => {
  const { children, condition } = props;

  const arrayOfChildren = Array.isArray(children) ? children : [children];
  const cases = arrayOfChildren.filter(child => condition === child.props.when);
  const defaultCases = arrayOfChildren.filter(child => child.props.when === undefined);

  if (defaultCases.length > 1) throw new Error('Only one <Switch.Default/> is allowed');

  return cases.length > 0 ? cases : defaultCases[0];
};

Switch.Case = props => {
  const { component: Element, children } = props;

  if (!Element) return children;

  return <Element />;
};
Switch.Case.displayName = 'SwitchCase';

Switch.Default = props => {
  const { component: Element, children } = props;

  if (!Element) return children;

  return <Element />;
};

Switch.Default.displayName = 'SwitchDefault';

export default Switch;
