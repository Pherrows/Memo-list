import React, { memo, useState } from 'react';
import styled from 'styled-components';
import MemoPage from './MemoPage';
import Input from '../input/Input';

function MemoItems({memo}) {

  
  
  const MemoItems = styled.div`
    background-color: #ffffcc;
    border-radius: 30px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  return (
    <MemoItems>
      {}
    </MemoItems>
  );
}

export default MemoItems;