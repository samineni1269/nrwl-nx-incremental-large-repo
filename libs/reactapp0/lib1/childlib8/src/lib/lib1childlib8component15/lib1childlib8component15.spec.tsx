import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component15 from './lib1childlib8component15';

describe('Lib1childlib8component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component15 />);
    expect(baseElement).toBeTruthy();
  });
});