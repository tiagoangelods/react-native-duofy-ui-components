/**
 * @format
 */
import React from 'react';
import {render, screen, cleanup} from '@testing-library/react-native';
import Text from '.';

import {it, expect, beforeEach, afterEach} from '@jest/globals';

beforeEach(() => {
  render(<Text text="testing text" />);
});
afterEach(cleanup);

it('Render Text correctly', () => {
  const textInput = screen.getByTestId('text-component');
  expect(textInput).toBeDefined();
});

it('Render Text to be type equals to Text', () => {
  const textInput = screen.getByTestId('text-component');
  expect(textInput).toBeDefined();
  expect(textInput.type).toBe('Text');
});

it('Render Text and to have text equals to `testing text`', () => {
  const textInput = screen.getByTestId('text-component');
  expect(textInput).toBeDefined();
  expect(textInput.props.children).toBe('testing text');
});
