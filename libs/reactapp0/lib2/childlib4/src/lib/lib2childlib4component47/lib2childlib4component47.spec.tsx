import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component47 from './lib2childlib4component47';

describe('Lib2childlib4component47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component47 />);
    expect(baseElement).toBeTruthy();
  });
});