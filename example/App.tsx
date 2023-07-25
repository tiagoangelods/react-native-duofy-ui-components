import { getStorybookUI } from '@storybook/react-native';

import { configure, addArgsEnhancer } from '@storybook/react-native';

import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-actions/register';

import { argsEnhancers } from '@storybook/addon-actions/dist/modern/preset/addArgs';

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    './src/components/Button/index.stories.ts': require('react-native-duofy-ui-components/src/components/Button/index.stories.ts'),
    './src/components/color.black.stories.ts': require('react-native-duofy-ui-components/src/components/color.black.stories.ts'),
    './src/components/color.blue.stories.ts': require('react-native-duofy-ui-components/src/components/color.blue.stories.ts'),
    './src/components/color.green.stories.ts': require('react-native-duofy-ui-components/src/components/color.green.stories.ts'),
    './src/components/color.primary-gray.stories.ts': require('react-native-duofy-ui-components/src/components/color.primary-gray.stories.ts'),
    './src/components/color.red.stories.ts': require('react-native-duofy-ui-components/src/components/color.red.stories.ts'),
    './src/components/color.secondary-gray.stories.ts': require('react-native-duofy-ui-components/src/components/color.secondary-gray.stories.ts'),
    './src/components/color.yellow.stories.ts': require('react-native-duofy-ui-components/src/components/color.yellow.stories.ts'),
    './src/components/Input/index.stories.ts': require('react-native-duofy-ui-components/src/components/Input/index.stories.ts'),
    './src/components/Switch/index.stories.ts': require('react-native-duofy-ui-components/src/components/Switch/index.stories.ts'),
    './src/components/Text/index.stories.ts': require('react-native-duofy-ui-components/src/components/Text/index.stories.ts'),
  };
};

configure(getStories as any, module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
