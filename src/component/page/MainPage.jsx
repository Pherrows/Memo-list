import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import MemoItems from './MemoItems';

const Main = styled.div`
  background-color: gray;
  display: flex;
  width: 100%;
  justify-content: space-between;
  
`;

function MainPage(props) {
  const {addMemo, memo} = props;
  const navigate = useNavigate();


  return (
    <>
    <Main>
      <Button onClick={() => {navigate('/')}} title='Memo List'></Button>
      <Button onClick={() => {navigate('/MemoPage')}} title='New Memo'></Button>
      <Button title='Delete'></Button>
    </Main>
    
      <MemoItems memo={memo}>
        {memo.map((title) => {
          return <MemoItems title={title}/>;
        })}
      </MemoItems>
    </>
  );
}

export default MainPage;