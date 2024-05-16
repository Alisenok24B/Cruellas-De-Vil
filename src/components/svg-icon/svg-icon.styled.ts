import styled from "@emotion/styled"

export const StyledSvg = styled.svg`
  width: ${(props) => props.width || '55px'};
  height: ${(props) => props.height || '55px'};
  fill: ${(props) => props.fill || 'none'};
  min-height: 30px;
  min-width: 30px;
`;