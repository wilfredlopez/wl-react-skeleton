import React from 'react'
import {render} from '@testing-library/react'
import SkeletonElement from '../src/SkeletonElement';
import { SkeletonType } from '../src/SkeletonElement'


it('should render with correct classes', () => {
  global.console.error = jest.fn();

  const type:SkeletonType = 'text';
  const result = render( <SkeletonElement type={type} />);
  const element = result.asFragment()
  const div = element.querySelector('div')!
  // expect(console.error).toHaveBeenCalledTimes(1);
  expect(div.className).toBe('skeleton text light');


});
