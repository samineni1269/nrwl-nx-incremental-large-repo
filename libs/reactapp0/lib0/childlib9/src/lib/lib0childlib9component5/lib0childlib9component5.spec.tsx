import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib9component5 from './lib0childlib9component5';

describe('Lib0childlib9component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib9component5 />);
    expect(baseElement).toBeTruthy();
  });
});