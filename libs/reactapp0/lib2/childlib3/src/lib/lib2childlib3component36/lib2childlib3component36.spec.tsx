import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component36 from './lib2childlib3component36';

describe('Lib2childlib3component36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component36 />);
    expect(baseElement).toBeTruthy();
  });
});