import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component49 from './lib1childlib6component49';

describe('Lib1childlib6component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component49 />);
    expect(baseElement).toBeTruthy();
  });
});