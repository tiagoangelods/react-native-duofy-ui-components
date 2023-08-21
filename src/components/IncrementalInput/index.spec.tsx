/**
 * @format
 */
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react-native';
import IncrementalInput from '.';

import { it, expect, beforeEach } from '@jest/globals';

const onIncrement = jest.fn();
const onDecrement = jest.fn();

beforeEach(() => {
  cleanup();
  render(
    <IncrementalInput value="0" onIncrement={onIncrement} onDecrement={onDecrement} />
  );
});

it('Render IncrementalInput correctly', () => {
  const incContainer = screen.getByTestId('incremental-input');
  expect(incContainer).toBeDefined();
});

it('Render IncrementalInput correctly and to decrement twice', () => {
  const incContainer = screen.getByTestId('incremental-input');
  expect(incContainer).toBeDefined();
  const decButtom = screen.getByTestId('dec-button');
  expect(decButtom).toBeDefined();
  fireEvent.press(decButtom);
  fireEvent.press(decButtom);
  expect(onDecrement).toHaveBeenCalledTimes(2);
});

it('Render IncrementalInput correctly and to increment twice', () => {
  const incContainer = screen.getByTestId('incremental-input');
  expect(incContainer).toBeDefined();
  const incButton = screen.getByTestId('inc-button');
  expect(incButton).toBeDefined();
  fireEvent.press(incButton);
  fireEvent.press(incButton);
  expect(onIncrement).toHaveBeenCalledTimes(2);
});
