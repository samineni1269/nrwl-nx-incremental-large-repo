import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component26 from './lib1childlib3component26';

describe('Lib1childlib3component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component26 />);
    expect(baseElement).toBeTruthy();
  });
});