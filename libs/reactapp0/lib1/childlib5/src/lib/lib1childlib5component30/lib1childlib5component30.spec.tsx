import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component30 from './lib1childlib5component30';

describe('Lib1childlib5component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component30 />);
    expect(baseElement).toBeTruthy();
  });
});