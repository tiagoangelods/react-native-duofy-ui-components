import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    text: 'button primary',
    onClick: { action: 'clicked' },
  },
};

export const Default = {};
export const Secondary = {
  args: {
    text: 'button secondary',
    variant: 'secondary',
  },
};
export const Outline = {
  args: {
    text: 'button outline',
    variant: 'outline',
  },
};
export const Transparent = {
  args: {
    text: 'button transparent',
    variant: 'transparent',
  },
};
