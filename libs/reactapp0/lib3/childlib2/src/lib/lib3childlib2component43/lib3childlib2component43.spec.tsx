import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component43 from './lib3childlib2component43';

describe('Lib3childlib2component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component43 />);
    expect(baseElement).toBeTruthy();
  });
});