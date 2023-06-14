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



function MainPage({ addMemo, memo }) {
  // const {addMemo, memo} = props;
  const navigate = useNavigate();


  return (
    <>
          <Main>
        <Button onClick={() => {navigate('/')}} title='Memo List' />
        <Button onClick={() => {navigate('/MemoPage')}} title='New Memo' />
        <Button title='Delete' />
      </Main>

      {memo.map((item, index) => (
        <MemoItems key={index} title={item.title} content={item.content}
          memoId={index} navigate={navigate}
        />
      ))}
    </>
  );
}

export default MainPage;