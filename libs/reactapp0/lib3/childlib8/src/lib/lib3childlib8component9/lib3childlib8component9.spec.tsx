import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component9 from './lib3childlib8component9';

describe('Lib3childlib8component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component9 />);
    expect(baseElement).toBeTruthy();
  });
});