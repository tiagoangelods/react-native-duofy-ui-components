/**
 * @format
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react-native';
import Divider from '.';

import { it, expect, afterEach } from '@jest/globals';

afterEach(cleanup);

it('Render Divider correctly', () => {
  render(<Divider />);
  const divider = screen.getByTestId('divider-component');
  expect(divider).toBeDefined();
});

it('Render Divider correctly and have text equals to or', () => {
  render(<Divider text="or" />);
  const divider = screen.getByTestId('divider-component');
  expect(divider).toBeDefined();
  const dividerText = screen.getByText('or');
  expect(dividerText).toBeDefined();
});
