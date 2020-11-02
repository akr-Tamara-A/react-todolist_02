import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import { colorButtonHover } from '../styles/consts';

const Svg = styled(Icon)` 
  width: 4rem; 
  height: 4rem;
`;

export const IconPrev = ({ className }) => ( 
  <Svg viewBox="0 0 40 40" className={className}>   
    <path 
      d="m22 26.5c-0.1 0-0.3 0-0.4-0.1l-4.6-4.6c-0.5-0.5-0.7-1.1-0.7-1.8s0.3-1.3 0.7-1.8l4.6-4.6c0.2-0.2 0.5-0.2 0.7 0s0.2 0.5 0 0.7l-4.6 4.6c-0.6 0.6-0.6 1.5 0 2.1l4.6 4.6c0.2 0.2 0.2 0.5 0 0.7 0 0.2-0.2 0.2-0.3 0.2z" 
      fill="currentColor"
    />
  </Svg>
)

export const IconNext = ({ className }) => ( 
  <Svg viewBox="0 0 40 40" className={className}>   
    <path 
      d="m18 26.5c-0.1 0-0.3 0-0.4-0.1-0.2-0.2-0.2-0.5 0-0.7l4.6-4.6c0.6-0.6 0.6-1.5 0-2.1l-4.6-4.6c-0.2-0.2-0.2-0.5 0-0.7s0.5-0.2 0.7 0l4.6 4.6c0.5 0.5 0.7 1.1 0.7 1.8s-0.3 1.3-0.7 1.8l-4.6 4.6h-0.3z" 
      fill="currentColor"
    />
  </Svg>
)
