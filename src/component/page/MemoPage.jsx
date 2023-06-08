import React, { useState } from 'react';
import styled from 'styled-components';

function MemoPage(props) {

  const [memo, setMemo] = useState('');

  const {memoPage} = props;

  const Memost = styled.div`
    width: 150;
    height: 150;
    border: 1px solid black;

  `;

  return (
    <Memost>
      메모를 입력하세요
    </Memost>
  );
}

export default MemoPage;