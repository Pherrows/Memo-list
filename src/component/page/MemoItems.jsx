import React, { memo, useState,  } from 'react';
import styled from 'styled-components';
import MemoPage from './MemoPage';
import Input from '../input/Input';
import App from '../../App';

const MemoItemsWrapper = styled.div`
  background-color: #ffffcc;
  border-radius: 30px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  font-size: 20px;
  margin-top: 30px;
  /* margin-left: 550px; */
`;

function MemoItems({ title, content }) {
  // console.log(props);
  // const {memo} = props;
  
  console.log(memo);

    
  return (
    <MemoItemsWrapper>
      <h3>{title}</h3>
    </MemoItemsWrapper>
  );

}

export default MemoItems;