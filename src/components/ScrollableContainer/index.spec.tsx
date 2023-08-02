/**
 * @format
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react-native';
import Container from '.';

import { it, expect, beforeEach, afterEach } from '@jest/globals';

beforeEach(() => {
  render(<Container />);
});
afterEach(cleanup);

it('Render Container correctly', () => {
  const container = screen.getByTestId('container-component');
  expect(container).toBeDefined();
});
