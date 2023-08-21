/**
 * @format
 */
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react-native';
import IncrementalInput from '.';

import { it, expect, beforeEach, afterEach } from '@jest/globals';

const onPressIncMock = jest.fn();
const onPressDecMock = jest.fn();

beforeEach(() => {
  render(
    <IncrementalInput
      value={0}
      decFunction={onPressDecMock}
      incFunction={onPressIncMock}
    />
  );
});
afterEach(cleanup);

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
  expect(onPressDecMock).toHaveBeenCalledTimes(2);
});

it('Render IncrementalInput correctly and to increment twice', () => {
  const incContainer = screen.getByTestId('incremental-input');
  expect(incContainer).toBeDefined();
  const incButton = screen.getByTestId('inc-button');
  expect(incButton).toBeDefined();
  fireEvent.press(incButton);
  fireEvent.press(incButton);
  expect(onPressDecMock).toHaveBeenCalledTimes(2);
});
