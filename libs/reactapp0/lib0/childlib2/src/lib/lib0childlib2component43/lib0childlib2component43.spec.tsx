import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component43 from './lib0childlib2component43';

describe('Lib0childlib2component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component43 />);
    expect(baseElement).toBeTruthy();
  });
});