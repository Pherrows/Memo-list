import React from 'react';
import styled from 'styled-components';
import MemoPage from './MemoPage';

const Main = styled.div`
  background-color: gray;
  display: flex;
  width: 100%;
  height: 100vb;
`;

function MainPage(props) {
  return (
    <Main>
      <MemoPage />
    </Main>
  );
}

export default MainPage;