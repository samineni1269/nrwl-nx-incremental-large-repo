import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component48 from './lib1childlib4component48';

describe('Lib1childlib4component48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component48 />);
    expect(baseElement).toBeTruthy();
  });
});