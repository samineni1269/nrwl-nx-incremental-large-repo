import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component20 from './lib1childlib8component20';

describe('Lib1childlib8component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component20 />);
    expect(baseElement).toBeTruthy();
  });
});