import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib2component7 from './lib3childlib2component7';

describe('Lib3childlib2component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib2component7 />);
    expect(baseElement).toBeTruthy();
  });
});