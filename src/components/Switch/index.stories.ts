import Switch from '.';

export default {
  title: 'Switch',
  component: Switch,
  args: {},
};

export const SwitchDisabled = {};
export const SwitchEnabled = {
  args: {
    value: true,
  },
};
