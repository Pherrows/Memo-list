import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  height: ${props => props.height && props.height + 'px'};
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  background-color: #ffffcc;
  border-radius: 30px;
  color: black;
`;



function Input(props) {
  const {height, value, onChange } = props;
  return (
    <StyledTextarea height={height} value={value} onChange={onChange} />
  );
}

export default Input; 