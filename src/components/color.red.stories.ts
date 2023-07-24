import Text from './Text';

export default {
  title: 'System Color',
  component: Text,
  args: {
    text: 'Red Color',
    size: 'title1',
    color: 'red',
  },
};

export const RedDarker = {
  args: {
    text: 'Red Darker',
    opacity: 'darker',
  },
};
export const RedDark = {
  args: {
    text: 'Red Dark',
    opacity: 'dark',
  },
};
export const RedLighter = {
  args: {
    text: 'Red Lighter',
    opacity: 'lighter',
  },
};
export const RedLight = {
  args: {
    text: 'Red Light',
    opacity: 'light',
  },
};
export const RedLightest = {
  args: {
    text: 'Red Lightest',
    opacity: 'lightest',
  },
};
