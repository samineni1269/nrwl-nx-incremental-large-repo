import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component2 from './lib2childlib5component2';

describe('Lib2childlib5component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component2 />);
    expect(baseElement).toBeTruthy();
  });
});