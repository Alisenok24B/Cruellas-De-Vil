import React from "react"

import { StyledSvg } from './svg-icon.styled'

export function Svg({ width, height, fill, viewBox, paths }) {
    return (
    <StyledSvg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      {paths.map((path, index) => (
        <path key={index} d={path.d} fill={fill} />
      ))}
    </StyledSvg>
    );
}