import React from 'react';
import styled from 'styled-components';
import MemoPage from './MemoPage';

const Main = styled.div`
  background-color: gray;
  display: flex;
  width: 100%;
`;

function MainPage(props) {
  return (
    <Main>
      {memoPage.map(() => {
        return <MemoPage />
      })}
    </Main>
  );
}

export default MainPage;