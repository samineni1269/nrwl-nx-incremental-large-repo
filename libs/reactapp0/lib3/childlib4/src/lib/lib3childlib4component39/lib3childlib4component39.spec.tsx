import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component39 from './lib3childlib4component39';

describe('Lib3childlib4component39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component39 />);
    expect(baseElement).toBeTruthy();
  });
});