import Text from './Text';

export default {
  title: 'System Color',
  component: Text,
  args: {
    text: 'Green Color',
    size: 'title1',
    color: 'green',
  },
};

export const GreenDarker = {
  args: {
    text: 'Green Darker',
    opacity: 'darker',
  },
};
export const GreenDark = {
  args: {
    text: 'Green Dark',
    opacity: 'dark',
  },
};
export const GreenLighter = {
  args: {
    text: 'Green Lighter',
    opacity: 'lighter',
  },
};
export const GreenLight = {
  args: {
    text: 'Green Light',
    opacity: 'light',
  },
};
export const GreenLightest = {
  args: {
    text: 'Green Lightest',
    opacity: 'lightest',
  },
};
