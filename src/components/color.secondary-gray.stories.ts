import Text from './Text';

export default {
  title: 'System Color',
  component: Text,
  args: {
    text: 'Secondary Gray Color',
    size: 'title1',
    color: 'secondary-gray',
  },
};

export const GraySecondaryBase = {
  args: {
    text: 'Secondary Gray Base',
    opacity: 'base',
  },
};
export const GraySecondaryLighter = {
  args: {
    text: 'Secondary Gray Lighter',
    opacity: 'lighter',
  },
};
export const GraySecondaryLight = {
  args: {
    text: 'Secondary Gray Light',
    opacity: 'light',
  },
};
export const GraySecondaryLightest = {
  args: {
    text: 'Secondary Gray Lightest',
    opacity: 'lightest',
  },
};
