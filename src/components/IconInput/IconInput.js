import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {

  const STYLES = {
    small: {
      fontSize: 14,
      iconSize: 16,
      borderThickness: 1,
      height: 24,
    },
    large: {
      fontSize: 18,
      iconSize: 24,
      borderThickness: 2,
      height: 36,
    },
  };
  const styles = STYLES[size];
  
  return <>
  <Wrapper         style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
        }}
 width={width}>
         <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
    <FormElement role="search">
      <InputElement {...delegated }type="search" aria-label="search text" size="20"/>
    </FormElement>
    </Wrapper>
  </>;
};

const FormElement = styled.form`
  width: 100%;
`

const InputElement = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`
const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
