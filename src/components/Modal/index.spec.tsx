/**
 * @format
 */
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react-native';
import Modal from '.';

import { it, expect, beforeEach, afterEach, jest } from '@jest/globals';

const mockedFunction = jest.fn();

beforeEach(() => {
  render(<Modal title="Modal" open={true} closeFunction={mockedFunction} />);
});
afterEach(cleanup);

it('Render Modal correctly', () => {
  const modal = screen.getByTestId('modal-component');
  expect(modal).toBeDefined();
});

it('Render Modal correctly and close', () => {
  const modal = screen.getByTestId('modal-component');
  expect(modal).toBeDefined();
  const closeButton = screen.getByTestId('close-button');
  expect(closeButton).toBeDefined();
  fireEvent.press(closeButton);
  expect(mockedFunction).toBeCalledTimes(1);
});
