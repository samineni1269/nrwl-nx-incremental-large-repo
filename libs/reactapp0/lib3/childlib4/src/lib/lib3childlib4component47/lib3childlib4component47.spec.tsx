import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component47 from './lib3childlib4component47';

describe('Lib3childlib4component47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component47 />);
    expect(baseElement).toBeTruthy();
  });
});