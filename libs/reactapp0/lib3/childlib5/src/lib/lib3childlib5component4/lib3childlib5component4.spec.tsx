import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component4 from './lib3childlib5component4';

describe('Lib3childlib5component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component4 />);
    expect(baseElement).toBeTruthy();
  });
});