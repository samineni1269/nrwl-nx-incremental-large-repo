import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib6component2 from './lib0childlib6component2';

describe('Lib0childlib6component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib6component2 />);
    expect(baseElement).toBeTruthy();
  });
});