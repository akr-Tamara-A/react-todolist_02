import { colorButtonNotActive, colorButtonHover } from './consts';

export const IconStyle = `
  fill: ${colorButtonNotActive};
    
  :hover {
    fill:${colorButtonHover};
  }

  :focus {
    fill:${colorButtonHover};
  }
`;