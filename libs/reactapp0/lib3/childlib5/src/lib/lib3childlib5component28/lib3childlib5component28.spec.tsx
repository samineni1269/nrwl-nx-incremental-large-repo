import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component28 from './lib3childlib5component28';

describe('Lib3childlib5component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component28 />);
    expect(baseElement).toBeTruthy();
  });
});