import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component18 from './lib3childlib6component18';

describe('Lib3childlib6component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component18 />);
    expect(baseElement).toBeTruthy();
  });
});