import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component29 from './lib2childlib4component29';

describe('Lib2childlib4component29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component29 />);
    expect(baseElement).toBeTruthy();
  });
});