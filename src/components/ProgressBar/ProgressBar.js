/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';



var SIZES = {
  "small":{
    "--height":"8px",
    "--padding": "0px",
    "--innerRadius":"8px",
    "--borderRadius":"8px"
  },
  "medium":{
    "--height":"12px",
    "--padding":"0px",
    "--innerRadius":"8px",
    "--borderRadius":"8px"
  },
  "large":{
    "--height":"24px",
    "--padding":"4px",
    "--innerRadius":"4px",
    "--borderRadius":"8px"
  }
}

const ProgressBar = ({ value, size }) => {

  var styleVars = SIZES[size];
  return (
    <>
  <ProgressBarWrapper style={styleVars} role="meter" size={size} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
    <ProgressTrim>
    <ProgresBox
      width="100" 
      height="100" 
      class="fill"
      aria-hidden="true"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      >    
      {/* <ProgressIndicator 
      d="M
      h30
      q5,0 5,5
      z
       "
      fill={COLORS.primary}></ProgressIndicator> */}
          <ProgressIndicator 
      x="0"
      y="0"
      height="100%"
      width={`${value}%`}
      fill={COLORS.primary}></ProgressIndicator>
      </ProgresBox>
    </ProgressTrim>
  </ProgressBarWrapper>
  </>
  )
};


const ProgressIndicator = styled.rect`
`
const ProgresBox = styled.svg`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`
const ProgressTrim = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--innerRadius);
  overflow: hidden;
`
const ProgressBarWrapper =  styled.div`
  width: 100%;
  line-height:0;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  background: #80808026;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35} 
`

export default ProgressBar;
