import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib8component4 from './lib0childlib8component4';

describe('Lib0childlib8component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib8component4 />);
    expect(baseElement).toBeTruthy();
  });
});