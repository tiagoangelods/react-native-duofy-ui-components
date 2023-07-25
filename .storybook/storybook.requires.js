/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src/components",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src\\/components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./src/components/Button/index.stories.tsx": require("../src/components/Button/index.stories.tsx"),
    "./src/components/color.black.stories.ts": require("../src/components/color.black.stories.ts"),
    "./src/components/color.blue.stories.ts": require("../src/components/color.blue.stories.ts"),
    "./src/components/color.green.stories.ts": require("../src/components/color.green.stories.ts"),
    "./src/components/color.primary-gray.stories.ts": require("../src/components/color.primary-gray.stories.ts"),
    "./src/components/color.red.stories.ts": require("../src/components/color.red.stories.ts"),
    "./src/components/color.secondary-gray.stories.ts": require("../src/components/color.secondary-gray.stories.ts"),
    "./src/components/color.yellow.stories.ts": require("../src/components/color.yellow.stories.ts"),
    "./src/components/Container/index.stories.ts": require("../src/components/Container/index.stories.ts"),
    "./src/components/Input/index.stories.ts": require("../src/components/Input/index.stories.ts"),
    "./src/components/Switch/index.stories.ts": require("../src/components/Switch/index.stories.ts"),
    "./src/components/Text/index.stories.ts": require("../src/components/Text/index.stories.ts"),
  };
};

configure(getStories, module, false);
