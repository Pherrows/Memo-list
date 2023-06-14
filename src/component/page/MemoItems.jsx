import React, { memo, useState,  } from 'react';
import styled from 'styled-components';
import MemoPage from './MemoPage';
import Input from '../input/Input';
import App from '../../App';
import { useNavigate } from 'react-router-dom';

const MemoItemsWrapper = styled.div`
  background-color: #ffffcc;
  border-radius: 60px;
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

function MemoItems({ memo, title, content, index }) {
  // console.log(props);
  // const {memo} = props;
  const navigate = useNavigate();
    
  // console.log(memo);

    
  return (
    <MemoItemsWrapper
        onClick={() => {navigate(`/MemoPage/:memoId${memo.key}`)}}
    >
      <h3>Title: {title}</h3>
    </MemoItemsWrapper>
  );

}

export default MemoItems;