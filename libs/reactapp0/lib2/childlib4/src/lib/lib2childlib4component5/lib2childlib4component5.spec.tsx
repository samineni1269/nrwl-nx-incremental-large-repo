import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component5 from './lib2childlib4component5';

describe('Lib2childlib4component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component5 />);
    expect(baseElement).toBeTruthy();
  });
});